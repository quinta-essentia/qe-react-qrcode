import {
  ColorNameValues,
  DisplayValues,
  SizeNameValues,
  getBackgroundStyleProperties,
  getDisplayStyleProperties,
  getInSpaceStyleProperties,
  getPushBottomStyleProperties,
  getPushHorizontalStyleProperties,
  getPushTopStyleProperties,
  getTextColorStyleProperties,
  getTextSizeStyleProperties,
  injectStyle,
} from 'qe-react-components-style';

import {
  illustrationStyle,
} from 'qe-react-components-web/elements/illustration/illustration.styles';

import {
  notificationStyle,
} from 'qe-react-components-web/elements/notification/notification.styles';

const applicationContainerStyle = () => injectStyle(
  'applicationContainer',
  {

    ...getDisplayStyleProperties(DisplayValues.ROW),

    maxHeight: '100vh',
    minHeight: '100vh',

    '& h1': {
      ...getTextSizeStyleProperties(SizeNameValues.LARGE),
      ...getInSpaceStyleProperties(SizeNameValues.MEDIUM),
    },

    [`& .${notificationStyle()}`]: {
      ...getPushTopStyleProperties(SizeNameValues.MEDIUM),
    },
  },
);

const applicationContainerContentStyle = () => injectStyle(
  'applicationContainerContent',
  {
    ...getDisplayStyleProperties(DisplayValues.COLUMN, true),
    ...getInSpaceStyleProperties(SizeNameValues.LARGE),
    ...getBackgroundStyleProperties(ColorNameValues.GREY),
    ...getTextColorStyleProperties(ColorNameValues.BLACK),

    flexGrow: 1,
    overflow: 'scroll',
    width: 'auto',

    h1: {
      ...getPushBottomStyleProperties(SizeNameValues.LARGE),
      ...getPushTopStyleProperties(SizeNameValues.LARGE),
      ...getTextSizeStyleProperties(SizeNameValues.LARGE),
    },

  },
);

const applicationContainerLeftItemsStyle = () => injectStyle(
  'applicationContainerLeftItems',
  {
    [`& > .${illustrationStyle()}`]: {

      ...getPushHorizontalStyleProperties(SizeNameValues.LARGE),
      ...getPushTopStyleProperties(SizeNameValues.LARGE),
      ...getPushBottomStyleProperties(SizeNameValues.LARGE),
      ...getBackgroundStyleProperties(ColorNameValues.WHITE),

      flexGrow: 0,
      justifyContent: 'flex-start',

    },

    ...getDisplayStyleProperties(DisplayValues.COLUMN),

    flexGrow: 0,
    width: '300px',
  },
);

const applicationContainerRightItemsStyle = () => injectStyle(
  'applicationContainerRightItems',
  {

    marginLeft: '300px !important',

  },
);

export {
  applicationContainerContentStyle,
  applicationContainerLeftItemsStyle,
  applicationContainerRightItemsStyle,
  applicationContainerStyle,
};
