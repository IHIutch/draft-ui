import { type StoryObj, type Meta } from '@storybook/react'
import { Switch } from 'ui/src'



const meta: Meta<typeof Switch> = {
  title: 'Switch',
  component: Switch,
}

export default meta

export const Default: StoryObj<typeof Switch> = (props) => (
  <Switch>
    Low power mode
  </Switch>
)

Default.argTypes = {}

Default.args = {}