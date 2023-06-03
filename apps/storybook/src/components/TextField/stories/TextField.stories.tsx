import {
  Input,
  Label,
  TextField,
  TextFieldDescription,
  TextFieldErrorMessage,
} from 'ui'

import { type Meta, type StoryObj } from '@storybook/react'

const meta: Meta<typeof TextField> = {
  title: 'TextField',
  component: TextField,
}

export default meta

export const Default: StoryObj<typeof TextField> = {
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
    <TextField {...props}>
      <Label>Label</Label>
      <Input validationState={props.validationState} size="md" />
      {props.validationState === 'invalid' ? (
        <TextFieldErrorMessage>This is an error message</TextFieldErrorMessage>
      ) : (
        <TextFieldDescription>This is a description</TextFieldDescription>
      )}
    </TextField>
  ),
}
