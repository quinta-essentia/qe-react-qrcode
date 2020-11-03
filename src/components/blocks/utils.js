import PropTypes from 'prop-types';

const DEFAULT_PROPS = {
  size: 128,
  level: 'L',
  bgColor: '#FFFFFF',
  fgColor: '#000000',
  includeMargin: false,
  shape: 'quadrant',
  thickness: 1,
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
      shape: PropTypes.oneOf(['circle', 'quadrant']),
      thickness: PropTypes.number,
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

const circlePath = (cx, cy, r) => `M ${cx + r} ${cy + r} m -${r}, 0 a ${r},${r} 0 1,0 ${r * 2},0 a ${r},${r} 0 1,0 -${r * 2},0`;

const SUPPORTS_PATH2D = (function () {
  try {
    new Path2D().addPath(new Path2D());
  } catch (e) {
    return false;
  }
  return true;
})();

export {
  circlePath,
  DEFAULT_PROPS,
  PROP_TYPES,
  MARGIN_SIZE,
  DEFAULT_IMG_SCALE,
  SUPPORTS_PATH2D,
};
