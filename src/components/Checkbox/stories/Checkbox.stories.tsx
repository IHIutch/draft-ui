import { Checkbox } from '../src/Checkbox'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

export default {
  title: 'Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

export const Default: ComponentStory<typeof Checkbox> = (props) => (
  <Checkbox>Unsubscribe</Checkbox>
)

Default.argTypes = {
  className: { type: 'string' },
}

Default.args = {
  className: '',
}
