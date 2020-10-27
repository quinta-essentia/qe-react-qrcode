import reject from 'lodash/reject';

import { ActionTypes } from './actions';

export const initialState = [];

const appNotificationsReducers = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case ActionTypes.APP__NOTIFICATIONS__CREATE_NOTIFICATION:
      return [
        ...state,
        action.payload.notification,
      ];
    case ActionTypes.APP__NOTIFICATIONS__DELETE_NOTIFICATION:
      return reject(state, ['uuid', action.payload.uuid]);
    default:
      return state;
  };
};

export default appNotificationsReducers;
