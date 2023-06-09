import { Label, Radio, RadioGroup, RadioGroupContent } from 'ui'

import { type Meta, type StoryObj } from '@storybook/react'

const meta: Meta<typeof RadioGroup> = {
  title: 'RadioGroup',
  component: RadioGroup,
}

export default meta

export const Default: StoryObj<typeof RadioGroup> = {
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
    <RadioGroup orientation={props.orientation}>
      <Label>Favorite sports</Label>
      <RadioGroupContent>
        <Radio value="dogs">Dog</Radio>
        <Radio value="cats">Cat</Radio>
        <Radio value="dragon">Dragon</Radio>
      </RadioGroupContent>
    </RadioGroup>
  ),
}
