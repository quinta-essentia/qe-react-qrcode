import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import QRCode from '../components/blocks/qrCode/qrCode';

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

  const imageOptions = {
    src: '../../assets/quinta.png',
    height: 80,
    width: 80,
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
      <QRCode value='http://facebook.github.io/react/' size='256' level='H' imageSettings={imageOptions}/>

    </ApplicationContainer>
  );
};

//       value: PropTypes.string.isRequired,
//       size: PropTypes.number,
//       level: PropTypes.oneOf(['L', 'M', 'Q', 'H']),
//       bgColor: PropTypes.string,
//       fgColor: PropTypes.string,
//       includeMargin: PropTypes.bool,
//       imageSettings: PropTypes.shape({
//         src: PropTypes.string.isRequired,
//         height: PropTypes.number.isRequired,
//         width: PropTypes.number.isRequired,
//         excavate: PropTypes.bool,
//         x: PropTypes.number,
//         y: PropTypes.number,
//       }),

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
