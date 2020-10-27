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
    <path opacity='0.3' d='M12,4A7.983,7.983,0,0,0,5.64,16.83c1.43-1.74,4.9-2.33,6.36-2.33s4.93.59,6.36,2.33A7.983,7.983,0,0,0,12,4Zm0,9a3.5,3.5,0,1,1,3.5-3.5A3.491,3.491,0,0,1,12,13Z'/>
    <path fill={colorHex} d='M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2ZM7.07,18.28c.43-.9,3.05-1.78,4.93-1.78s4.51.88,4.93,1.78a7.925,7.925,0,0,1-9.86,0Zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36,2.33a8,8,0,1,1,12.72,0ZM12,6a3.5,3.5,0,1,0,3.5,3.5A3.491,3.491,0,0,0,12,6Zm0,5a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,12,11Z'/>
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
