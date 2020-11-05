import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  longTextKnob,
  numberKnob,
  selectKnob,
  colorKnob,
  booleanKnob,
  withKnobs
} from '@storybook/utilities';

import QRCode from './qrCode.jsx';

storiesOf('qrCode', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <QRCode
      value={longTextKnob({ label: 'Value or URL', defaultValue: 'http://facebook.github.io/react/' })}
      size={numberKnob({ label: 'Size', defaultValue: 256 })}
      level={selectKnob({ label: 'Level', options: { L: 'L', M: 'M', Q: 'Q', H: 'H' }, defaultValue: 'L' })}
      bgColor={colorKnob({ label: 'Background Color', defaultValue: 'rgb(255,255,255)' })}
      fgColor={colorKnob({ label: 'Foreground Color', defaultValue: 'rgb(0,0,0)' })}
      shape={selectKnob({ label: 'Shape', options: { circle: 'circle', quadrant: 'quadrant' }, defaultValue: 'quadrant' })}
      eyeShape={selectKnob({ label: 'Eye shape', options: { circle: 'circle', quadrant: 'quadrant' }, defaultValue: 'quadrant' })}
      imageSrc={longTextKnob({ label: 'Image source', defaultValue: 'https://emoji.slack-edge.com/T8C69ARQV/quintaessentia/6e9e7ed89c376844.png' })}
      imageWidth={numberKnob({ label: 'Image width', defaultValue: 80 })}
      imageHeight={numberKnob({ label: 'Image height', defaultValue: 80 })}
      imagePosition={selectKnob({ label: 'Image Position', options: { TOP: 'TOP', BOTTOM: 'BOTTOM', RIGHT: 'RIGHT', LEFT: 'LEFT', CENTER: 'CENTER' }, defaultValue: 'CENTER' })}
      imageExcavate={booleanKnob({ label: 'Excavate', defaultValue: false })}
    />
  ));
