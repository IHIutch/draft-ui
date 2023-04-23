import { type Meta, type StoryObj } from '@storybook/react'
import { Button, Tooltip, TooltipTrigger } from 'ui'

const meta: Meta<typeof Tooltip> = {
  title: 'Tooltip',
  component: Tooltip,
}

export default meta

export const Default: StoryObj<typeof Tooltip> = (props) => (
  <TooltipTrigger>
    <Button>Hover Me</Button>
    <Tooltip>Hello!</Tooltip>
  </TooltipTrigger>
)

Default.argTypes = {}

Default.args = {}
