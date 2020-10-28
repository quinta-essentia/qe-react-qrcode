import noop from 'lodash/noop';
import {
  boolean,
  color,
  date,
  number,
  object,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';

import {
  ColorNameValues,
  SizeNameValues,
} from 'qe-react-components-style';

import {
  IconsNamesValues,
  InputTypeValues,
  parseIsoDateString,
} from 'qe-react-components-web';

const booleanKnob = ({
  label,
  defaultValue,
} = {}) => boolean(label, defaultValue);

const colorKnob = ({
  label,
  defaultValue
} = {}) => color(label, defaultValue);

const colorNameSelectKnob = ({
  label = 'colorName',
  defaultValue,
} = {}) => select(
  label,
  {
    None: noop(),
    ...ColorNameValues,
  },
  defaultValue
);

const dateKnob = ({
  label,
  defaultValue = '2020-05-16T16:00:00.000Z',
} = {}) => {
  const dk = date(label, parseIsoDateString(defaultValue));
  return new Date(dk);
};

const fieldKeyTextKnob = ({
  label = 'fieldKey',
  defaultValue = 'fieldKeyValue',
} = {}) => textKnob({ label, defaultValue });

const iconNameSelectKnob = ({
  label = 'iconName',
  defaultValue,
} = {}) => select(
  label,
  {
    None: noop(),
    ...IconsNamesValues,
  },
  defaultValue
);

const isDisabledKnob = ({
  label = 'isDisabled',
  defaultValue = false,
} = {}) => booleanKnob({ label, defaultValue });

const isFilledKnob = ({
  label = 'isFilled',
  defaultValue = false,
} = {}) => booleanKnob({ label, defaultValue });

const isLabelHiddenKnob = ({
  label = 'isLabelHidden',
  defaultValue = false,
} = {}) => booleanKnob({ label, defaultValue });

const isLoadingKnob = ({
  label = 'isLoading',
  defaultValue = false,
} = {}) => booleanKnob({ label, defaultValue });

const isMultipleKnob = ({
  label = 'isMultiple',
  defaultValue = false,
} = {}) => booleanKnob({ label, defaultValue });

const isReadonlyKnob = ({
  label = 'isReadonly',
  defaultValue = false,
} = {}) => booleanKnob({ label, defaultValue });

const longTextKnob = ({
  label = 'Text',
  defaultValue = 'Dolor sit amet, consectetur adipiscing elit. Aliquam non nunc mauris.'
} = {}) => textKnob({ label, defaultValue });

const numberKnob = ({
  label,
  defaultValue = 1
} = {}) => number(label, defaultValue);

const objectKnob = ({
  label,
  defaultValue
} = {}) => object(label, defaultValue);

const optionsObjectKnob = ({
  label = 'Options',
  defaultValue = [{
    label: 'One',
    value: '1',
  },
  {
    label: 'Two',
    value: '2',
  },
  {
    label: 'Three',
    value: '3',
  },
  {
    label: 'Four',
    value: '4',
  },
  {
    label: 'Five',
    value: '5',
  },
  {
    label: 'Six',
    value: '6',
  },
  {
    label: 'Seven',
    value: '7',
  },
  {
    label: 'None',
    value: 'none',
  }]

} = {}) => objectKnob({
  label,
  defaultValue
});

const inputTypeSelectKnob = ({
  label = 'type',
  options = InputTypeValues,
  defaultValue = 'text',
} = {}) => select(
  label,
  options,
  defaultValue
);

const selectKnob = ({
  label,
  options,
  defaultValue
} = {}) => select(label, options, defaultValue);

const shortTextKnob = ({
  label = 'Text',
  defaultValue = 'Lorem Ipsum'
} = {}) => textKnob({ label, defaultValue });

const sizeNameSelectKnob = ({
  label = 'sizeName',
  defaultValue = SizeNameValues.NORMAL,
} = {}) => select(
  label,
  {
    None: noop(),
    ...SizeNameValues,
  },
  defaultValue
);

const textKnob = ({
  label,
  defaultValue
} = {}) => text(label, defaultValue);

export {
  booleanKnob,
  colorKnob,
  colorNameSelectKnob,
  dateKnob,
  fieldKeyTextKnob,
  iconNameSelectKnob,
  inputTypeSelectKnob,
  isDisabledKnob,
  isFilledKnob,
  isLabelHiddenKnob,
  isLoadingKnob,
  isMultipleKnob,
  isReadonlyKnob,
  longTextKnob,
  numberKnob,
  objectKnob,
  optionsObjectKnob,
  selectKnob,
  shortTextKnob,
  sizeNameSelectKnob,
  textKnob,
  withKnobs,
};
