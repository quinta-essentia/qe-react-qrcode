import camelCase from 'lodash/camelCase';
import lowerCase from 'lodash/lowerCase';
import noop from 'lodash/noop';
import split from 'lodash/split';

export const initialState = {};

const apiStatusesReducers = (
  state = initialState,
  action,
) => {
  const [context, reducer, actionName, actionType] = split(action.type, '__');

  if (context === 'API') {
    return {
      ...state,
      [lowerCase(reducer)]: {
        isLoading: actionType === 'REQUEST',
        errorMessage: actionType === 'FAILURE' ? `Error happened in ${camelCase(actionName)}` : noop(),
        lastUpdate: new Date(),
      },
    };
  }

  return state;
};

export default apiStatusesReducers;
