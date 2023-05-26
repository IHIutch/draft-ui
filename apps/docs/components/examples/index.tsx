import { BreadcrumbsDefault } from './breadcrumbs/default'
import { ButtonDefault } from './button/default'
import { CheckboxDefault } from './checkbox/default'
import { CheckboxGroupDefault } from './checkboxGroup/default'

export const exampleComponents = {
  // Breadcrumbs
  BreadcrumbsDefault,
  // Buttons
  ButtonDefault,
  // Checkbox
  CheckboxDefault,
  // CheckboxGroup
  CheckboxGroupDefault,
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
