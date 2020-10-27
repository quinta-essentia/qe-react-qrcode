import React from 'react';
import { storiesOf } from '@storybook/react';

import { action } from '@storybook/addon-actions';
import ItemDropMenu from './itemDropMenu';

storiesOf('RTFKT/CMS/Blocks/ItemDropMenu/ItemDropMenu', module)
  .add('Default', () => (
    <ItemDropMenu
      uuid={'ccdedaf6-7d89-4d96-a7be-62f12fb26ffd'}
      onClickDelete={action('onClickDelete')}
      onClickEdit={action('onClickEdit')}
    />
  ));
