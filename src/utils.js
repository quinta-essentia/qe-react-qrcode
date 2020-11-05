import PropTypes from 'prop-types';

const DEFAULT_PROPS = {
  bgColor: '#FFFFFF',
  eyeShape: 'quadrant',
  fgColor: '#000000',
  id: 'svgID',
  level: 'L',
  shape: 'quadrant',
  size: 256,
};

const PROP_TYPES = {
  bgColor: PropTypes.string,
  eyeShape: PropTypes.oneOf(['circle', 'quadrant']),
  fgColor: PropTypes.string,
  id: PropTypes.string,
  imageExcavate: PropTypes.bool,
  imageHeight: PropTypes.number,
  imagePosition: PropTypes.oneOf(['TOP', 'BOTTOM', 'LEFT', 'RIGHT', 'CENTER']),
  imageSrc: PropTypes.string,
  imageWidth: PropTypes.number,
  level: PropTypes.oneOf(['L', 'M', 'Q', 'H']),
  shape: PropTypes.oneOf(['circle', 'quadrant']),
  size: PropTypes.number,
  value: PropTypes.string.isRequired,
};

const SHAPE_PROP_TYPES = {
  cx: PropTypes.number.isRequired,
  cy: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

const parseStyles = function (svg) {
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
  return {
    excationPositionsX,
    excationPositionsY,
  };
};

export {
  parseStyles,
  calculateImagePosition,
  calculateExcavationPositions,
  DEFAULT_PROPS,
  PROP_TYPES,
  SHAPE_PROP_TYPES,
};
