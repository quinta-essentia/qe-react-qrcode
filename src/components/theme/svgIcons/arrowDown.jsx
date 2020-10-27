import React from 'react';
import PropTypes from 'prop-types';

const Svg = ({
  colorHex,
  filled,
  ...rest
}) => (
  <svg
    viewBox='0 0 12 12'
    {...rest}
  >
    <g
      strokeWidth='1'
      transform='translate(0, 0)'
    >
      <polyline points='0.5 3.5 6 9.5 11.5 3.5' fill='none' stroke={colorHex} strokeLinecap='round' strokeLinejoin='round' strokeWidth='1' />
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
