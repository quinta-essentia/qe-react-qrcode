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

const SHAPE_PROP_TYPES = {
  cx: PropTypes.number.isRequired,
  cy: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

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

export {
  circlePath,
  parseStyles,
  DEFAULT_PROPS,
  PROP_TYPES,
  MARGIN_SIZE,
  DEFAULT_IMG_SCALE,
  SUPPORTS_PATH2D,
  SHAPE_PROP_TYPES,
};
