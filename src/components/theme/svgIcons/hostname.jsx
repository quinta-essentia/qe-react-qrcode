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
      <path d='M16.175 0H2.554a2.554 2.554 0 100 5.108h13.621a2.554 2.554 0 100-5.108zM2.554 3.405a.852.852 0 110-1.703.852.852 0 010 1.703zm3.405 0a.852.852 0 110-1.703.852.852 0 010 1.703zM16.175 5.946H2.554a2.554 2.554 0 100 5.108h13.621a2.554 2.554 0 100-5.108zM2.554 9.351a.852.852 0 110-1.703.852.852 0 010 1.703zm3.405 0a.852.852 0 11.001-1.703.852.852 0 010 1.703zM16.175 11.892H2.554a2.554 2.554 0 100 5.108h13.621a2.554 2.554 0 100-5.108zM2.554 15.298a.852.852 0 110-1.704.852.852 0 010 1.704zm3.405 0a.852.852 0 110-1.704.852.852 0 010 1.704z' />
    </g>
    <defs>
      <filter
        id='filter0_i'
        width={18.729}
        height={18}
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
