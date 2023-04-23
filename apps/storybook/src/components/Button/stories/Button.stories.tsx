import { type Meta, type StoryObj } from '@storybook/react'
import { Button } from 'ui'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
}

export default meta

export const Default: StoryObj<typeof Button> = (props) => <Button {...props} />

Default.argTypes = {
  children: { type: 'string' },

  variant: {
    type: 'string',
    control: 'select',
    options: ['solid', 'destructive', 'outline', 'subtle', 'ghost', 'link'],
  },
  size: {
    type: 'string',
    control: 'select',
    options: ['xs', 'sm', 'md', 'lg'],
  },
  isDisabled: { type: 'boolean' },
}

Default.args = {
  children: 'Press Me',

  variant: undefined,
  isDisabled: false,
}
