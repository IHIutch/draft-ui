import { BreadcrumbsDefault } from './breadcrumbs/default'
import { ButtonDefault } from './button/default'
import { CheckboxDefault } from './checkbox/default'
import { CheckboxGroupDefault } from './checkboxGroup/default'
import { ComboBoxDefault } from './comboBox/default'
import { DateFieldDefault } from './dateField/default'
import { DatePickerDefault } from './datePicker/default'
import { IconButtonDefault } from './iconButton/default'
import { InputDefault } from './input/default'
import { LabelDefault } from './label/default'
import { MenuDefault } from './menu/default'
import { MeterDefault } from './meter/default'
import { ModalDefault } from './modal/default'
import { NumberInputDefault } from './numberInput/default'
import { NumberInputMobile } from './numberInput/mobile'
import { ProgressBarDefault } from './progressbar/default'
import { RadioDefault } from './radio/default'
import { RadioGroupDefault } from './radioGroup/default'
import { SearchFieldDefault } from './searchField/default'
import { SearchFieldWithClearButton } from './searchField/withClearButton'
import { SearchFieldWithLabel } from './searchField/withLabel'
import { SelectDefault } from './select/default'
import { SliderDefault } from './slider/default'
import { SliderVertical } from './slider/vertical'
import { SwitchDefault } from './switch/default'
import { TabsDefault } from './tabs/default'
import { TabsVertical } from './tabs/vertical'
import { TextFieldDefault } from './textField/default'
import { TextFieldWithErrorText } from './textField/withErrorText'

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
  // Label
  LabelDefault,
  // Menu
  MenuDefault,
  // Meter
  MeterDefault,
  // Modal
  ModalDefault,
  // NumberInput
  NumberInputDefault,
  NumberInputMobile,
  // ProgressBar
  ProgressBarDefault,
  // Radio
  RadioDefault,
  // Radio
  RadioGroupDefault,
  // SearchField
  SearchFieldDefault,
  SearchFieldWithLabel,
  SearchFieldWithClearButton,
  // Select
  SelectDefault,
  // Slider
  SliderDefault,
  SliderVertical,
  // Slider
  SwitchDefault,
  // Tabs
  TabsDefault,
  TabsVertical,
  // TextField
  TextFieldDefault,
  TextFieldWithErrorText,
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
