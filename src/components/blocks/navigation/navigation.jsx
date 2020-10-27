import React from 'react';
import PropTypes from 'prop-types';

import { AppRoutes } from '@routes';

import {
  getRoutePath,
  objectPropType,
  LinkInternal,
} from 'qe-react-components-web';

import {
  navigationStyle,
} from './navigation.styles.js';

const Navigation = ({
  activities,
  ...rest
}) => {
  return (
    <div className={navigationStyle()}>
      <ul>
        <li>
          <LinkInternal
            route={getRoutePath(
              AppRoutes.HOME.path
            )}
          >
            {AppRoutes.HOME.label}
          </LinkInternal>
        </li>
        <li>
          <LinkInternal
            route={getRoutePath(
              AppRoutes.ABOUT.path
            )}
          >
            {AppRoutes.ABOUT.label}
          </LinkInternal>
        </li>
        <li>
          <LinkInternal
            route={getRoutePath(
              AppRoutes.CONTACT.path
            )}
          >
            {AppRoutes.CONTACT.label}
          </LinkInternal>
        </li>
      </ul>
    </div>
  );
};
Navigation.propTypes = {
  activities: PropTypes.arrayOf(objectPropType),
};

export default Navigation;
