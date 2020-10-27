import React from 'react';
import { storiesOf } from '@storybook/react';

import { action } from '@storybook/addon-actions';

import ApplicationContainer from './applicationContainer';

storiesOf('RTFKT/Components/Blocks/ApplicationContainer', module)
  .add('Default', () => (
    <ApplicationContainer
      onCloseNotification={action('onCloseNotification')}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non nunc mauris.
    </ApplicationContainer>
  ))
  .add('Loading', () => (
    <ApplicationContainer
      isLoading
      onCloseNotification={action('onCloseNotification')}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non nunc mauris.
    </ApplicationContainer>
  ))
  .add('Modal', () => (
    <ApplicationContainer
      onCloseNotification={action('onCloseNotification')}
      rightItems={'Modal'}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non nunc mauris.
    </ApplicationContainer>
  ))
  .add('Modal Confirmation', () => (
    <ApplicationContainer
      modalConfirmation={{
        text: 'Are you sure you want to delete?',
        onConfirm: action('onConfirm'),
      }}
    >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non nunc mauris.
    </ApplicationContainer>
  ))
  .add('Notifications', () => (
    <ApplicationContainer
      onCloseNotification={action('onCloseNotification')}
      notifications={[
        {
          uuid: 'cce789ee-7f5f-479b-9c6b-0e987e00c473',
          text: 'This is a success notification',
          type: 'SUCCESS',
        },
        {
          uuid: '96344fdc-278d-4222-b7da-5072e0b3414f',
          text: 'This is a warning notification',
          type: 'WARNING',
        },
      ]}
    >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non nunc mauris.
    </ApplicationContainer>
  ));
