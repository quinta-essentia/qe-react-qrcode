import {
  DisplayValues,
  SizeNameValues,
  getDisplayStyleProperties,
  getHorizontalBorderStyleProperties,
  getInSpaceVerticalStyleProperties,
  getPushLeftStyleProperties,
  getPushRightStyleProperties,
  getPushTopStyleProperties,
  injectStyle,
} from 'qe-react-components-style';

import {
  illustrationStyle,
} from 'qe-react-components-web/elements/illustration/illustration.styles';

const navigationStyle = () => injectStyle(
  'navigation',
  {
    ...getDisplayStyleProperties(DisplayValues.COLUMN, true),
    justifyContent: 'space-between',
    flexGrow: 0,

    '& ul': {
      ...getDisplayStyleProperties(DisplayValues.COLUMN, true),
      listStyleType: 'none',
    },

    '& li': {
      ...getInSpaceVerticalStyleProperties(SizeNameValues.MEDIUM),

      display: 'flex',
      flexDirection: 'column',

      '& > a': {
        display: 'flex',
        alignItems: 'center',

        [`& > .${illustrationStyle()}`]: {
          display: 'inline-block',
          flexGrow: 0,
          ...getPushRightStyleProperties(),
        },
      },
    },
  },
);

const navigationActivitiesStyle = () => injectStyle(
  'navigationActivities',
  {
    ...getHorizontalBorderStyleProperties('GREY_DARK'),
    ...getPushTopStyleProperties(SizeNameValues.LARGE),
    ...getPushLeftStyleProperties(SizeNameValues.MEDIUM),

    borderRightStyle: 'none',

    '& li': {
      ...getPushLeftStyleProperties(SizeNameValues.LARGE),
    },

  },
);

export {
  navigationStyle,
  navigationActivitiesStyle,
};
