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
    <g strokeWidth='2' transform='translate(0, 0)'>
      <line x1='2' y1='23' x2='22' y2='23' fill='none' stroke={colorHex} strokeLinecap='square' strokeMiterlimit='10' strokeWidth='2' strokeLinejoin='miter' />
      <line x1='13' y1='5' x2='17' y2='9' fill='none' stroke={colorHex} strokeMiterlimit='10' strokeWidth='2' strokeLinecap='butt' strokeLinejoin='miter' />
      <polygon points='8 18 3 19 4 14 16 2 20 6 8 18' fill='none' stroke={colorHex} strokeLinecap='square' strokeMiterlimit='10' strokeWidth='2' strokeLinejoin='miter' />
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
