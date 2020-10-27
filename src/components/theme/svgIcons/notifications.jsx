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
    <path fill='none' opacity='0.3' d='M12,6.5C9.51,6.5,8,8.52,8,11v6h8V11C16,8.52,14.49,6.5,12,6.5Z'/>
    <path fill={colorHex} d='M12,22a2.006,2.006,0,0,0,2-2H10A2.006,2.006,0,0,0,12,22Zm6-6V11c0-3.07-1.63-5.64-4.5-6.32V4a1.5,1.5,0,0,0-3,0v.68C7.64,5.36,6,7.92,6,11v5L4,18v1H20V18Zm-2,1H8V11c0-2.48,1.51-4.5,4-4.5s4,2.02,4,4.5Z'/>
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
