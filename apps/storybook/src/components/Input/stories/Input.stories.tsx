import { type StoryObj, type Meta } from '@storybook/react'
import { Input } from 'ui'

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
}

export default meta

export const Default: StoryObj<typeof Input> = (props) => <Input {...props} />

Default.argTypes = {
  className: { type: 'string' },
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
  className: '',
  validationState: 'valid',
  size: 'md',
  placeholder: 'Placeholder...',
}
