import {
  getColorHexBrighten,
  getColorHexDarken,
} from 'qe-react-components-style/utilities/colors';

import {
  ColorTintsIntensity,
} from '@theme/variablesInitial';

const calculateColorTints = (colorHex, key) => ({
  [`${key}_DARK`]: getColorHexDarken(colorHex, ColorTintsIntensity.DARK),
  [key]: colorHex,
  [`${key}_LIGHT`]: getColorHexBrighten(colorHex, ColorTintsIntensity.LIGHT),
  [`${key}_LIGHTER`]: getColorHexBrighten(colorHex, ColorTintsIntensity.LIGHTER),
});

export {
  calculateColorTints,
};
