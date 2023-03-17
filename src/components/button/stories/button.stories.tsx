import { Button } from '../src/Button'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>

export const Default: ComponentStory<typeof Button> = (props) => (
  <Button {...props} />
)

Default.argTypes = {
  children: { type: 'string' },
  className: { type: 'string' },
  variant: {
    type: 'string',
    control: 'select',
    options: ['solid', 'destructive', 'outline', 'subtle', 'ghost', 'link'],
  },
  size: {
    type: 'string',
    control: 'select',
    options: ['sm', 'md', 'lg'],
  },
  isDisabled: { type: 'boolean' },
}

Default.args = {
  children: 'Press Me',
  className: '',
  variant: undefined,
  isDisabled: false,
}
