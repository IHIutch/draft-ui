import { Button, Tooltip, TooltipContent } from 'ui'

import { type Meta, type StoryObj } from '@storybook/react'

const meta: Meta<typeof Tooltip> = {
  title: 'Tooltip',
  component: Tooltip,
}

export default meta

export const Default: StoryObj<typeof Tooltip> = (props) => (
  <div className="flex h-screen w-full items-center justify-center">
    <Tooltip>
      <Button size="sm" variant="outline">
        Hover Me
      </Button>
      <TooltipContent placement={props.placement}>Hello!</TooltipContent>
    </Tooltip>
  </div>
)

Default.argTypes = {
  placement: {
    type: 'string',
    control: 'select',
    options: [
      'bottom',
      'bottom left',
      'bottom right',
      'bottom start',
      'bottom end',
      'top',
      'top left',
      'top right',
      'top start',
      'top end',
      'left',
      'left top',
      'left bottom',
      'start',
      'start top',
      'start bottom',
      'right',
      'right top',
      'right bottom',
      'end',
      'end top',
      'end bottom',
    ],
  },
}

Default.args = {
  placement: 'bottom',
}
