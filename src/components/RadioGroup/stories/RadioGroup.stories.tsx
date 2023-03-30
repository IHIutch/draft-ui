import { Label } from '../../Label/src/Label'
import { Radio } from '../../Radio/src/Radio'
import { RadioGroup, RadioGroupContent } from '../src/RadioGroup'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

export default {
  title: 'RadioGroup',
  component: RadioGroup,
} as ComponentMeta<typeof RadioGroup>

export const Default: ComponentStory<typeof RadioGroup> = (props) => (
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
