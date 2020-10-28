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

const ContactScreen = ({
  actions: {
    appCreateNotificationAction,
  },
}) => {
  const handeClickEdit = () => {
    appCreateNotificationAction(
      'TEST From Contact Screen',
      NotificationTypeValues.SUCCESS,
    );
  };

  return (
    <ApplicationContainer
      title={'ContactScreen'}
    >
      {/* <h4>ContactScreen</h4> */}
      <Button
        onClick={() => handeClickEdit()}
      >
        CONTACT TEST BUTTON
      </Button>

    </ApplicationContainer>
  );
};

ContactScreen.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactScreen);
