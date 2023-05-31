import {
  DateField,
  DateInput,
  DateInputContent,
  DateSegment,
  Label,
  TextFieldDescription,
  TextFieldErrorMessage,
} from 'ui'

import { type Meta, type StoryObj } from '@storybook/react'

const meta: Meta<typeof DateField> = {
  title: 'DateField',
  component: DateField,
}

export default meta

export const Default: StoryObj<typeof DateField> = {
  argTypes: {
    isDisabled: { type: 'boolean' },
    isReadOnly: { type: 'boolean' },
    isRequired: { type: 'boolean' },
    validationState: {
      type: 'string',
      control: 'radio',
      options: ['valid', 'invalid'],
    },
  },
  args: {
    isDisabled: false,
    isReadOnly: false,
    isRequired: false,
    validationState: 'valid',
  },
  render: (props) => (
    <DateField {...props}>
      <Label>Date Label</Label>
      <DateInputContent validationState={props.validationState}>
        <DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
      </DateInputContent>
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
  ),
}
