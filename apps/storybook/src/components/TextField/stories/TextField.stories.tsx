import { type Meta, type StoryObj } from '@storybook/react'
import {
  Input,
  Label,
  TextField,
  TextFieldDescription,
  TextFieldErrorMessage,
} from 'ui'

const meta: Meta<typeof TextField> = {
  title: 'TextField',
  component: TextField,
}

export default meta

export const Default: StoryObj<typeof TextField> = (props) => (
  <TextField {...props}>
    <Label>Label</Label>
    <Input validationState={props.validationState} size="md" />
    {props.validationState === 'invalid' ? (
      <TextFieldErrorMessage>
        <span>This is an error message</span>
      </TextFieldErrorMessage>
    ) : (
      <TextFieldDescription>
        <span>This is a description</span>
      </TextFieldDescription>
    )}
  </TextField>
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
