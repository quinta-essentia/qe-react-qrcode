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

    <path fill='none' d='M0,0H24V24H0Z'/>
    <path fill='none' opacity='0.3' d='M4,8H20V19H4Z'/>
    <path fill={colorHex} d='M20,6H16V4a1.993,1.993,0,0,0-2-2H10A1.993,1.993,0,0,0,8,4V6H4A1.985,1.985,0,0,0,2.01,8L2,19a1.993,1.993,0,0,0,2,2H20a1.993,1.993,0,0,0,2-2V8A1.993,1.993,0,0,0,20,6ZM10,4h4V6H10ZM20,19H4V8H20Z'/>
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
