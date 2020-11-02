import React from 'react';
import PropTypes from 'prop-types';

const Svg = ({
  colorHex,
  filled,
  ...rest
}) => (
  <svg
    viewBox='0 0 20 18'
    {...rest}
  >
    <g filter='url(#filter0_i)'>
      <path d='M16.308 2.792H9.864c0-.74-.284-1.45-.79-1.974A2.646 2.646 0 007.17 0H2.693c-.714 0-1.4.294-1.904.818A2.845 2.845 0 000 2.792v11.416c0 .367.07.73.205 1.069a2.8 2.8 0 00.584.905c.25.26.547.465.873.606.327.14.677.212 1.031.212h13.615c.714 0 1.399-.294 1.904-.818A2.845 2.845 0 0019 14.208V5.583c0-.367-.07-.73-.205-1.068a2.8 2.8 0 00-.584-.906 2.688 2.688 0 00-.873-.605 2.61 2.61 0 00-1.03-.212zm.241 9.048c0 .345-.132.676-.367.92a1.234 1.234 0 01-.888.382h-4.236c-.333 0-.652-.137-.888-.382a1.327 1.327 0 01-.367-.92c0-.345.132-.676.367-.92.236-.244.555-.381.888-.381h4.236c.165 0 .328.033.48.099.153.065.291.16.408.282a1.343 1.343 0 01.368.92z' />
    </g>
    <defs>
      <filter
        id='filter0_i'
        width={19}
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
