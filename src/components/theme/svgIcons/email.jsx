import React from 'react';
import PropTypes from 'prop-types';

const Svg = ({
  colorHex,
  filled,
  ...rest
}) => (
  <svg
    viewBox='0 0 20 15'
    {...rest}
  >
    <g filter='url(#filter0_i)'>
      <path d='M13.74 7.265a.428.428 0 00.006.684l5.681 3.918c.249.171.573-.023.573-.344V3.521c0-.324-.33-.518-.578-.34L13.74 7.265zM.578 3.181C.33 3.003 0 3.197 0 3.521v8.002c0 .32.324.516.573.344l5.68-3.918a.428.428 0 00.007-.684L.578 3.181zM18.75 0H1.25C.626 0 .13.507.037 1.16l9.347 6.718c.374.269.858.269 1.232 0l9.246-6.645a.195.195 0 00.077-.2C19.802.441 19.332 0 18.748 0zM12.316 8.576a.347.347 0 00-.405.004l-1.567 1.126a.587.587 0 01-.688 0L8.09 8.58a.347.347 0 00-.405-.004l-7.436 5.13a.36.36 0 00-.146.404c.173.518.613.891 1.148.891h17.5c.535 0 .975-.373 1.148-.891a.36.36 0 00-.146-.404l-7.436-5.13z' />
    </g>
    <defs>
      <filter
        id='filter0_i'
        width={20}
        height={16}
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
