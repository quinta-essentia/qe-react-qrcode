import React from 'react';
import PropTypes from 'prop-types';

const Svg = ({
  colorHex,
  filled,
  ...rest
}) => (
  <svg
    viewBox='0 0 19 19'
    {...rest}
  >
    <g
      filter='url(#filter0_ii)'
      style={{
        mixBlendMode: 'multiply',
      }}
    >
      <path
        fillRule='evenodd'
        d='M16.215 2.785A9.51 9.51 0 009.5 0 9.5 9.5 0 1019 9.5a9.51 9.51 0 00-2.785-6.715zM6.55 5.874c.681.118 1.37.195 2.06.23v2.507H6.147c.045-.924.18-1.84.404-2.737zm5.944 7.337c-.697-.119-1.4-.195-2.106-.228V10.39h2.551c-.051.954-.2 1.9-.445 2.822zM8.61 2.161v2.163a15.66 15.66 0 01-1.472-.153c.423-.945.94-1.63 1.472-2.01zm0 8.228v2.599c-.676.034-1.348.109-2.015.223a13.963 13.963 0 01-.444-2.822H8.61zm0 6.358v-1.98c-.467.027-.933.075-1.396.143.41.853.898 1.481 1.396 1.837zm1.778.062v-2.042c.498.025.994.074 1.487.147-.436.905-.957 1.553-1.487 1.895zm0-8.198V6.108c.722-.033 1.44-.112 2.152-.236.224.897.359 1.815.403 2.739H10.39zm0-6.511v2.229c.523-.027 1.045-.08 1.563-.16-.448-.997-1-1.706-1.563-2.07zm2.991.931c-.05-.098-.1-.195-.153-.29.416.231.81.5 1.176.803-.22.083-.45.16-.688.232a9.174 9.174 0 00-.335-.745zm-7.668 0c-.121.238-.233.488-.335.746a10.322 10.322 0 01-.75-.257 7.75 7.75 0 011.278-.852c-.066.117-.13.238-.193.363zM3.309 4.893a7.683 7.683 0 00-1.48 3.718h2.547c.047-1.06.198-2.114.451-3.144a11.652 11.652 0 01-1.518-.574zm1.56 8.72a15.965 15.965 0 01-.489-3.224H1.83a7.687 7.687 0 001.53 3.784c.49-.222.994-.409 1.51-.56zm.572 1.682a10.115 10.115 0 00.54 1.074 7.743 7.743 0 01-1.282-.827c.244-.091.492-.173.742-.247zm7.94.582c.094-.188.184-.381.27-.582.233.07.46.144.678.224a7.744 7.744 0 01-1.178.782c.08-.139.157-.28.23-.424zm2.283-1.733c-.469-.208-.95-.386-1.442-.532.273-1.055.437-2.135.49-3.223h2.459a7.69 7.69 0 01-1.507 3.755zm1.507-5.529l-2.455-.004a16.194 16.194 0 00-.452-3.144c.496-.149.98-.33 1.452-.543a7.682 7.682 0 011.455 3.691z'
        clipRule='evenodd'
      />
    </g>
    <defs>
      <filter
        id='filter0_ii'
        width={19}
        height={20}
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
        <feColorMatrix
          in='SourceAlpha'
          result='hardAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
        />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={0.5} />
        <feComposite in2='hardAlpha' k2={-1} k3={1} operator='arithmetic' />
        <feColorMatrix values='0 0 0 0 0.270833 0 0 0 0 0.270833 0 0 0 0 0.270833 0 0 0 0.61 0' />
        <feBlend
          in2='effect1_innerShadow'
          mode='multiply'
          result='effect2_innerShadow'
        />
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
