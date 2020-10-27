import React from 'react';
import PropTypes from 'prop-types';

const Svg = ({
  colorHex,
  filled,
  ...rest
}) => (
  <svg
    viewBox='0 0 16 22'
    {...rest}
  >
    <g
      strokeWidth='1'
      transform='translate(1 1)'
      fill={filled ? colorHex : 'none'}
      stroke={colorHex}
    >
      <path
        d='M0.189584967,19.8478588 C0.0780325041,19.8263949 -0.00199952692,19.7270662 1.63333333e-06,19.6125647 L1.63333333e-06,1.25962824 C1.63333333e-06,0.611931765 0.524371633,0.0831576471 1.1666683,0.0831576471 L12.833335,0.0831576471 C13.4756316,0.0831576471 14.0000016,0.611931765 14.0000016,1.25962824 L14.0000016,19.6125647 C14.0014666,19.7004433 13.9542443,19.7818206 13.877552,19.82358 C13.8008597,19.8653394 13.7074817,19.8605197 13.6354183,19.8110824 L7.00000163,15.1934353 L0.364584967,19.8110824 C0.313404838,19.8462789 0.250446705,19.8595096 0.189584967,19.8478588 L0.189584967,19.8478588 Z'
      />
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
