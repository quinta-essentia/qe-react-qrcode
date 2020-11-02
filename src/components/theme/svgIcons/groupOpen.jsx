import React from 'react';
import PropTypes from 'prop-types';

const Svg = ({
  colorHex,
  filled,
  ...rest
}) => (
  <svg
    viewBox='0 0 19 17'
    {...rest}
  >
    <g filter='url(#filter0_i)'>
      <path
        fillRule='evenodd'
        d='M18.07 2.83v2.525c1.053.239 1.7 1.14 1.496 2.21l-1.382 7.175c-.026.131-.063.26-.108.385a2.65 2.65 0 01-.316.596 2.89 2.89 0 01-.532.722 2.902 2.902 0 01-2.027.83H2.871a2.898 2.898 0 01-2.027-.83 2.817 2.817 0 01-.844-2V2.83A2.81 2.81 0 01.844.832 2.892 2.892 0 012.87 0h12.33c.76.002 1.49.3 2.027.832.538.53.84 1.248.842 1.998zm-2.869-1.39c.373 0 .733.146.996.408.264.26.414.613.414.982v2.463h-4.89a1.58 1.58 0 00.035-.166c.185-1.162-.717-2.115-2.004-2.115H5.434a2.819 2.819 0 00-1.735.62c-.478.378-.789.911-.875 1.495l-.02.166-1.183 9.447a1.997 1.997 0 00-.016.184l-.001.127a1.381 1.381 0 01-.143-.608V2.83c0-.37.148-.723.414-.982a1.42 1.42 0 01.996-.409h12.33zm-4.435 10.572h3.675c.643 0 1.162.447 1.162 1 0 .553-.519 1-1.162 1h-3.675c-.643 0-1.162-.447-1.162-1 0-.553.519-1 1.162-1z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <filter
        id='filter0_i'
        width={19.604}
        height={18.273}
        x={0}
        y={0}
        colorInterpolationFilters='sRGB'
        filterUnits='userSpaceOnUse'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={0.5} />
        <feComposite in2='hardAlpha' k2={-1} k3={1} operator='arithmetic' />
        <feColorMatrix values='0 0 0 0 0.270833 0 0 0 0 0.270833 0 0 0 0 0.270833 0 0 0 0.61 0' />
        <feBlend in2='shape' mode='multiply' result='effect1_innerShadow' />
      </filter>
    </defs>
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
