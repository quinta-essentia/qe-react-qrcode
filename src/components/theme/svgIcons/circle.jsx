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
    <g transform='translate(0, 0)'>
      <path d='M12,1A11,11,0,1,0,23,12,11.012,11.012,0,0,0,12,1Z' fill={colorHex} />
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
