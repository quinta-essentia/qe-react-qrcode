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
      <circle cx='12' cy='12' r='11' fill='none' stroke={colorHex} strokeLinecap='square' strokeMiterlimit='10' strokeWidth='2' strokeLinejoin='miter' />
      <line x1='12' y1='7' x2='12' y2='13' fill='none' stroke={colorHex} strokeLinecap='square' strokeMiterlimit='10' strokeWidth='2' strokeLinejoin='miter' />
      <circle cx='12' cy='17' r='1' fill={colorHex} />
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
