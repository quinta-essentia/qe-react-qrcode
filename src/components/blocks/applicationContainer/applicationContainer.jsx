import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import isEmpty from 'lodash/isEmpty';
import noop from 'lodash/noop';

import {
  Loader,
  Modal,
  ModalConfirmation,
  Notifications,
  childrenPropType,
  classNamesPropType,
  notificationsPropType,
} from 'qe-react-components-web';

import {
  ColorNameValues,
  PositionTypeValues,
  SizeNameValues,
} from 'qe-react-components-style';

import Navigation from '../navigation/navigation';

import {
  applicationContainerStyle,
  applicationContainerContentStyle,
  applicationContainerLeftItemsStyle,
  applicationContainerRightItemsStyle,
} from './applicationContainer.styles';

const ApplicationContainer = ({
  children,
  classNames,
  errorMessage,
  isLoading,
  modalConfirmation,
  notifications,
  onClickClose,
  onCloseNotification,
  onLogOut,
  rightItems,
  title,
  ...rest
}) => (
  <div className={applicationContainerStyle()}>

    <div className={applicationContainerLeftItemsStyle()}>
      <h1>BOILERPLATE</h1>
      <Navigation/>
    </div>

    <div
      className={cn(
        applicationContainerContentStyle(),
        classNames,
      )}
      {...rest}
    >
      {isLoading && (
        <Loader
          isDimmed
          sizeName={SizeNameValues.LARGE}
        />
      )}
      {<h1>{title}</h1>}
      {children}

      {rightItems &&
        <Modal
          classNames={applicationContainerRightItemsStyle()}
          isFullScreen
          position={PositionTypeValues.RIGHT}
          onClickClose={onClickClose}
        >
          {rightItems}
        </Modal>
      }
    </div>

    <Notifications
      notifications={notifications}
      onClose={onCloseNotification}
    />

    {!isEmpty(modalConfirmation) && (
      <ModalConfirmation
        colorName={ColorNameValues.DANGER}
        onConfirm={modalConfirmation.onConfirm}
        title={modalConfirmation.title}
      >
        {modalConfirmation.text}
      </ModalConfirmation>
    )}
  </div>
);

ApplicationContainer.defaultProps = {
  classNames: noop(),
  errorMessage: noop(),
  isLoading: false,
  title: noop(),
};

ApplicationContainer.propTypes = {
  children: childrenPropType.isRequired,
  classNames: classNamesPropType,
  description: PropTypes.string,
  errorMessage: PropTypes.string,
  isLoading: PropTypes.bool,
  rightItems: PropTypes.node,
  onLogOut: PropTypes.func,
  modalConfirmation: PropTypes.shape({
    text: PropTypes.string,
    title: PropTypes.string,
    onConfirm: PropTypes.func,
  }),
  notifications: notificationsPropType,
  onCloseNotification: PropTypes.func,
  onClickClose: PropTypes.func,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};

export default ApplicationContainer;
