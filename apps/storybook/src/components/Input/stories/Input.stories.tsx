import { type Meta, type StoryObj } from '@storybook/react'
import { Input } from 'ui'

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
}

export default meta

export const Default: StoryObj<typeof Input> = (props) => <Input {...props} />

Default.argTypes = {
  validationState: {
    type: 'string',
    control: 'radio',
    options: ['valid', 'invalid'],
  },
  size: {
    type: 'string',
    control: 'select',
    options: ['xs', 'sm', 'md', 'lg'],
  },
  placeholder: {
    type: 'string',
  },
}

Default.args = {
  validationState: 'valid',
  size: 'md',
  placeholder: 'Placeholder...',
}
