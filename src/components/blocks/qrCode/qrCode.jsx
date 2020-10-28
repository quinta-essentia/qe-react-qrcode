import React from 'react';
import PropTypes from 'prop-types';

import forEach from 'lodash/forEach';
import map from 'lodash/map';
import fill from 'lodash/fill';

import QRCodeImpl from 'qr.js/lib/QRCode';
import ErrorCorrectLevel from 'qr.js/lib/ErrorCorrectLevel';

function convertStr (str) {
  console.log(str);
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

const DEFAULT_PROPS = {
  size: 128,
  level: 'L',
  bgColor: '#FFFFFF',
  fgColor: '#000000',
  includeMargin: false,
};

const PROP_TYPES =
  process.env.NODE_ENV !== 'production'
    ? {
      value: PropTypes.string.isRequired,
      size: PropTypes.number,
      level: PropTypes.oneOf(['L', 'M', 'Q', 'H']),
      bgColor: PropTypes.string,
      fgColor: PropTypes.string,
      includeMargin: PropTypes.bool,
      imageSettings: PropTypes.shape({
        src: PropTypes.string.isRequired,
        height: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
        excavate: PropTypes.bool,
        x: PropTypes.number,
        y: PropTypes.number,
      }),
    }
    : {};

const MARGIN_SIZE = 4;
const DEFAULT_IMG_SCALE = 0.1;

function generatePath (modules, margin = 0) {
  const ops = [];
  forEach(modules, function (row, y) {
    let start = null;
    forEach(row, function (cell, x) {
      if (!cell && start !== null) {
        ops.push(
          `M${start + margin} ${y + margin}h${x - start}v1H${start + margin}z`
        );
        start = null;
        return;
      }

      if (x === row.length - 1) {
        if (!cell) {
          return;
        }
        if (start === null) {
          ops.push(`M${x + margin},${y + margin} h1v1H${x + margin}z`);
        } else {
          ops.push(
            `M${start + margin},${y + margin} h${x + 1 - start}v1H${start +
              margin}z`
          );
        }
        return;
      }

      if (cell && start === null) {
        start = x;
      }
    });
  });
  return ops.join('');
}

function excavateModules (modules, excavation) {
  return map(modules.slice(), (row, y) => {
    if (y < excavation.y || y >= excavation.y + excavation.h) {
      return row;
    }
    return map(row, (cell, x) => {
      if (x < excavation.x || x >= excavation.x + excavation.w) {
        return cell;
      }
      return false;
    });
  });
}

function getImageSettings (
  props,
  cells
) {
  const { imageSettings, size, includeMargin } = props;
  if (imageSettings == null) {
    return null;
  }
  const margin = includeMargin ? MARGIN_SIZE : 0;
  const numCells = cells.length + margin * 2;
  const defaultSize = Math.floor(size * DEFAULT_IMG_SCALE);
  const scale = numCells / size;
  const w = (imageSettings.width || defaultSize) * scale;
  const h = (imageSettings.height || defaultSize) * scale;
  const x =
    imageSettings.x == null
      ? cells.length / 2 - w / 2
      : imageSettings.x * scale;
  const y =
    imageSettings.y == null
      ? cells.length / 2 - h / 2
      : imageSettings.y * scale;

  let excavation = null;
  if (imageSettings.excavate) {
    const floorX = Math.floor(x);
    const floorY = Math.floor(y);
    const ceilW = Math.ceil(w + x - floorX);
    const ceilH = Math.ceil(h + y - floorY);
    excavation = { x: floorX, y: floorY, w: ceilW, h: ceilH };
  }

  return { x, y, h, w, excavation };
}

const SUPPORTS_PATH2D = (function () {
  try {
    new Path2D().addPath(new Path2D());
  } catch (e) {
    return false;
  }
  return true;
})();

class QRCodeCanvas extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = { imgLoaded: false };
    this.defaultProps = DEFAULT_PROPS;
  }

  componentDidMount () {
    this.update();
  }

  componentDidUpdate () {
    this.update();
  }

  update () {
    const {
      value,
      size,
      level,
      bgColor,
      fgColor,
      includeMargin,
      imageSettings,
    } = this.props;

    const qrcode = new QRCodeImpl(-1, ErrorCorrectLevel[level]);
    qrcode.addData(convertStr(value));
    qrcode.make();

    if (this._canvas != null) {
      const canvas = this._canvas;

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        return;
      }

      let cells = qrcode.modules;
      if (cells === null) {
        return;
      }

      const margin = includeMargin ? MARGIN_SIZE : 0;
      const numCells = cells.length + margin * 2;
      const calculatedImageSettings = getImageSettings(this.props, cells);

      if (imageSettings != null && calculatedImageSettings != null) {
        if (calculatedImageSettings.excavation != null) {
          cells = excavateModules(cells, calculatedImageSettings.excavation);
        }
      }

      const pixelRatio = window.devicePixelRatio || 1;
      canvas.height = canvas.width = size * pixelRatio;
      const scale = (size / numCells) * pixelRatio;
      ctx.scale(scale, scale);

      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, numCells, numCells);

      ctx.fillStyle = fgColor;
      if (SUPPORTS_PATH2D) {
        fill(ctx, new Path2D(generatePath(cells, margin)));
      } else {
        forEach(cells, function (row, rdx) {
          forEach(row, function (cell, cdx) {
            if (cell) {
              ctx.fillRect(cdx + margin, rdx + margin, 1, 1);
            }
          });
        });
      }
      if (
        this.state.imgLoaded &&
        this._image &&
        calculatedImageSettings != null
      ) {
        ctx.drawImage(
          this._image,
          calculatedImageSettings.x + margin,
          calculatedImageSettings.y + margin,
          calculatedImageSettings.w,
          calculatedImageSettings.h
        );
      }
    }
  }

  handleImageLoad () {
    this.setState({ imgLoaded: true });
  };

  render () {
    const {
      value,
      size,
      level,
      bgColor,
      fgColor,
      style,
      includeMargin,
      imageSettings,
      ...otherProps
    } = this.props;
    console.log(this.props);
    const canvasStyle = { height: size, width: size, ...style };
    let img = null;
    const imgSrc = imageSettings && imageSettings.src;
    if (imageSettings != null && imgSrc != null) {
      img = (
        <img
          src={imgSrc}
          style={{ display: 'none' }}
          onLoad={this.handleImageLoad}
          ref={(ref) =>
            (this._image = ref)
          }
        />
      );
    }
    return (
      <>
        <canvas
          style={canvasStyle}
          height={size}
          width={size}
          ref={(ref) =>
            (this._canvas = ref)
          }
          {...otherProps}
        />
        {img}
      </>
    );
  }
}

if (process.env.NODE_ENV !== 'production') {
  QRCodeCanvas.propTypes = PROP_TYPES;
}

class QRCodeSVG extends React.PureComponent {
  constructor (props) {
    super(props);
    this.defaultProps = DEFAULT_PROPS;
  }

  render () {
    const {
      value,
      size,
      level,
      bgColor,
      fgColor,
      includeMargin,
      imageSettings,
      ...otherProps
    } = this.props;

    const qrcode = new QRCodeImpl(-1, ErrorCorrectLevel[level]);
    qrcode.addData(convertStr(value));
    qrcode.make();

    let cells = qrcode.modules;
    if (cells === null) {
      return null;
    }

    const margin = includeMargin ? MARGIN_SIZE : 0;
    const numCells = cells.length + margin * 2;
    const calculatedImageSettings = getImageSettings(this.props, cells);

    let image = null;
    if (imageSettings != null && calculatedImageSettings != null) {
      if (calculatedImageSettings.excavation != null) {
        cells = excavateModules(cells, calculatedImageSettings.excavation);
      }

      image = (
        <image
          xlinkHref={imageSettings.src}
          height={calculatedImageSettings.h}
          width={calculatedImageSettings.w}
          x={calculatedImageSettings.x + margin}
          y={calculatedImageSettings.y + margin}
          preserveAspectRatio='none'
        />
      );
    }

    const fgPath = generatePath(cells, margin);

    return (
      <svg
        shapeRendering='crispEdges'
        height={size}
        width={size}
        viewBox={`0 0 ${numCells} ${numCells}`}
        {...otherProps}>
        <path fill={bgColor} d={`M0,0 h${numCells}v${numCells}H0z`} />
        <path fill={fgColor} d={fgPath} />
        {image}
      </svg>
    );
  }
}

if (process.env.NODE_ENV !== 'production') {
  QRCodeSVG.propTypes = PROP_TYPES;
}

const QRCode = (props) => {
  const { renderAs, ...otherProps } = props;
  const Component = renderAs === 'svg' ? QRCodeSVG : QRCodeCanvas;
  return <Component {...otherProps} />;
};

QRCode.propTypes = {
  renderAs: PropTypes.string,
};

QRCode.defaultProps = { renderAs: 'svg', ...DEFAULT_PROPS };

export default QRCode;
