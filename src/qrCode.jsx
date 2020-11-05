import React from 'react';

import QRCodeImpl from 'qr.js/lib/QRCode';
import ErrorCorrectLevel from 'qr.js/lib/ErrorCorrectLevel';

import noop from 'lodash/noop';
import map from 'lodash/map';
import includes from 'lodash/includes';
import replace from 'lodash/replace';
import concat from 'lodash/concat';
import {
  calculateExcavationPositions,
  calculateImagePosition,
  DEFAULT_PROPS,
  parseStyles,
  PROP_TYPES,
  SHAPE_PROP_TYPES,
} from './utils';

function convertStr (str) {
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
}

const downloadSvg = (ID) => {
  const svg = document.getElementById(ID);
  const clone = svg.cloneNode(true);
  parseStyles(clone);

  const svgDocType = document.implementation.createDocumentType('svg', '-//W3C//DTD SVG 1.1//EN', 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd');
  const svgDoc = document.implementation.createDocument('http://www.w3.org/2000/svg', 'svg', svgDocType);
  svgDoc.replaceChild(clone, svgDoc.documentElement);
  const svgData = (new XMLSerializer()).serializeToString(svgDoc);

  const a = document.createElement('a');
  a.href = 'data:image/svg+xml; charset=utf8, ' + encodeURIComponent(replace(svgData, /></g, '>\n\r<'));
  a.download = 'quintaEssentiaQRCodeGenerator.svg';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

const QRCodeBodyShapeCircle = ({ cx, cy, width, color }) => (
  <circle cx={cx + width / 2} cy={cy + width / 2} r={width / 2} fill={color} />
);

const QRCodeBodyShapeSquere = ({ cx, cy, width, color }) => (
  <rect x={cx} y={cy} width={width} height={width} fill={color} />
);

const QRCodeEyeShapeCircle = ({ x, y, width, color, bgColor }) => (
  <g>
    <circle cx={x + width / 2} cy={y + width / 2} r={width * 3} stroke={color} strokeWidth={width} fill={bgColor} />
    <circle cx={x + width / 2} cy={y + width / 2} r={width * 1.5} fill={color} />
  </g>
);

const QRCodeEyeShapeSquere = ({ x, y, width, color, bgColor }) => (
  <g>
    <rect x={x + width} y={y + width} width={width * 7} height={width * 7} fill={color} />
    <rect x={x + (width * 2.5)} y={y + (width * 2.5)} stroke={bgColor} strokeWidth={width} width={width * 4} height={width * 4} fill={color} />
  </g>
);

QRCodeBodyShapeCircle.propTypes = SHAPE_PROP_TYPES;
QRCodeBodyShapeSquere.propTypes = SHAPE_PROP_TYPES;
QRCodeEyeShapeCircle.propTypes = SHAPE_PROP_TYPES;
QRCodeEyeShapeSquere.propTypes = SHAPE_PROP_TYPES;

const QRCode = ({
  bgColor,
  fgColor,
  level,
  shape,
  eyeShape,
  size,
  imageSrc,
  imageWidth,
  imageHeight,
  imagePosition,
  imageExcavate,
  value,
  id,
}) => {
  console.log('value', value);
  const pointWidth = 5;

  const qrcode = new QRCodeImpl(-1, ErrorCorrectLevel[level]);
  qrcode.addData(convertStr(value));
  qrcode.make();

  const matrixSize = qrcode.modules.length;

  const frontEyeBallsXCoordinates = [0, 1, 2, 3, 4, 5, 6];
  const frontEyeBallsYCoordinates = [0, 1, 2, 3, 4, 5, 6];
  const backEyeBallsXCoordinates = [matrixSize - 1, matrixSize - 2, matrixSize - 3, matrixSize - 4, matrixSize - 5, matrixSize - 6, matrixSize - 7];
  const backEyeBallsYCoordinates = [matrixSize - 1, matrixSize - 2, matrixSize - 3, matrixSize - 4, matrixSize - 5, matrixSize - 6, matrixSize - 7];
  let excavationCoordinates;

  let image = null;
  if (imageSrc) {
    const { x, y } = calculateImagePosition({ imagePosition, imageWidth, imageHeight, pointWidth, matrixSize });

    if (imageExcavate) {
      excavationCoordinates = calculateExcavationPositions({ position: { x: x, y: y }, imageWidth, imageHeight, pointWidth, matrixSize });
    }

    image = (
      <image
        xlinkHref={imageSrc}
        height={imageHeight}
        width={imageWidth}
        x={x + pointWidth}
        y={y + pointWidth}
        preserveAspectRatio='none'
      />
    );
  }

  const isEyeBallsPosition = (x, y) => includes(concat(frontEyeBallsXCoordinates, backEyeBallsXCoordinates), x) &&
   includes(concat(frontEyeBallsYCoordinates, backEyeBallsYCoordinates), y) &&
   !(includes(backEyeBallsXCoordinates, x) && includes(backEyeBallsYCoordinates, y));

  const isExcavatedPosition = (x, y) => excavationCoordinates && includes(excavationCoordinates.excationPositionsX, x) && includes(excavationCoordinates.excationPositionsY, y);

  return (
    <svg
      viewBox={`0 0 ${(matrixSize + 1) * pointWidth} ${(matrixSize + 1) * pointWidth}`}
      width={`${size}px`}
      height={`${size}px`}
      style={{ backgroundColor: bgColor }}
      id={id}
      onClick={() => downloadSvg(id)}
    >
      <g id='points' >
        {map(
          qrcode.modules,
          (row, rIndex) => map(
            row,
            (col, cIndex) => {
              if (col && !isEyeBallsPosition(rIndex, cIndex) && !isExcavatedPosition(rIndex, cIndex)) {
                return (
                  shape === 'circle' ? <QRCodeBodyShapeCircle cx={(rIndex + 1) * pointWidth} cy={(cIndex + 1) * pointWidth} width={pointWidth} color={fgColor} />
                    : <QRCodeBodyShapeSquere cx={(rIndex + 1) * pointWidth} cy={(cIndex + 1) * pointWidth} width={pointWidth} color={fgColor} />
                );
              }

              return noop();
            }
          )
        )}
      </g>
      {eyeShape === 'circle'
        ? <g id='eyes'>
          <QRCodeEyeShapeCircle bgColor={bgColor} color={fgColor} x={(8.5 * pointWidth) / 2} y={(8.5 * pointWidth) / 2} width={pointWidth}/>
          <QRCodeEyeShapeCircle bgColor={bgColor} color={fgColor} x={(matrixSize - 3.5) * pointWidth} y={(8.5 * pointWidth) / 2} width={pointWidth}/>
          <QRCodeEyeShapeCircle bgColor={bgColor} color={fgColor} x={(8.5 * pointWidth) / 2} y={(matrixSize - 3.5) * pointWidth} width={pointWidth}/>
        </g>
        : <g id='eyes'>
          <QRCodeEyeShapeSquere bgColor={bgColor} color={fgColor} x={0} y={0} width={pointWidth}/>
          <QRCodeEyeShapeSquere bgColor={bgColor} color={fgColor} x={(matrixSize - 7) * pointWidth} y={0} width={pointWidth}/>
          <QRCodeEyeShapeSquere bgColor={bgColor} color={fgColor} x={0} y={(matrixSize - 7) * pointWidth} width={pointWidth}/>
        </g>}
      {imageSrc && image}
    </svg>
  );
};

QRCode.propTypes = PROP_TYPES;

QRCode.defaultProps = DEFAULT_PROPS;

export default QRCode;
