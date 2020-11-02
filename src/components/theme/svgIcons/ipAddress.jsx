import React from 'react';
import PropTypes from 'prop-types';

const Svg = ({
  colorHex,
  filled,
  ...rest
}) => (
  <svg
    viewBox='0 0 20 23'
    {...rest}
  >
    <g filter='url(#filter0_i)'>
      <path d='M13.78 9.305c-.34.227-.758.34-1.257.34H11.23V6.72h1.294c.508 0 .926.11 1.256.328.338.21.508.582.508 1.116 0 .534-.17.914-.508 1.14z' />
      <path
        fillRule='evenodd'
        d='M0 9.54C0 4.272 4.476 0 10 0s10 4.272 10 9.542c0 4.606-7.64 11.606-9.564 13.295a.663.663 0 01-.872 0C7.641 21.147 0 14.147 0 9.54zm7.875-4.058a.247.247 0 00-.253-.24h-1.27a.247.247 0 00-.253.24v8.01c0 .133.113.24.253.24h1.27c.14 0 .253-.107.253-.24v-8.01zm6.703.172c-.482-.275-1.078-.412-1.788-.412H9.757a.247.247 0 00-.253.24v8.01c0 .133.113.24.253.24h1.219c.14 0 .253-.107.253-.24v-2.464h1.56c.72 0 1.32-.134 1.802-.4.482-.268.833-.615 1.053-1.044.228-.437.343-.91.343-1.42 0-.509-.115-.986-.343-1.43-.228-.445-.584-.805-1.066-1.08z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <filter
        id='filter0_i'
        width={20}
        height={24}
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
