import { Checkbox } from '../src/Checkbox'
import { type StoryObj, type Meta } from '@storybook/react'

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
