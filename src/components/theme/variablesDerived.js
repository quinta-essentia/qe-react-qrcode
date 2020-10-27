import map from 'lodash/map';

import {
  calculateColorTints,
} from '../utilities/colors';
import {
  Colors as ColorsVariablesInitial,
  FontFamilies as FontFamiliesVariablesInitial,
  Sizes as SizesVariablesInitial,
} from './variablesInitial';

const ApplicationBackgroundColor = '#ffffff';
const ApplicationLeftNavigationWidth = '300px';

const BorderRadiusSizes = {
  SMALL: '1px',
  NORMAL: '4px',
  MEDIUM: '8px',
  LARGE: '24px',
  EXTRA_LARGE: '48px',
};

const BoxConfig = {
  DEFAULT_COLOR: 'WHITE',
  PULL_CONTENT_ELEMENTS: true,
};

const BoxShadowConfig = {
  DISTANCE: '2px',
  BLUR: '6px',
  INTENSITY: 1,
};

const Colors = {
  ...calculateColorTints(ColorsVariablesInitial.GREEN, 'PRIMARY'),
  ...calculateColorTints(ColorsVariablesInitial.GREEN, 'BRAND'),

  ...calculateColorTints(ColorsVariablesInitial.BLUE, 'INFO'),
  ...calculateColorTints(ColorsVariablesInitial.GREEN, 'SUCCESS'),
  ...calculateColorTints(ColorsVariablesInitial.ORANGE, 'WARNING'),
  ...calculateColorTints(ColorsVariablesInitial.RED, 'DANGER'),

  ...calculateColorTints(ColorsVariablesInitial.INK, 'INK'),

  ...calculateColorTints(ColorsVariablesInitial.BLACK, 'BLACK'),
  ...calculateColorTints(ColorsVariablesInitial.GREY, 'GREY'),
  ...calculateColorTints(ColorsVariablesInitial.WHITE, 'WHITE'),

  ...calculateColorTints(ColorsVariablesInitial.BLUE, 'BLUE'),
  ...calculateColorTints(ColorsVariablesInitial.GREEN, 'GREEN'),
  ...calculateColorTints(ColorsVariablesInitial.ORANGE, 'ORANGE'),
  ...calculateColorTints(ColorsVariablesInitial.RED, 'RED'),
  ...calculateColorTints(ColorsVariablesInitial.YELLOW, 'YELLOW'),

  TRANSPARENT: ColorsVariablesInitial.TRANSPARENT,
};

const ControlConfig = {
  IS_FLATTEN: true,
  IS_ROUNDED: false,
  DEFAULT_COLOR: 'WHITE',
  DEFAULT_BORDER_WIDTH: '1px',
};

const SpacingIn = {
  ZERO: {
    VERTICAL: 0,
    HORIZONTAL: 0,
  },
  SMALL: {
    VERTICAL: `${SizesVariablesInitial.ROOT_ELEMENT_ABSOLUTE_SIZE * SizesVariablesInitial.SIZE_7}px`,
    HORIZONTAL: `${SizesVariablesInitial.ROOT_ELEMENT_ABSOLUTE_SIZE * SizesVariablesInitial.SIZE_4}px`,
  },
  NORMAL: {
    VERTICAL: `${SizesVariablesInitial.ROOT_ELEMENT_ABSOLUTE_SIZE * SizesVariablesInitial.SIZE_6}px`,
    HORIZONTAL: `${SizesVariablesInitial.ROOT_ELEMENT_ABSOLUTE_SIZE * SizesVariablesInitial.SIZE_3}px`,
  },
  MEDIUM: {
    VERTICAL: `${SizesVariablesInitial.ROOT_ELEMENT_ABSOLUTE_SIZE * SizesVariablesInitial.SIZE_3}px`,
    HORIZONTAL: `${SizesVariablesInitial.ROOT_ELEMENT_ABSOLUTE_SIZE * SizesVariablesInitial.SIZE_2}px`,
  },
  LARGE: {
    VERTICAL: `${SizesVariablesInitial.ROOT_ELEMENT_ABSOLUTE_SIZE * SizesVariablesInitial.SIZE_2}px`,
    HORIZONTAL: `${SizesVariablesInitial.ROOT_ELEMENT_ABSOLUTE_SIZE * SizesVariablesInitial.SIZE_1}px`,
  },
};

const SpacingOut = {
  ZERO: {
    VERTICAL: 0,
    HORIZONTAL: 0,
  },
  SMALL: {
    VERTICAL: `${SizesVariablesInitial.ROOT_ELEMENT_ABSOLUTE_SIZE * SizesVariablesInitial.SIZE_5}px`,
    HORIZONTAL: `${SizesVariablesInitial.ROOT_ELEMENT_ABSOLUTE_SIZE * SizesVariablesInitial.SIZE_4}px`,
  },
  NORMAL: {
    VERTICAL: `${SizesVariablesInitial.ROOT_ELEMENT_ABSOLUTE_SIZE * SizesVariablesInitial.SIZE_4}px`,
    HORIZONTAL: `${SizesVariablesInitial.ROOT_ELEMENT_ABSOLUTE_SIZE * SizesVariablesInitial.SIZE_3}px`,
  },
  MEDIUM: {
    VERTICAL: `${SizesVariablesInitial.ROOT_ELEMENT_ABSOLUTE_SIZE * SizesVariablesInitial.SIZE_3}px`,
    HORIZONTAL: `${SizesVariablesInitial.ROOT_ELEMENT_ABSOLUTE_SIZE * SizesVariablesInitial.SIZE_2}px`,
  },
  LARGE: {
    VERTICAL: `${SizesVariablesInitial.ROOT_ELEMENT_ABSOLUTE_SIZE * SizesVariablesInitial.SIZE_2}px`,
    HORIZONTAL: `${SizesVariablesInitial.ROOT_ELEMENT_ABSOLUTE_SIZE * SizesVariablesInitial.SIZE_1}px`,
  },
};

const FontFamilies = {
  PRIMARY: FontFamiliesVariablesInitial.SANS_SERIF_1.name,
  SECONDARY: FontFamiliesVariablesInitial.SANS_SERIF_1.name,
};

const MediaQueries = map(
  [576, 768, 992, 1200],
  breakpoint => `@media (min-width: ${breakpoint}px)`,
);

const SmallElementSizes = {
  SMALL: `${SizesVariablesInitial.ROOT_ELEMENT_ABSOLUTE_SIZE * SizesVariablesInitial.SIZE_7}px`,
  NORMAL: `${SizesVariablesInitial.ROOT_ELEMENT_ABSOLUTE_SIZE * SizesVariablesInitial.SIZE_6}px`,
  MEDIUM: `${SizesVariablesInitial.ROOT_ELEMENT_ABSOLUTE_SIZE * SizesVariablesInitial.SIZE_5}px`,
  LARGE: `${SizesVariablesInitial.ROOT_ELEMENT_ABSOLUTE_SIZE * SizesVariablesInitial.SIZE_4}px`,
};

const ElementSizes = {
  SMALL: `${SizesVariablesInitial.ROOT_ELEMENT_ABSOLUTE_SIZE * SizesVariablesInitial.SIZE_5}px`,
  NORMAL: `${SizesVariablesInitial.ROOT_ELEMENT_ABSOLUTE_SIZE * SizesVariablesInitial.SIZE_4}px`,
  MEDIUM: `${SizesVariablesInitial.ROOT_ELEMENT_ABSOLUTE_SIZE * SizesVariablesInitial.SIZE_3}px`,
  LARGE: `${SizesVariablesInitial.ROOT_ELEMENT_ABSOLUTE_SIZE * SizesVariablesInitial.SIZE_2}px`,
};

const DoubleElementSizes = {
  SMALL: `${SizesVariablesInitial.ROOT_ELEMENT_ABSOLUTE_SIZE * SizesVariablesInitial.SIZE_5 * 2}px`,
  NORMAL: `${SizesVariablesInitial.ROOT_ELEMENT_ABSOLUTE_SIZE * SizesVariablesInitial.SIZE_4 * 2}px`,
  MEDIUM: `${SizesVariablesInitial.ROOT_ELEMENT_ABSOLUTE_SIZE * SizesVariablesInitial.SIZE_3 * 2}px`,
  LARGE: `${SizesVariablesInitial.ROOT_ELEMENT_ABSOLUTE_SIZE * SizesVariablesInitial.SIZE_1 * 2}px`,
};

export {
  ApplicationBackgroundColor,
  ApplicationLeftNavigationWidth,
  BorderRadiusSizes,
  BoxConfig,
  BoxShadowConfig,
  Colors,
  ControlConfig,
  DoubleElementSizes,
  ElementSizes,
  FontFamilies,
  MediaQueries,
  SmallElementSizes,
  SpacingIn,
  SpacingOut,
};
