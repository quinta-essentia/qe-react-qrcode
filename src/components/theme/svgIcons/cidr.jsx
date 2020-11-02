import React from 'react';
import PropTypes from 'prop-types';

const Svg = ({
  colorHex,
  filled,
  ...rest
}) => (
  <svg
    viewBox='0 0 22 20'
    {...rest}
  >
    <g filter='url(#filter0_i)'>
      <path d='M6.762 3.674a.92.92 0 01-1.307.004.927.927 0 01-.003-1.309C6.967.841 8.932 0 10.986 0c2.053 0 4.018.841 5.534 2.369a.927.927 0 01-.003 1.309.922.922 0 01-1.307-.004c-1.166-1.175-2.666-1.823-4.224-1.823-1.558 0-3.058.648-4.224 1.823zM11.002 9.165a.925.925 0 11.002-1.85.925.925 0 01-.002 1.85z' />
      <path d='M13.492 6.447a.927.927 0 00.653-1.58c-.832-.832-2.035-1.35-3.142-1.35h-.044c-1.115 0-2.324.518-3.155 1.35a.927.927 0 000 1.309.922.922 0 001.306 0c.49-.49 1.215-.807 1.848-.807h.044c.626 0 1.347.317 1.837.808.18.18.417.27.653.27z' />
      <path
        fillRule='evenodd'
        d='M18.587 11.092h1.028a2.315 2.315 0 012.312 2.313v4.282A2.315 2.315 0 0119.615 20H2.313A2.315 2.315 0 010 17.687v-4.282a2.315 2.315 0 012.313-2.313h1.113V5.268a1.028 1.028 0 112.056 0v5.824H16.53V5.268a1.028 1.028 0 012.056 0v5.824zM3.769 16.574h.685a1.028 1.028 0 000-2.056h-.685a1.028 1.028 0 100 2.056zm3.426 0h.685a1.028 1.028 0 000-2.056h-.685a1.028 1.028 0 100 2.056zm3.426 0h.685a1.028 1.028 0 000-2.056h-.685a1.028 1.028 0 100 2.056z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <filter
        id='filter0_i'
        width={21.927}
        height={21}
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
