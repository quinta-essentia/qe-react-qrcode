import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  AppNotificationsActions,
} from '../state';

import ApplicationContainer from '../components/blocks/applicationContainer/applicationContainer';

const mapStateToProps = state => ({
  modalConfirmation: state.appModalConfirmation,
  notifications: state.appNotifications,
});

const mapDispatchToProps = (dispatch) => {
  const actions = bindActionCreators({
    onCloseNotification: AppNotificationsActions.appDeleteNotificationAction,
  }, dispatch);

  return { actions };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ({ actions, ...rest }) => (
    <ApplicationContainer
      {...actions}
      {...rest}
    />
  )
);
