import { type StoryObj, type Meta } from '@storybook/react'
import { Label } from 'ui/src'
import { Radio } from 'ui/src'
import { RadioGroup, RadioGroupContent } from 'ui/src'

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
