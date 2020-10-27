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

    <rect fill='none' width='24' height='24'/>
    <g transform='translate(4 3)'>
      <path fill={colorHex} d='M4,7H20V9H4Zm0,6H20V11H4Zm0,4h7V15H4Zm0,4h7V19H4Zm11.41-2.83L14,16.75l-1.41,1.41L15.41,21,20,16.42,18.58,15ZM4,3V5H20V3Z' transform='translate(-4 -3)'/>
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
