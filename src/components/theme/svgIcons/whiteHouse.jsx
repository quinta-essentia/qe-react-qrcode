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
      <line data-color='color-2' fill='none' stroke={colorHex} strokeWidth='2' strokeLinecap='square' strokeMiterlimit='10' x1='12' y1='6' x2='12' y2='1' strokeLinejoin='miter' />
      <line data-color='color-2' fill='none' stroke={colorHex} strokeWidth='2' strokeLinecap='square' strokeMiterlimit='10' x1='12' y1='2' x2='14' y2='2' strokeLinejoin='miter' />
      <line fill='none' stroke={colorHex} strokeWidth='2' strokeLinecap='square' strokeMiterlimit='10' x1='9' y1='23' x2='9' y2='14' strokeLinejoin='miter' />
      <line fill='none' stroke={colorHex} strokeWidth='2' strokeLinecap='square' strokeMiterlimit='10' x1='15' y1='23' x2='15' y2='14' strokeLinejoin='miter' />
      <line data-cap='butt' fill='none' stroke={colorHex} strokeWidth='2' strokeMiterlimit='10' x1='4' y1='11' x2='20' y2='11' strokeLinejoin='miter' strokeLinecap='butt' />
      <polyline fill='none' stroke={colorHex} strokeWidth='2' strokeLinecap='square' strokeMiterlimit='10' points='5,23 1,23 1,16 4,16 ' strokeLinejoin='miter' />
      <polyline fill='none' stroke={colorHex} strokeWidth='2' strokeLinecap='square' strokeMiterlimit='10' points='19,23 23,23 23,16 20,16 ' strokeLinejoin='miter' />
      <polygon fill='none' stroke={colorHex} strokeWidth='2' strokeLinecap='square' strokeMiterlimit='10' points='20,11 20,23 4,23 4,11 12,6 ' strokeLinejoin='miter' />
      <line fill='none' stroke={colorHex} strokeWidth='2' strokeLinecap='square' strokeMiterlimit='10' x1='4' y1='14' x2='20' y2='14' strokeLinejoin='miter' />
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
