import { Input } from '../../Input/src/Input'
import { Label } from '../../Label/src/Label'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Text } from 'react-aria-components/src/Text'
import { TextField } from 'react-aria-components/src/TextField'

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
      <Text slot="errorMessage" className="mt-2 text-sm text-red-500">
        This is an error message
      </Text>
    ) : (
      <Text slot="description" className="mt-2 text-sm text-slate-500">
        This is a description
      </Text>
    )}
  </TextField>
)
