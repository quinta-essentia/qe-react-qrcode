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
    <g strokeWidth='1' transform='translate(0.5, 0.5)'>
      <line fill='none' stroke={colorHex} strokeWidth='1' strokeLinecap='round' strokeMiterlimit='10' x1='15' y1='11' x2='19' y2='11' strokeLinejoin='round' />
      <line fill='none' stroke={colorHex} strokeWidth='1' strokeLinecap='round' strokeMiterlimit='10' x1='15' y1='15' x2='19' y2='15' strokeLinejoin='round' />
      <path fill={colorHex} d='M4,17c0-1.657,1.343-3,3-3h2c1.657,0,3,1.343,3,3H4z' strokeLinejoin='round' strokeLinecap='round' />
      <path fill='none' stroke={colorHex} strokeWidth='1' strokeLinecap='round' strokeMiterlimit='10' d='M19,3c0,1.105-0.895,2-2,2s-2-0.895-2-2H9c0,1.105-0.895,2-2,2S5,4.105,5,3H1v18h22V3H19z' strokeLinejoin='round' />
      <circle fill={colorHex} cx='8' cy='11' r='2' strokeLinejoin='round' strokeLinecap='round' />
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
