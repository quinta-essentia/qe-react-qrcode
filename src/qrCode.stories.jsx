import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  boolean,
  color,
  number,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';

import QRCode from './qrCode.jsx';

storiesOf('QRCode', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <QRCode
      value={text('Value or URL', 'http://facebook.github.io/react/')}
      size={number('Size', 256)}
      level={select('Level', { L: 'L', M: 'M', Q: 'Q', H: 'H' }, 'M')}
      bgColor={color('Background Color', 'rgb(255,255,255)')}
      fgColor={color('Foreground Color', 'rgb(0,0,0)')}
      shape={select('Shape', { CIRCLE: 'CIRCLE', SQUERE: 'SQUERE' }, 'SQUERE')}
      eyeShape={select('Eye shape', { CIRCLE: 'CIRCLE', SQUERE: 'SQUERE' }, 'SQUERE')}
      imageSrc={text('Image source', 'https://emoji.slack-edge.com/T8C69ARQV/quintaessentia/6e9e7ed89c376844.png')}
      imageWidth={number('Image width', 40)}
      imageHeight={number('Image height', 40)}
      imagePosition={select('Image Position', { TOP: 'TOP', BOTTOM: 'BOTTOM', RIGHT: 'RIGHT', LEFT: 'LEFT', CENTER: 'CENTER' }, 'CENTER')}
      imageExcavate={boolean('Excavate', true)}
    />
  ));
