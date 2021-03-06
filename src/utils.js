import replace from 'lodash/replace';
import { saveSvgAsPng, svgAsDataUri } from 'save-svg-as-png';
import { jsPDF } from 'jspdf';

const convertStr = (str) => {
  let out = '';

  for (let i = 0; i < str.length; i++) {
    let charcode = str.charCodeAt(i);
    if (charcode < 0x0080) {
      out += String.fromCharCode(charcode);
    } else if (charcode < 0x0800) {
      out += String.fromCharCode(0xc0 | (charcode >> 6));
      out += String.fromCharCode(0x80 | (charcode & 0x3f));
    } else if (charcode < 0xd800 || charcode >= 0xe000) {
      out += String.fromCharCode(0xe0 | (charcode >> 12));
      out += String.fromCharCode(0x80 | ((charcode >> 6) & 0x3f));
      out += String.fromCharCode(0x80 | (charcode & 0x3f));
    } else {
      i++;
      charcode =
        0x10000 + (((charcode & 0x3ff) << 10) | (str.charCodeAt(i) & 0x3ff));
      out += String.fromCharCode(0xf0 | (charcode >> 18));
      out += String.fromCharCode(0x80 | ((charcode >> 12) & 0x3f));
      out += String.fromCharCode(0x80 | ((charcode >> 6) & 0x3f));
      out += String.fromCharCode(0x80 | (charcode & 0x3f));
    }
  }

  return out;
};

const downloadAsSvg = (id) => {
  const svg = document.getElementById(id);
  const clone = svg.cloneNode(true);
  parseStyles(clone);

  const svgDocType = document.implementation.createDocumentType('svg', '-//W3C//DTD SVG 1.1//EN', 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd');
  const svgDoc = document.implementation.createDocument('http://www.w3.org/2000/svg', 'svg', svgDocType);
  svgDoc.replaceChild(clone, svgDoc.documentElement);
  const svgData = (new XMLSerializer()).serializeToString(svgDoc);

  const a = document.createElement('a');
  a.href = 'data:image/svg+xml; charset=utf8, ' + encodeURIComponent(replace(svgData, /></g, '>\n\r<'));
  a.download = `${id}.svg`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

const downloadAsPng = (id) => {
  saveSvgAsPng(document.getElementById(id), `${id}.png`);
  // CORS is blocking download cuz it's http on local.
};

const imageDimensions = file =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const { naturalWidth: width, naturalHeight: height } = img;
      resolve({ width, height });
    };
    img.onerror = (err) => {
      reject(new Error('There was some problem with the image.', err));
    };

    img.src = file;
  });

const getDimensions = async (file) => {
  try {
    const dimensions = await imageDimensions(file);
    return dimensions;
  } catch (error) {
    console.error(error);
  }
};

const downloadAsPdf = (id, size) => {
  const svg = document.getElementById(id);
  svgAsDataUri(svg, {}, function (svgUri) {
    const image = document.createElement('img');

    image.src = svgUri;
    image.onload = function () {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      // eslint-disable-next-line new-cap
      const doc = new jsPDF('portrait', 'pt', [image.width, image.height]); // It's 3rd party library

      canvas.width = image.width;
      canvas.height = image.height;
      context.drawImage(image, 0, 0, image.width, image.height);
      const dataUrl = canvas.toDataURL('image/jpeg');
      doc.addImage(dataUrl, 'JPEG', 0, 0, image.width, image.height);

      const dataUriString = doc.output('dataurlstring');
      const link = document.createElement('a');
      link.addEventListener('click', () => {
        link.href = dataUriString;
        link.download = `${id}.pdf`;
        document.body.removeChild(link);
      }, false);
      document.body.appendChild(link);
      link.click();
    };
  });
};

const parseStyles = (svg) => {
  const styleSheets = [];
  const docStyles = svg.ownerDocument.styleSheets;
  for (let i = 0; i < docStyles.length; i++) {
    styleSheets.push(docStyles[i]);
  }

  if (!styleSheets.length) {
    return;
  }

  const defs = svg.querySelector('defs') || document.createElementNS('http://www.w3.org/2000/svg', 'defs');
  if (!defs.parentNode) {
    svg.insertBefore(defs, svg.firstElementChild);
  }
  svg.matches = svg.matches || svg.webkitMatchesSelector || svg.mozMatchesSelector || svg.msMatchesSelector || svg.oMatchesSelector;

  for (let i = 0; i < styleSheets.length; i++) {
    const currentStyle = styleSheets[i];

    let rules;
    try {
      rules = currentStyle.cssRules;
    } catch (e) {
      continue;
    }
    const style = document.createElement('style');
    const l = rules && rules.length;
    for (let j = 0; j < l; j++) {
      const selector = rules[j].selectorText;
      if (!selector) {
        continue;
      }
      if ((svg.matches && svg.matches(selector)) || svg.querySelector(selector)) {
        style.innerHTML += rules[j].cssText + '\n';
      }
    }
    if (style.innerHTML) {
      defs.appendChild(style);
    }
  }
};

const calculateImagePosition = ({ imagePosition, imageWidth, imageHeight, pointWidth, matrixSize }) => {
  const gridCells = matrixSize * pointWidth;
  switch (imagePosition) {
    case 'TOP':
      return { x: gridCells / 2 - imageWidth / 2, y: 0 };
    case 'BOTTOM':
      return { x: gridCells / 2 - imageWidth / 2, y: gridCells - imageHeight };
    case 'RIGHT':
      return { x: gridCells - imageWidth, y: gridCells / 2 - imageHeight / 2 };
    case 'LEFT':
      return { x: 0, y: gridCells / 2 - imageHeight / 2 };
    default: return { x: gridCells / 2 - imageWidth / 2, y: gridCells / 2 - imageHeight / 2 };
  }
};

const calculateExcavationPositions = ({ position: { x, y }, imageWidth, imageHeight, pointWidth }) => {
  const numOfExcavatedXCells = Math.ceil(imageWidth / pointWidth) + 1;
  const numOfExcavatedYCells = Math.ceil(imageHeight / pointWidth) + 1;
  const imageStartingXIndex = Math.floor(x / pointWidth);
  const imageStartingYIndex = Math.floor(y / pointWidth);
  const excationPositionsX = [];
  const excationPositionsY = [];
  for (let i = 0; i < numOfExcavatedXCells; i++) {
    excationPositionsX.push(imageStartingXIndex + i);
  }
  for (let i = 0; i < numOfExcavatedYCells; i++) {
    excationPositionsY.push(imageStartingYIndex + i);
  }

  if ((x % pointWidth) < (pointWidth / 2)) excationPositionsX.pop();
  if ((y % pointWidth) < (pointWidth / 2)) excationPositionsY.pop();
  return {
    excationPositionsX,
    excationPositionsY,
  };
};

const calculateImageSize = ({ width, height, imageRatio, qrCodeSize }) => {
  const ratio = imageRatio / 100;
  const maxSize = (3 / 10) * qrCodeSize;
  const dimensions = {};
  if (width > height) {
    const imageWidthToSizeRatio = maxSize / width;
    dimensions.w = maxSize * ratio;
    dimensions.h = height * imageWidthToSizeRatio * ratio;
  } else if (width < height) {
    const imageHeightToSizeRatio = maxSize / height;
    dimensions.w = width * imageHeightToSizeRatio * ratio;
    dimensions.h = maxSize * ratio;
  } else {
    dimensions.w = maxSize * ratio;
    dimensions.h = maxSize * ratio;
  }
  return dimensions;
};

export {
  calculateExcavationPositions,
  calculateImagePosition,
  calculateImageSize,
  convertStr,
  downloadAsSvg,
  downloadAsPng,
  downloadAsPdf,
  parseStyles,
  getDimensions,
};
