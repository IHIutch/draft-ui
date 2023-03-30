import { RadioGroup } from '../../RadioGroup/src/RadioGroup'
import { Radio } from '../src/Radio'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

export default {
  title: 'Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>

export const Default: ComponentStory<typeof Radio> = (props) => (
  <RadioGroup isDisabled={props.isDisabled}>
    <Radio size={props.size} value="cat">
      Cat
    </Radio>
    <Radio size={props.size} value="dog">
      Dog
    </Radio>
  </RadioGroup>
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
