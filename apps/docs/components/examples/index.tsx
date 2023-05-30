import { BreadcrumbsDefault } from './breadcrumbs/default'
import { ButtonDefault } from './button/default'
import { CheckboxDefault } from './checkbox/default'
import { CheckboxGroupDefault } from './checkboxGroup/default'
import { ComboBoxDefault } from './comboBox/default'
import { DateFieldDefault } from './dateField/default'
import { DatePickerDefault } from './datePicker/default'
import { IconButtonDefault } from './iconButton/default'
import { InputDefault } from './input/default'

export const exampleComponents = {
  // Breadcrumbs
  BreadcrumbsDefault,
  // Buttons
  ButtonDefault,
  // Checkbox
  CheckboxDefault,
  // CheckboxGroup
  CheckboxGroupDefault,
  // ComboBox
  ComboBoxDefault,
  // DateField
  DateFieldDefault,
  // DatePicker
  DatePickerDefault,
  // IconButton
  IconButtonDefault,
  // Input
  InputDefault,
}

// Auto map example components to markdoc tags
export const exampleTags = Object.keys(exampleComponents).reduce(
  (acc, key) => ({
    ...acc,
    [key]: {
      render: key,
    },
  }),
  {}
)
