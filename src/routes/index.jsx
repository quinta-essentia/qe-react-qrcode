import React from 'react';
import PropTypes from 'prop-types';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';

import map from 'lodash/map';
import values from 'lodash/values';

import ContactScreen from './contactScreen';
import AboutScreen from './aboutScreen';
import HomeScreen from './homeScreen';

export const AppRoutes = {
  ABOUT: {
    path: '/about',
    label: 'ABOUT',
    isPrivate: false,
    component: AboutScreen,
  },

  CONTACT: {
    path: '/contact',
    label: 'CONTACT',
    isPrivate: false,
    component: ContactScreen,
  },

  HOME: {
    path: '/home',
    label: 'HOME',
    isPrivate: false,
    component: HomeScreen,
  },
};

const RouteWrapper = ({ path, isPrivate, component: Component }) => {
  return (
    <Route
      path={path}
      render={() => {
        // if (isPrivate) {
        //   return (
        //     <LoginScreen />
        //   );
        // }
        return (
          <Component />
        );
      }}
    />
  );
};

RouteWrapper.propTypes = {
  path: PropTypes.string,
  isPrivate: PropTypes.bool,
  component: PropTypes.object,
};

const AppRouter = ({
  history,
}) => (
  <Router history={history}>
    <Switch>
      {map(
        values(AppRoutes),
        AppRoute => (
          <RouteWrapper key={AppRoute.path} {...AppRoute} />
        ),
      )}
      {/* <Route
        path='/'
      >
        <Redirect push exact from='/' to={AppRoutes.COMPANY_PROFILE.path} />
      </Route> */}
    </Switch>
  </Router>
);

AppRouter.propTypes = {
  history: PropTypes.object.isRequired,
};

export default AppRouter;
