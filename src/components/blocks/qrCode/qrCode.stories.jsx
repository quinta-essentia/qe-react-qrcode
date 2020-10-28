import React from 'react';
import { storiesOf } from '@storybook/react';

import QRCode from './qrCode';
import {
  longTextKnob,
  numberKnob,
  selectKnob,
  colorKnob,
  booleanKnob,
  withKnobs
} from '@storybook/utilities';

storiesOf('RTFKT/Components/Blocks/qrCode', module)
  .addDecorator(withKnobs)
  .add('QRCODE', () => (
    <QRCode
      value={longTextKnob({ label: 'Value or URL', defaultValue: 'http://facebook.github.io/react/' })}
      size={numberKnob({ label: 'Size', defaultValue: 256 })}
      level={selectKnob({ label: 'Level', options: { L: 'L', M: 'M', Q: 'Q', H: 'H' }, defaultValue: 'L' })}
      bgColor={colorKnob({ label: 'Background Color', defaultValue: '#FF0000' })}
      fgColor={colorKnob({ label: 'Foreground Color', defaultValue: '#0000FF' })}
      includeMargin={booleanKnob({ label: 'Include Margin', defaultValue: false })}
      imageSettings={{
        src: longTextKnob({ label: 'Image source', defaultValue: 'https://emoji.slack-edge.com/T8C69ARQV/quintaessentia/6e9e7ed89c376844.png' }),
        height: numberKnob({ label: 'Image height', defaultValue: 80 }),
        width: numberKnob({ label: 'Image width', defaultValue: 80 }),
        x: numberKnob({ label: 'X axis', defaultValue: 50 }),
        y: numberKnob({ label: 'Y axis', defaultValue: 50 }),
      }}
    />
  ));
