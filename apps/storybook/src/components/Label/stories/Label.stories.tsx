import { Label } from 'ui'

import { type Meta, type StoryObj } from '@storybook/react'

const meta: Meta<typeof Label> = {
  title: 'Label',
  component: Label,
}

export default meta

export const Default: StoryObj<typeof Label> = {
  argTypes: {
    children: { type: 'string' },
  },
  args: {
    children: 'Label',
  },
  render: (props) => <Label {...props} />,
}
