import React from 'react';
import PropTypes from 'prop-types';

const Svg = ({
  colorHex,
  filled,
  ...rest
}) => (
  <svg
    viewBox='0 0 20 20'
    {...rest}
  >
    <g filter='url(#filter0_i)'>
      <path d='M7.406 5.015c-2.357 2.438-1.842 6.485.857 8.278.09.059.208.047.284-.028.568-.555 1.05-1.093 1.47-1.777a.214.214 0 00-.084-.299 2.745 2.745 0 01-1.052-1.083 2.641 2.641 0 01-.224-1.804c.168-.816 1.044-1.574 1.713-2.276l-.004-.001 2.505-2.557a2.57 2.57 0 013.65-.019 2.601 2.601 0 01.037 3.668l-1.518 1.56a.266.266 0 00-.06.273c.35 1.014.436 2.442.201 3.522-.006.03.031.05.053.028l3.23-3.297c2.063-2.106 2.045-5.534-.04-7.619a5.42 5.42 0 00-7.696.04L7.42 5l-.013.014z' />
      <path d='M13.446 13.757l.006-.003c.66-1.205.79-2.587.48-3.935l-.001.001h-.002a5.437 5.437 0 00-2.191-3.126.3.3 0 00-.332.015c-.554.448-1.096 1.022-1.454 1.755a.243.243 0 00.097.317c.415.241.79.594 1.04 1.062.196.331.39.959.265 1.633-.117.894-1.02 1.715-1.738 2.454l-2.492 2.543a2.601 2.601 0 01-3.668.038 2.601 2.601 0 01-.037-3.668l1.522-1.565a.266.266 0 00.062-.268c-.338-1.037-.43-2.434-.217-3.512.005-.03-.031-.05-.053-.027l-3.181 3.246c-2.085 2.128-2.067 5.592.04 7.698 2.126 2.084 5.572 2.049 7.657-.078.724-.81 3.823-3.68 4.197-4.58z' />
    </g>
    <defs>
      <filter
        id='filter0_i'
        width={20}
        height={20.955}
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
