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
      <polyline fill='none' stroke={colorHex} strokeWidth='2' strokeLinecap='square' strokeMiterlimit='10' points='2,4 2,1 22,1 22,4 ' strokeLinejoin='miter' />
      <line fill='none' stroke={colorHex} strokeWidth='2' strokeLinecap='square' strokeMiterlimit='10' x1='12' y1='1' x2='12' y2='23' strokeLinejoin='miter' />
      <line fill='none' stroke={colorHex} strokeWidth='2' strokeLinecap='square' strokeMiterlimit='10' x1='7' y1='23' x2='17' y2='23' strokeLinejoin='miter' />
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
