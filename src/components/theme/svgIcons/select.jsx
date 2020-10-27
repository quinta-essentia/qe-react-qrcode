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
      <polyline points='22 10 22 2 2 2 2 22 10 22' fill='none' stroke={colorHex} strokeLinecap='square' strokeMiterlimit='10' strokeWidth='2' strokeLinejoin='miter'/>
      <line x1='23' y1='23' x2='15' y2='15' fill='none' stroke={colorHex} strokeMiterlimit='10' strokeWidth='2' strokeLinecap='butt' strokeLinejoin='miter'/>
      <polyline points='15 22 15 15 22 15' fill='none' stroke={colorHex} strokeLinecap='square' strokeMiterlimit='10' strokeWidth='2' strokeLinejoin='miter' />
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
