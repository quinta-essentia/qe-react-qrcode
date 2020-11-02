import map from 'lodash/map';

import {
  calculateColorTints,
} from '../utilities/colors';
import {
  Colors as ColorsVariablesInitial,
  FontFamilies as FontFamiliesVariablesInitial,
  Sizes as SizesVariablesInitial,
} from './variablesInitial';

const ApplicationBackgroundColor = '#f1f3f6';
const ApplicationNavBarHeight = '100px';

const BorderRadiusSizes = {
  SMALL: '1px',
  NORMAL: '4px',
  MEDIUM: '8px',
  LARGE: '24px',
  EXTRA_LARGE: '48px',
};

const BoxConfig = {
  DEFAULT_COLOR: 'GREY_LIGHTER',
  PULL_CONTENT_ELEMENTS: false,
};

const BoxShadowConfig = {
  DISTANCE: '2px',
  BLUR: '6px',
  INTENSITY: 1,
};

const Colors = {
  ...calculateColorTints(ColorsVariablesInitial.BLUE, 'PRIMARY'),
  ...calculateColorTints(ColorsVariablesInitial.BLUE, 'BRAND'),

  ...calculateColorTints(ColorsVariablesInitial.BLUE, 'INFO'),
  ...calculateColorTints(ColorsVariablesInitial.GREEN, 'SUCCESS'),
  ...calculateColorTints(ColorsVariablesInitial.ORANGE, 'WARNING'),
  ...calculateColorTints(ColorsVariablesInitial.RED, 'DANGER'),

  APPLICATION: '#f1f3f6',

  INK: '#3c434d',
  INK_DARK: '#242425',
  INK_LIGHT: '#cdcdde',
  INK_LIGHTER: '#ededef',

  ...calculateColorTints(ColorsVariablesInitial.BLACK, 'BLACK'),
  GREY: '#c2cbd8',
  GREY_DARK: '#d7dde6',
  GREY_LIGHT: '#9599a0',
  GREY_LIGHTER: '#eceef3',
  ...calculateColorTints(ColorsVariablesInitial.WHITE, 'WHITE'),

  ...calculateColorTints(ColorsVariablesInitial.BLUE, 'BLUE'),
  ...calculateColorTints(ColorsVariablesInitial.GREEN, 'GREEN'),
  ...calculateColorTints(ColorsVariablesInitial.ORANGE, 'ORANGE'),
  ...calculateColorTints(ColorsVariablesInitial.RED, 'RED'),
  ...calculateColorTints(ColorsVariablesInitial.YELLOW, 'YELLOW'),

  TRANSPARENT: ColorsVariablesInitial.TRANSPARENT,
};

const ControlConfig = {
  IS_FLATTEN: false,
  IS_ROUNDED: true,
  DEFAULT_COLOR: 'GREY',
  DEFAULT_BORDER_WIDTH: '3px',
};

const SpacingIn = {
  ZERO: {
    VERTICAL: 0,
    HORIZONTAL: 0,
  },
  SMALL: {
    VERTICAL: '4px',
    HORIZONTAL: '8px',
  },
  NORMAL: {
    VERTICAL: '10px',
    HORIZONTAL: '15px',
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
    VERTICAL: '22px',
    HORIZONTAL: '26px',
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
  SMALL: '12px',
  NORMAL: '14px',
  MEDIUM: '16px',
  LARGE: '32px',
};

const DoubleElementSizes = {
  SMALL: `${SizesVariablesInitial.ROOT_ELEMENT_ABSOLUTE_SIZE * SizesVariablesInitial.SIZE_5 * 2}px`,
  NORMAL: `${SizesVariablesInitial.ROOT_ELEMENT_ABSOLUTE_SIZE * SizesVariablesInitial.SIZE_4 * 2}px`,
  MEDIUM: `${SizesVariablesInitial.ROOT_ELEMENT_ABSOLUTE_SIZE * SizesVariablesInitial.SIZE_3 * 2}px`,
  LARGE: `${SizesVariablesInitial.ROOT_ELEMENT_ABSOLUTE_SIZE * SizesVariablesInitial.SIZE_1 * 2}px`,
};

export {
  ApplicationBackgroundColor,
  ApplicationNavBarHeight,
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
