import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Button,
  NotificationTypeValues,
} from 'qe-react-components-web';

import {
  AppNotificationsActions,
} from '../state';

import ApplicationContainer from '../containers/applicationContainer';

const AboutScreen = ({
  actions: {
    appCreateNotificationAction,
  },
}) => {
  const handeClickEdit = () => {
    appCreateNotificationAction(
      'TEST From About Screen',
      NotificationTypeValues.SUCCESS,
    );
  };

  return (
    <ApplicationContainer
      title={'AboutScreen'}
    >
      <Button
        onClick={() => handeClickEdit()}
      >
        ABOUT TEST BUTTON
      </Button>

    </ApplicationContainer>
  );
};

AboutScreen.propTypes = {
  actions: PropTypes.exact({
    AppNotificationsActions: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  notifications: state.appNotifications,
});

const mapDispatchToProps = (dispatch) => {
  const actions = bindActionCreators({
    appCreateNotificationAction: AppNotificationsActions.appCreateNotificationAction,
  }, dispatch);

  return { actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutScreen);
