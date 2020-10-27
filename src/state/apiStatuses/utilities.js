import isUndefined from 'lodash/isUndefined';
import noop from 'lodash/noop';

const isLoadingReducer = (state, reducerName) => isUndefined(state.apiStatuses[reducerName]) ? false : state.apiStatuses[reducerName].isLoading;

const getErrorMessageReducer = (state, reducerName) => isUndefined(state.apiStatuses[reducerName]) ? noop() : state.apiStatuses[reducerName].errorMessage;

export {
  isLoadingReducer,
  getErrorMessageReducer,
};
