import { Switch, SwitchIndicator } from 'ui'

import { type Meta, type StoryObj } from '@storybook/react'

const meta: Meta<typeof Switch> = {
  title: 'Switch',
  component: Switch,
}

export default meta

export const Default: StoryObj<typeof Switch> = {
  argTypes: {},
  args: {},
  render: (props) => (
    <Switch {...props}>
      <SwitchIndicator />
      Low power mode
    </Switch>
  ),
}
