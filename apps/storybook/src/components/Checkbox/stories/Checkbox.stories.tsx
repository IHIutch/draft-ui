import { Checkbox, CheckboxGroup } from 'ui'

import { type Meta, type StoryObj } from '@storybook/react'

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  component: Checkbox,
}

export default meta

export const Default: StoryObj<typeof Checkbox> = {
  argTypes: {
    size: {
      type: 'string',
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    isDisabled: { type: 'boolean' },
  },
  args: {
    size: 'md',
    isDisabled: false,
  },
  render: (props) => (
    <CheckboxGroup isDisabled={props.isDisabled}>
      <Checkbox size={props.size} value="cat">
        Cat
      </Checkbox>
      <Checkbox size={props.size} value="dog">
        Dog
      </Checkbox>
    </CheckboxGroup>
  ),
}
