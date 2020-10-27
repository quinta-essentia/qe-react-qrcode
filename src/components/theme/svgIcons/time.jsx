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
      <polyline points='12 6 12 12 18 12' fill='none' stroke={colorHex} strokeLinecap='square' strokeMiterlimit='10' strokeWidth='2' strokeLinejoin='miter'/>
      <path d='M1,12a11,11,0,1,1,3.45,8' fill='none' stroke={colorHex} strokeMiterlimit='10' strokeWidth='2' strokeLinecap='butt' strokeLinejoin='miter' />
      <polygon points='3 24 0.6 17.2 7.8 17.6 3 24' fill='#444444' />
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
