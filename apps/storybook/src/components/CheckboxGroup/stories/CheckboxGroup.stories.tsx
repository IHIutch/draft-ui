import { Checkbox, CheckboxGroup, CheckboxGroupContent, Label } from 'ui'

import { type Meta, type StoryObj } from '@storybook/react'

const meta: Meta<typeof CheckboxGroup> = {
  title: 'CheckboxGroup',
  component: CheckboxGroup,
}

export default meta

export const Default: StoryObj<typeof CheckboxGroup> = {
  argTypes: {
    orientation: {
      type: 'string',
      control: 'radio',
      options: ['vertical', 'horizontal'],
    },
  },
  args: {
    orientation: 'vertical',
  },
  render: (props) => (
    <CheckboxGroup orientation={props.orientation}>
      <Label>Favorite sports</Label>
      <CheckboxGroupContent>
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
        <Checkbox value="basketball">Basketball</Checkbox>
      </CheckboxGroupContent>
    </CheckboxGroup>
  ),
}
