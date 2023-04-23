import { type Meta, type StoryObj } from '@storybook/react'
import { Label, Radio, RadioGroup, RadioGroupContent } from 'ui'

const meta: Meta<typeof RadioGroup> = {
  title: 'RadioGroup',
  component: RadioGroup,
}

export default meta

export const Default: StoryObj<typeof RadioGroup> = (props) => (
  <RadioGroup orientation={props.orientation}>
    <Label>Favorite sports</Label>
    <RadioGroupContent>
      <Radio value="dogs">Dog</Radio>
      <Radio value="cats">Cat</Radio>
      <Radio value="dragon">Dragon</Radio>
    </RadioGroupContent>
  </RadioGroup>
)

Default.argTypes = {
  orientation: {
    type: 'string',
    control: 'radio',
    options: ['vertical', 'horizontal'],
  },
}

Default.args = {
  orientation: 'vertical',
}
