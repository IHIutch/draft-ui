import { type Meta, type StoryObj } from '@storybook/react'
import {
  DateField,
  DateInput,
  DateSegment,
  Label,
  TextFieldDescription,
  TextFieldErrorMessage,
} from 'ui'

const meta: Meta<typeof DateField> = {
  title: 'DateField',
  component: DateField,
}

export default meta

export const Default: StoryObj<typeof DateField> = (props) => (
  <DateField {...props}>
    <Label>Date Label</Label>
    <DateInput validationState={props.validationState}>
      {(segment) => <DateSegment segment={segment} />}
    </DateInput>
    {props.validationState === 'invalid' ? (
      <TextFieldErrorMessage>
        <span>This is an error message</span>
      </TextFieldErrorMessage>
    ) : (
      <TextFieldDescription>
        <span>This is a description</span>
      </TextFieldDescription>
    )}
  </DateField>
)

Default.argTypes = {
  isDisabled: { type: 'boolean' },
  isReadOnly: { type: 'boolean' },
  isRequired: { type: 'boolean' },
  validationState: {
    type: 'string',
    control: 'radio',
    options: ['valid', 'invalid'],
  },
}

Default.args = {
  isDisabled: false,
  isReadOnly: false,
  isRequired: false,
  validationState: 'valid',
}
