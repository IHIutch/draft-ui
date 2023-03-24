import { Input } from '../../Input/src/Input'
import { Label } from '../../Label/src/Label'
import {
  TextField,
  TextFieldDescription,
  TextFieldErrorMessage,
} from '../src/TextField'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

export default {
  title: 'TextField',
  component: TextField,
  argTypes: {
    className: { type: 'string' },
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
    className: '',
    isDisabled: false,
    isReadOnly: false,
    isRequired: false,
    validationState: 'valid',
  },
  subcomponents: { Label, Input },
} as ComponentMeta<typeof TextField>

export const Default: ComponentStory<typeof TextField> = (props) => (
  <TextField {...props}>
    <Label>Label</Label>
    <Input validationState={props.validationState} size="md" />
    {props.validationState === 'invalid' ? (
      <TextFieldErrorMessage slot="errorMessage">
        This is an error message
      </TextFieldErrorMessage>
    ) : (
      <TextFieldDescription slot="description">
        This is a description
      </TextFieldDescription>
    )}
  </TextField>
)
