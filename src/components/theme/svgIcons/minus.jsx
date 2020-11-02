import React from 'react';
import PropTypes from 'prop-types';

const Svg = ({
  colorHex,
  filled,
  ...rest
}) => (
  <svg
    viewBox='0 0 24 24'
    {...rest}
  >
    <g
      fill={colorHex}
      stroke={colorHex}
    >
      <line fill='none' stroke={colorHex} strokeWidth='2' strokeLinecap='square' strokeMiterlimit='10' x1='22' y1='12' x2='2' y2='12' strokeLinejoin='miter'>

      </line>
    </g>
  </svg>
);

Svg.defaultProps = {
  colorHex: '#000000',
  filled: false,
};

Svg.propTypes = {
  colorHex: PropTypes.string,
  filled: PropTypes.bool,
};

export default Svg;
