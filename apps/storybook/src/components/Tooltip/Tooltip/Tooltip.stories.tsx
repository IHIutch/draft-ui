import { type StoryObj, type Meta } from '@storybook/react'
import { Button, Tooltip, TooltipTrigger } from 'ui/src'



const meta: Meta<typeof Tooltip> = {
  title: 'Tooltip',
  component: Tooltip,
}

export default meta

export const Default: StoryObj<typeof Tooltip> = (props) => (
  <TooltipTrigger>
    Hover Me
    <Tooltip>
      Hello!
    </Tooltip>
  </TooltipTrigger>
)

Default.argTypes = {}

Default.args = {}