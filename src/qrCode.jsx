import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import noop from 'lodash/noop';
import map from 'lodash/map';
import includes from 'lodash/includes';
import concat from 'lodash/concat';
import has from 'lodash/has';

import QRCodeImpl from 'qr.js/lib/QRCode';
import ErrorCorrectLevel from 'qr.js/lib/ErrorCorrectLevel';

import {
  calculateExcavationPositions,
  calculateImagePosition,
  convertStr,
  getDimensions,
  calculateImageSize,
} from './utils';

const QRCodeBodyShapePropTypes = {
  cx: PropTypes.number.isRequired,
  cy: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

const QRCodeEyeShapePropTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

const QRCodeBodyShapeCircle = ({ cx, cy, width, color }) => (
  <circle cx={cx + width / 2} cy={cy + width / 2} r={width / 2} fill={color} />
);

const QRCodeBodyShapeSquere = ({ cx, cy, width, color }) => (
  <rect x={cx} y={cy} width={width} height={width} fill={color} />
);

QRCodeBodyShapeCircle.propTypes = QRCodeBodyShapePropTypes;
QRCodeBodyShapeSquere.propTypes = QRCodeBodyShapePropTypes;

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

QRCodeEyeShapeCircle.propTypes = QRCodeEyeShapePropTypes;
QRCodeEyeShapeSquere.propTypes = QRCodeEyeShapePropTypes;

const QRCodeImage = ({ imageSrc, x, y, width, height }) => (
  <image
    xlinkHref={imageSrc}
    style={{ width, height }}
    x={x}
    y={y}
    preserveAspectRatio='none'
  />
);

QRCodeImage.propTypes = {
  height: PropTypes.number.isRequired,
  imageSrc: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
};

const QRCode = ({
  bgColor,
  eyeShape,
  fgColor,
  id,
  imageExcavate,
  imagePosition,
  imageSrc,
  imageRatio,
  level,
  shape,
  size,
  value,
}) => {
  useEffect(() => {
    (async () => {
      if (imageSrc) {
        const { width, height } = await getDimensions(imageSrc);
        const { w, h } = calculateImageSize({ width, height, imageRatio, qrCodeSize: size });
        const { x, y } = calculateImagePosition({ imagePosition, imageWidth: w, imageHeight: h, pointWidth, matrixSize });
        // imageOptions = { imageWidth: w, imageHeight: h, imagePositionX: x + pointWidth, imagePositionY: y + pointWidth };
        let excavationCoordinates;
        if (imageExcavate) {
          excavationCoordinates = calculateExcavationPositions({ position: { x, y }, imageWidth: w, imageHeight: h, pointWidth, matrixSize });
        }
        console.log(excavationCoordinates);
        if (!has(imageOptions, 'imagePositionY')) setImageOptions({ imageWidth: w, imageHeight: h, imagePositionX: x + pointWidth, imagePositionY: y + pointWidth, excavationCoordinates: excavationCoordinates });
      }
    })();
  }, [imageSrc]);

  const [imageOptions, setImageOptions] = useState({ imageWidth: 0, imageHeight: 0 });
  const pointWidth = 5;

  const qrcode = new QRCodeImpl(-1, ErrorCorrectLevel[level]);
  qrcode.addData(convertStr(value));
  qrcode.make();

  const matrixSize = qrcode.modules.length;

  const frontEyeBallsXCoordinates = [0, 1, 2, 3, 4, 5, 6];
  const frontEyeBallsYCoordinates = [0, 1, 2, 3, 4, 5, 6];
  const backEyeBallsXCoordinates = [matrixSize - 1, matrixSize - 2, matrixSize - 3, matrixSize - 4, matrixSize - 5, matrixSize - 6, matrixSize - 7];
  const backEyeBallsYCoordinates = [matrixSize - 1, matrixSize - 2, matrixSize - 3, matrixSize - 4, matrixSize - 5, matrixSize - 6, matrixSize - 7];

  const isEyeBallsPosition = (x, y) => includes(concat(frontEyeBallsXCoordinates, backEyeBallsXCoordinates), x) &&
   includes(concat(frontEyeBallsYCoordinates, backEyeBallsYCoordinates), y) &&
   !(includes(backEyeBallsXCoordinates, x) && includes(backEyeBallsYCoordinates, y));

  const isExcavatedPosition = (x, y) => imageOptions.excavationCoordinates && includes(imageOptions.excavationCoordinates.excationPositionsX, x) && includes(imageOptions.excavationCoordinates.excationPositionsY, y);

  return (
    <svg
      viewBox={`0 0 ${(matrixSize + 2) * pointWidth} ${(matrixSize + 2) * pointWidth}`}
      width={`${size}px`}
      height={`${size}px`}
      style={{ backgroundColor: bgColor }}
      id={id}
    >
      <g id='points' >
        {map(
          qrcode.modules,
          (row, rIndex) => map(
            row,
            (col, cIndex) => {
              if (col && !isEyeBallsPosition(rIndex, cIndex) && !isExcavatedPosition(rIndex, cIndex)) {
                return (
                  shape === 'CIRCLE'
                    ? <QRCodeBodyShapeCircle cx={(rIndex + 1) * pointWidth} cy={(cIndex + 1) * pointWidth} width={pointWidth} color={fgColor} />
                    : <QRCodeBodyShapeSquere cx={(rIndex + 1) * pointWidth} cy={(cIndex + 1) * pointWidth} width={pointWidth} color={fgColor} />
                );
              }
              return noop();
            }
          )
        )}
      </g>
      {eyeShape === 'CIRCLE'
        ? (
          <g id='eyes'>
            <QRCodeEyeShapeCircle bgColor={bgColor} color={fgColor} x={(8.5 * pointWidth) / 2} y={(8.5 * pointWidth) / 2} width={pointWidth}/>
            <QRCodeEyeShapeCircle bgColor={bgColor} color={fgColor} x={(matrixSize - 3.5) * pointWidth} y={(8.5 * pointWidth) / 2} width={pointWidth}/>
            <QRCodeEyeShapeCircle bgColor={bgColor} color={fgColor} x={(8.5 * pointWidth) / 2} y={(matrixSize - 3.5) * pointWidth} width={pointWidth}/>
          </g>
        )
        : (
          <g id='eyes'>
            <QRCodeEyeShapeSquere bgColor={bgColor} color={fgColor} x={0} y={0} width={pointWidth}/>
            <QRCodeEyeShapeSquere bgColor={bgColor} color={fgColor} x={(matrixSize - 7) * pointWidth} y={0} width={pointWidth}/>
            <QRCodeEyeShapeSquere bgColor={bgColor} color={fgColor} x={0} y={(matrixSize - 7) * pointWidth} width={pointWidth}/>
          </g>
        )
      }
      {imageSrc && (
        <QRCodeImage
          imageSrc={imageSrc}
          height={imageOptions.imageHeight}
          width={imageOptions.imageWidth}
          x={imageOptions.imagePositionX}
          y={imageOptions.imagePositionY}
        />
      )}
    </svg>
  );
};

QRCode.defaultProps = {
  bgColor: '#FFFFFF',
  eyeShape: 'SQUERE',
  fgColor: '#000000',
  id: 'qrCodeSvg',
  level: 'M',
  shape: 'SQUERE',
  size: 256,
  imageRatio: 50,
};

QRCode.propTypes = {
  bgColor: PropTypes.string,
  eyeShape: PropTypes.oneOf(['CIRCLE', 'SQUERE']),
  fgColor: PropTypes.string,
  id: PropTypes.string,
  imageExcavate: PropTypes.bool,
  imageRatio: PropTypes.number,
  imagePosition: PropTypes.oneOf(['TOP', 'BOTTOM', 'LEFT', 'RIGHT', 'CENTER']),
  imageSrc: PropTypes.string,
  level: PropTypes.oneOf(['L', 'M', 'Q', 'H']),
  shape: PropTypes.oneOf(['CIRCLE', 'SQUERE']),
  size: PropTypes.number,
  value: PropTypes.string.isRequired,
};

export default QRCode;
