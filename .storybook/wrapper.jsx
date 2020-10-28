import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import noop from 'lodash/noop';

import {
  ColorNameValues,
  hasBackgroundColorModifier,
  isDisplayRowModifier,
  isFullViewportModifier,
  isPushingBottomModifier,
  isPushingHorizontalModifier,
} from 'qe-react-components-style';

import {
  childrenPropType,
  classNamesPropType,
} from 'qe-react-components-web';

const Wrapper = ({
  children,
  isFullViewport,
  isTransparent,
  classNames,
  ...rest
}) => (
  <div
    className={cn(
      isDisplayRowModifier(),
      isPushingBottomModifier(),
      {
        [hasBackgroundColorModifier(ColorNameValues.LIGHT)]: !isTransparent,
        [isFullViewportModifier()]: isFullViewport,
      },
      classNames,
    )}
    {...rest}
  >
    {children}
  </div>
);

Wrapper.defaultProps = {
  children: noop(),
  classNames: noop(),
  isFullViewport: false,
  isTransparent: true,
};

Wrapper.propTypes = {
  children: childrenPropType,
  classNames: classNamesPropType,
  isFullViewport: PropTypes.bool,
  isTransparent: PropTypes.bool,
};

export default Wrapper;
