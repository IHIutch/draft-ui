import { AlertCircle } from 'lucide-react'
import { IconButton } from 'ui'

import { type Meta, type StoryObj } from '@storybook/react'

const meta: Meta<typeof IconButton> = {
  title: 'IconButton',
  component: IconButton,
}

export default meta

export const Default: StoryObj<typeof IconButton> = (props) => (
  <IconButton aria-label="alert" {...props}>
    <AlertCircle size="1em" />
  </IconButton>
)

Default.argTypes = {
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
  variant: undefined,
  isDisabled: false,
}
