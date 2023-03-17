import { Input } from '../src/Input'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>

export const Default: ComponentStory<typeof Input> = (props) => (
  <Input {...props} />
)

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
    options: ['sm', 'md', 'lg'],
  },
}

Default.args = {
  className: '',
  validationState: 'valid',
  size: 'md',
}
