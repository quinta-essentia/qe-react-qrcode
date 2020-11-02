import React from 'react';
import PropTypes from 'prop-types';

const Svg = ({
  colorHex,
  filled,
  ...rest
}) => (
  <svg
    viewBox='0 0 18 18'
    {...rest}
  >
    <g filter='url(#filter0_i)'>
      <path d='M9.001 9.9a4.95 4.95 0 100-9.9 4.95 4.95 0 000 9.9zM18 17.024a8.808 8.808 0 00-2.964-6.608 1.139 1.139 0 00-1.49-.025 7.042 7.042 0 01-9.083 0 1.137 1.137 0 00-1.488.023A8.846 8.846 0 000 17.019c0 .54.441.981.987.981h16.027a.981.981 0 00.987-.976z' />
    </g>
    <defs>
      <filter
        id='filter0_i'
        width={18.001}
        height={19}
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
