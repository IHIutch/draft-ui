import { type Meta, type StoryObj } from '@storybook/react'
import { Checkbox, CheckboxGroup } from 'ui'

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
}

export default meta

export const Default: StoryObj<typeof Checkbox> = (props) => (
  <CheckboxGroup isDisabled={props.isDisabled}>
    <Checkbox size={props.size} value="cat">
      Cat
    </Checkbox>
    <Checkbox size={props.size} value="dog">
      Dog
    </Checkbox>
  </CheckboxGroup>
)

Default.argTypes = {
  size: {
    type: 'string',
    control: 'radio',
    options: ['sm', 'md', 'lg'],
  },
  isDisabled: { type: 'boolean' },
}

Default.args = {
  size: 'md',
  isDisabled: false,
}
