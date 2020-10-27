import React from 'react';
import PropTypes from 'prop-types';

const Svg = ({
  colorHex,
  filled,
  ...rest
}) => (
  <svg
    viewBox='0 0 38 37'
    {...rest}
  >
    <g
      fill={colorHex}
      stroke={colorHex}
    >
      <path d='M28.1443714,0 L0.2549309,0 C0.114136452,0 0,0.110894794 0,0.247690454 L0,9.3874682 C0,9.52426386 0.114136452,9.63515866 0.2549309,9.63515866 L14.7299074,9.63515866 C14.7299074,9.63515866 28.1443714,9.03079395 28.1443714,22.3862632 L28.1443714,36.7523095 C28.1470839,36.8879986 28.2596468,36.9973645 28.3993023,37 L37.7450691,37 C37.8847246,36.9973645 37.9972875,36.8879986 38,36.7523095 L38,0.247690454 C37.9972875,0.112001436 37.8847246,0.00263547883 37.7450691,0 L28.1443714,0 Z' />
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
