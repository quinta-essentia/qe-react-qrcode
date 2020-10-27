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
      <line fill='none' stroke={colorHex} strokeWidth='1' strokeLinecap='round' strokeMiterlimit='10' x1='12' y1='1' x2='12' y2='23' strokeLinejoin='round' />
      <path fill='none' stroke={colorHex} strokeWidth='1' strokeLinecap='round' strokeMiterlimit='10' d='M17.375,5C14.875,3.625,7,2.6,7,7.333C7,13,17,11,17,16s-6.5,4.625-11,3' strokeLinejoin='round' />
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
