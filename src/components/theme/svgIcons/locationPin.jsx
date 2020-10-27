import React from 'react';
import PropTypes from 'prop-types';

const Svg = ({
  colorHex,
  filled,
  ...rest
}) => (
  <svg
    viewBox='0 0 23 34'
    {...rest}
  >
    <g
      fill={colorHex}
      stroke={colorHex}
    >
      <circle cx='11.5' cy='11.5' r='11.5' />
      <ellipse cx='11.5' cy='31.5' fill='#ccd1de' rx='5.5' ry='2.5' />
      <circle cx='11.5' cy='11.5' r='3.5' fill='#ffffff' />
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M11.5 17.5v12.8654' />
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
