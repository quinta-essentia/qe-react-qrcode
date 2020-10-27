import React, { useState, useEffect } from 'react';
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

const HomeScreen = ({
  actions: {
    appCreateNotificationAction,
  },
}) => {

  const handeClickEdit = () => {
    appCreateNotificationAction(
      'TEST From Home Screen',
      NotificationTypeValues.SUCCESS,
    );
  };

  return (
    <ApplicationContainer
      title={'HomeScreen'}
    >
      <Button
        onClick={() => handeClickEdit()}
      >
        HOME TEST BUTTON
      </Button>
      
    </ApplicationContainer>
  );
};

HomeScreen.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);