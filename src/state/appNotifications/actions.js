import { v4 as uuid } from 'uuid';

const ActionTypes = {
  APP__NOTIFICATIONS__CREATE_NOTIFICATION: 'APP__NOTIFICATIONS__CREATE_NOTIFICATION',
  APP__NOTIFICATIONS__DELETE_NOTIFICATION: 'APP__NOTIFICATIONS__DELETE_NOTIFICATION',
};

const appCreateNotificationAction = (text, type) => ({
  type: ActionTypes.APP__NOTIFICATIONS__CREATE_NOTIFICATION,
  payload: {
    notification: {
      uuid: uuid(),
      text,
      type,
    },
  }
});

const appDeleteNotificationAction = (uuid) => ({
  type: ActionTypes.APP__NOTIFICATIONS__DELETE_NOTIFICATION,
  payload: {
    uuid,
  }
});

export {
  ActionTypes,
  appCreateNotificationAction,
  appDeleteNotificationAction,
};
