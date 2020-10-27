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
      <rect x='2' y='10' width='20' height='2' fill='none' stroke={colorHex} strokeLinecap='square' strokeMiterlimit='10' strokeWidth='2' strokeLinejoin='miter' />
      <rect x='2' y='2' width='20' height='2' fill='none' stroke={colorHex} strokeLinecap='square' strokeMiterlimit='10' strokeWidth='2' strokeLinejoin='miter' />
      <rect x='2' y='18' width='20' height='2' fill='none' stroke={colorHex} strokeLinecap='square' strokeMiterlimit='10' strokeWidth='2' strokeLinejoin='miter' />
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
