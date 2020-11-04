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
      includeMargin={booleanKnob({ label: 'Include Margin', defaultValue: false })}
      renderAs={selectKnob({ label: 'Render as', options: { svg: 'svg', canvas: 'canvas' }, defaultValue: 'svg' })}
      shape={selectKnob({ label: 'Shape', options: { circle: 'circle', quadrant: 'quadrant' }, defaultValue: 'quadrant' })}
      eyeShape={selectKnob({ label: 'Eye shape', options: { circle: 'circle', quadrant: 'quadrant' }, defaultValue: 'quadrant' })}
      thickness={numberKnob({ label: 'Thickness', defaultValue: 1 })}
      withCircleEyes={booleanKnob({ label: 'With Custom Eyes', defaultValue: false })}
      imageSettings={{
        src: longTextKnob({ label: 'Image source', defaultValue: 'https://emoji.slack-edge.com/T8C69ARQV/quintaessentia/6e9e7ed89c376844.png' }),
        height: numberKnob({ label: 'Image height', defaultValue: 80 }),
        width: numberKnob({ label: 'Image width', defaultValue: 80 }),
        x: numberKnob({ label: 'X axis', defaultValue: 50 }),
        y: numberKnob({ label: 'Y axis', defaultValue: 50 }),
        excavate: booleanKnob({ label: 'Excavate', defaultValue: false }),
      }}
    />
  ));
