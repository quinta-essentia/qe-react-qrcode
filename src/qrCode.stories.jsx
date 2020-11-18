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
import quintaImg from '../quinta.png';

import QRCode from './qrCode.jsx';

import {
  downloadAsSvg,
  downloadAsPng,
  downloadAsPdf
} from './utils';

storiesOf('QRCode', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <>
      <QRCode
        value={text('Value or URL', 'http://facebook.github.io/react/')}
        size={number('Size', 256)}
        level={select('Level', { L: 'L', M: 'M', Q: 'Q', H: 'H' }, 'M')}
        bgColor={color('Background Color', 'rgb(255,255,255)')}
        fgColor={color('Foreground Color', 'rgb(0,0,0)')}
        shape={select('Shape', { CIRCLE: 'CIRCLE', SQUERE: 'SQUERE' }, 'SQUERE')}
        eyeShape={select('Eye shape', { CIRCLE: 'CIRCLE', SQUERE: 'SQUERE' }, 'SQUERE')}
        imageSrc={text('Image source', quintaImg)}
        imageRatio={number('Image ratio in %', 30)}
        imagePosition={select('Image Position', { TOP: 'TOP', BOTTOM: 'BOTTOM', RIGHT: 'RIGHT', LEFT: 'LEFT', CENTER: 'CENTER' }, 'CENTER')}
        imageExcavate={boolean('Excavate', true)}
        id={text('Id', 'svgID')}
      />
      <button onClick={() => downloadAsSvg('svgID')}>Export to SVG</button>
      <button onClick={() => downloadAsPng('svgID')}>Export to PNG</button>
      <button onClick={() => downloadAsPdf('svgID', 256)}>Export to PDF</button>
      {/* You need to pass size to download as pdf so you don't end up with a4 page */}
    </>
  ));
