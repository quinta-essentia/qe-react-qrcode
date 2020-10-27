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
    <path fill='none' d='M12,1,3,5v6c0,5.55,3.84,10.74,9,12,5.16-1.26,9-6.45,9-12V5Zm7,10a10.473,10.473,0,0,1-7,9.93A10.473,10.473,0,0,1,5,11V6.3l7-3.11L19,6.3Zm-11.59.59L6,13l4,4,8-8L16.59,7.58,10,14.17Z'/>
    <path fill={colorHex} opacitiy='0.3' d='M5,6.3V11a10.473,10.473,0,0,0,7,9.93A10.463,10.463,0,0,0,19,11V6.3L12,3.19ZM18,9l-8,8L6,13l1.41-1.41L10,14.17l6.59-6.59Z'/>
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
