import React from 'react';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';

import { getLocalStorageEntry, LocalStorageKeys } from './utilities/localStorage';
import { setContext } from '@apollo/client/link/context';

import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import AppRouter from './routes';

import {
  reduxReducers,
} from './state';

const history = createBrowserHistory();

const getToken = () => {
  const token = getLocalStorageEntry(LocalStorageKeys.JWT_TOKEN);
  return token ? `Bearer ${token}` : '';
};

const httpLink = createHttpLink({
  uri: 'http://ec2-18-220-234-114.us-east-2.compute.amazonaws.com:3000/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: getToken(),
    }
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
const store = createStore(
  connectRouter(history)(combineReducers({
    ...reduxReducers,
  })),
  composeEnhancers(applyMiddleware(
    thunk,
    routerMiddleware(history),
  )),
);

class App extends React.Component {
  componentDidMount () {
    // store.dispatch(brandsActions.appGetBrandsAction());
    // store.dispatch(tagsActions.appGetTagsAction());
    // store.dispatch(factionsActions.appGetFactionsAction());
  }

  render () {
    return (
      <React.Fragment>
        <ApolloProvider client={client}>
          <Provider store={store}>
            <AppRouter history={history} />
          </Provider>
        </ApolloProvider>
      </React.Fragment>
    );
  };
};

export default App;
