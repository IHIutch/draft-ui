import { type Meta, type StoryObj } from '@storybook/react'
import { Checkbox } from 'ui/src'

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
}

export default meta

export const Default: StoryObj<typeof Checkbox> = (props) => (
  <Checkbox>Unsubscribe</Checkbox>
)

Default.argTypes = {
  className: { type: 'string' },
}

Default.args = {
  className: '',
}
