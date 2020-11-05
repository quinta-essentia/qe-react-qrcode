import React from 'react';
import PropTypes from 'prop-types';

// import forEach from 'lodash/forEach';
import map from 'lodash/map';

import QRCodeImpl from 'qr.js/lib/QRCode';
import ErrorCorrectLevel from 'qr.js/lib/ErrorCorrectLevel';
import noop from 'lodash/noop';
import includes from 'lodash/includes';
import replace from 'lodash/replace';
import {
  SHAPE_PROP_TYPES,
  parseStyles
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
  value,
  id = 'svgID',
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

  const isEyeBallsPosition = (x, y) => includes([...frontEyeBallsXCoordinates, ...backEyeBallsXCoordinates], x) &&
   includes([...frontEyeBallsYCoordinates, ...backEyeBallsYCoordinates], y) &&
   !(includes(backEyeBallsXCoordinates, x) && includes(backEyeBallsYCoordinates, y));

  console.log('matrix', matrixSize, qrcode.modules);

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
              console.log('point', rIndex, cIndex, col);

              if (col && !isEyeBallsPosition(rIndex, cIndex)) {
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

    </svg>
  );
};

export default QRCode;

// import {
//   circlePath,
//   DEFAULT_PROPS,
//   PROP_TYPES,
//   MARGIN_SIZE,
//   DEFAULT_IMG_SCALE,
//   SUPPORTS_PATH2D,
// } from './utils';

// function generatePath (modules, margin = 0) {
//   const ops = [];
//   console.log(modules);
//   forEach(modules, function (row, y) {
//     let start = null;
//     forEach(row, function (cell, x) {
//       if (!cell && start !== null) {
//         ops.push(
//           `M${start + margin} ${y + margin}h${x - start}v1H${start + margin}z`
//         );
//         start = null;
//         return;
//       }

//       if (x === row.length - 1) {
//         if (!cell) {
//           return;
//         }
//         if (start === null) {
//           ops.push(`M${x + margin},${y + margin} h1v1H${x + margin}z`);
//         } else {
//           ops.push(
//             `M${start + margin},${y + margin} h${x + 1 - start}v1H${start +
//               margin}z`
//           );
//         }
//         return;
//       }

//       if (cell && start === null) {
//         start = x;
//       }
//     });
//   });
//   return ops.join('');
// }

// function generateCirclePath (modules, margin = 0, radius, thickness) {
//   const ops = [];
//   forEach(modules, (row, y) => {
//     forEach(row, (cell, x) => {
//       if (cell) {
//         ops.push(circlePath(x + margin, y + margin, radius * thickness));
//       }
//     });
//   });
//   return ops.join('');
// }

// // eslint-disable-next-line no-unused-vars
// function generatePathObjects (modules, width) {
//   const ops = [];
//   forEach(modules, (row, y) => {
//     forEach(row, (cell, x) => {
//       if (cell) {
//         ops.push({ x, y, width });
//       }
//     });
//   });
//   return ops;
// }

// function excavateModules (modules, excavation) {
//   return map(modules.slice(), (row, y) => {
//     if (y < excavation.y || y >= excavation.y + excavation.h) {
//       return row;
//     }
//     return map(row, (cell, x) => {
//       if (x < excavation.x || x >= excavation.x + excavation.w) {
//         return cell;
//       }
//       return false;
//     });
//   });
// }

// function getImageSettings (
//   props,
//   cells
// ) {
//   const { imageSettings, size, includeMargin } = props;
//   if (imageSettings == null) {
//     return null;
//   }
//   const margin = includeMargin ? MARGIN_SIZE : 0;
//   const numCells = cells.length + margin * 2;
//   const defaultSize = Math.floor(size * DEFAULT_IMG_SCALE);
//   const scale = numCells / size;
//   const w = (imageSettings.width || defaultSize) * scale;
//   const h = (imageSettings.height || defaultSize) * scale;
//   const x =
//     imageSettings.x == null
//       ? cells.length / 2 - w / 2
//       : imageSettings.x * scale;
//   const y =
//     imageSettings.y == null
//       ? cells.length / 2 - h / 2
//       : imageSettings.y * scale;

//   let excavation = null;
//   if (imageSettings.excavate) {
//     const floorX = Math.floor(x);
//     const floorY = Math.floor(y);
//     const ceilW = Math.ceil(w + x - floorX);
//     const ceilH = Math.ceil(h + y - floorY);
//     excavation = { x: floorX, y: floorY, w: ceilW, h: ceilH };
//   }
//   return { x, y, h, w, excavation };
// }

// class QRCodeCanvas extends React.PureComponent {
//   constructor (props) {
//     super(props);
//     this.state = { imgLoaded: false };
//     this.handleImageLoad = this.handleImageLoad.bind(this);
//     this.update = this.update.bind(this);
//   }

//   componentDidMount () {
//     this.update();
//   }

//   componentDidUpdate () {
//     this.update();
//   }

//   update () {
//     const {
//       value,
//       size,
//       level,
//       bgColor,
//       fgColor,
//       includeMargin,
//       imageSettings,
//       shape,
//     } = this.props;

//     const qrcode = new QRCodeImpl(-1, ErrorCorrectLevel[level]);
//     qrcode.addData(convertStr(value));
//     qrcode.make();

//     if (this._canvas != null) {
//       const canvas = this._canvas;

//       const ctx = canvas.getContext('2d');
//       if (!ctx) {
//         return;
//       }

//       let cells = qrcode.modules;
//       console.log(cells);
//       if (cells === null) {
//         return;
//       }

//       const margin = includeMargin ? MARGIN_SIZE : 0;
//       const numCells = cells.length + margin * 2;
//       const calculatedImageSettings = getImageSettings(this.props, cells);

//       if (imageSettings != null && calculatedImageSettings != null) {
//         if (calculatedImageSettings.excavation != null) {
//           cells = excavateModules(cells, calculatedImageSettings.excavation);
//         }
//       }

//       const pixelRatio = window.devicePixelRatio || 1;
//       canvas.height = canvas.width = size * pixelRatio;
//       const scale = (size / numCells) * pixelRatio;
//       ctx.scale(scale, scale);

//       ctx.fillStyle = bgColor;
//       ctx.fillRect(0, 0, numCells, numCells);

//       ctx.fillStyle = fgColor;
//       if (SUPPORTS_PATH2D) {
//         // eslint-disable-next-line lodash/prefer-lodash-method
//         ctx.fill(new Path2D(shape === 'circle' ? generateCirclePath(cells, margin, scale) : generatePath(cells, margin)));
//       } else {
//         forEach(cells, function (row, rdx) {
//           forEach(row, function (cell, cdx) {
//             if (cell) {
//               ctx.fillRect(cdx + margin, rdx + margin, 1, 1);
//             }
//           });
//         });
//       }
//       if (
//         this.state.imgLoaded &&
//         this._image &&
//         calculatedImageSettings != null
//       ) {
//         ctx.drawImage(
//           this._image,
//           calculatedImageSettings.x + margin,
//           calculatedImageSettings.y + margin,
//           calculatedImageSettings.w,
//           calculatedImageSettings.h
//         );
//       }
//     }
//   }

//   handleImageLoad () {
//     this.setState({ imgLoaded: true });
//   };

//   render () {
//     const {
//       value,
//       size,
//       level,
//       bgColor,
//       fgColor,
//       style,
//       includeMargin,
//       imageSettings,
//       ...otherProps
//     } = this.props;
//     console.log(this.props);
//     const canvasStyle = { height: size, width: size, ...style };
//     let img = null;
//     const imgSrc = imageSettings && imageSettings.src;
//     if (imageSettings != null && imgSrc != null) {
//       img = (
//         <img
//           src={imgSrc}
//           style={{ display: 'none' }}
//           onLoad={this.handleImageLoad}
//           ref={(ref) =>
//             (this._image = ref)
//           }
//         />
//       );
//     }
//     return (
//       <>
//         <canvas
//           style={canvasStyle}
//           height={size}
//           width={size}
//           ref={(ref) =>
//             (this._canvas = ref)
//           }
//           {...otherProps}
//         />
//         {img}
//       </>
//     );
//   }
// }

// QRCodeCanvas.defaultProps = DEFAULT_PROPS;

// if (process.env.NODE_ENV !== 'production') {
//   QRCodeCanvas.propTypes = PROP_TYPES;
// }

// class QRCodeSVG extends React.PureComponent {
//   render () {
//     const {
//       value,
//       size,
//       level,
//       bgColor,
//       fgColor,
//       includeMargin,
//       imageSettings,
//       shape,
//       thickness,
//       withCircleEyes,
//       ...otherProps
//     } = this.props;

//     const qrcode = new QRCodeImpl(-1, ErrorCorrectLevel[level]);
//     qrcode.addData(convertStr(value));
//     qrcode.make();

//     let cells = qrcode.modules;
//     if (cells === null) {
//       return null;
//     }

//     const margin = includeMargin ? MARGIN_SIZE : 0;
//     const numCells = cells.length + margin * 2;
//     const calculatedImageSettings = getImageSettings(this.props, cells);

//     let image = null;
//     if (imageSettings != null && calculatedImageSettings != null) {
//       if (calculatedImageSettings.excavation != null) {
//         cells = excavateModules(cells, calculatedImageSettings.excavation);
//       }

//       image = (
//         <image
//           xlinkHref={imageSettings.src}
//           height={calculatedImageSettings.h}
//           width={calculatedImageSettings.w}
//           x={calculatedImageSettings.x + margin}
//           y={calculatedImageSettings.y + margin}
//           preserveAspectRatio='none'
//         />
//       );
//     }

//     const cellPrecentage = (100 / numCells) * 8;

//     const fgPath = shape === 'circle' ? generateCirclePath(cells, margin, (size - (margin * 4)) / cellPrecentage / 100, thickness) : generatePath(cells, margin);

//     const halfOfCellPrecentage = margin ? (cellPrecentage / 2) * 2 : cellPrecentage / 2;

//     return (
//       <svg
//         shapeRendering='geometricPrecision'
//         height={size}
//         width={size}
//         viewBox={`0 0 ${numCells} ${numCells}`}
//         xmlns='http://www.w3.org/2000/svg'
//         {...otherProps}>
//         <path fill={bgColor} d={`M0,0 h${numCells}v${numCells}H0z`} />
//         <path fill={fgColor} d={fgPath} shapeRendering='geometricPrecision'/>
//         {withCircleEyes &&
//         <svg style={{ zIndex: 100 }} viewBox={`0 0 ${numCells} ${numCells}`} shapeRendering='geometricPrecision'>
//           <rect x={margin} y={margin} height={`${cellPrecentage}%`} width={`${cellPrecentage}%`} fill={bgColor}></rect>
//           <circle cx={`${halfOfCellPrecentage}%`} cy={`${halfOfCellPrecentage}%`} r={`${cellPrecentage / 3}%`} stroke={fgColor} strokeWidth={`${cellPrecentage / 8}%`} fill={bgColor}></circle>
//           <circle cx={`${halfOfCellPrecentage}%`} cy={`${halfOfCellPrecentage}%`} r={`${cellPrecentage / 7}%`} fill={fgColor}></circle>
//           <rect x={numCells - 7 - margin} y={margin} height={`${cellPrecentage}%`} width={`${cellPrecentage}%`} fill={bgColor}></rect>
//           <circle cx={`${100 - halfOfCellPrecentage}%`} cy={`${halfOfCellPrecentage}%`} r={`${cellPrecentage / 3}%`} stroke={fgColor} strokeWidth={`${cellPrecentage / 8}%`} fill={bgColor}></circle>
//           <circle cx={`${100 - halfOfCellPrecentage}%`} cy={`${halfOfCellPrecentage}%`} r={`${cellPrecentage / 7}%`} fill={fgColor}></circle>
//           <rect y={numCells - 8 - margin} x={margin} height={`${cellPrecentage}%`} width={`${cellPrecentage}%`} fill={bgColor}></rect>
//           <circle cx={`${halfOfCellPrecentage}%`} cy={`${100 - halfOfCellPrecentage}%`} r={`${cellPrecentage / 3}%`} stroke={fgColor} strokeWidth={`${cellPrecentage / 8}%`} fill={bgColor}></circle>
//           <circle cx={`${halfOfCellPrecentage}%`} cy={`${100 - halfOfCellPrecentage}%`} r={`${cellPrecentage / 7}%`} fill={fgColor}></circle>
//         </svg>}
//         {imageSettings.src && image}
//       </svg>
//     );
//   }
// }

// QRCodeSVG.defaultProps = DEFAULT_PROPS;

// if (process.env.NODE_ENV !== 'production') {
//   QRCodeSVG.propTypes = PROP_TYPES;
// }

// const QRCode = (props) => {
//   const { renderAs, ...otherProps } = props;
//   const Component = renderAs === 'svg' ? QRCodeSVG : QRCodeCanvas;
//   return <Component {...otherProps} />;
// };

// QRCode.propTypes = {
//   renderAs: PropTypes.string,
// };

// QRCode.defaultProps = { renderAs: 'svg', ...DEFAULT_PROPS };

// export default QRCode;
