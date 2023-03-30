import { Button } from '../../Button/src/Button'
import { Input } from '../../Input/src/Input'
import { Label } from '../../Label/src/Label'
import {
  NumberDecrementStepper,
  NumberField,
  NumberIncrementStepper,
  NumberInput,
  NumberInputStepper,
} from '../src/NumberField'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Group } from 'react-aria-components/src/Group'

export default {
  title: 'NumberField',
  component: NumberField,
} as ComponentMeta<typeof NumberField>

export const Default: ComponentStory<typeof NumberField> = (props) => (
  <NumberField
    defaultValue={50}
    minValue={props.minValue}
    maxValue={props.maxValue}
    step={props.step}
  >
    <Label>Width</Label>
    <Group className="relative">
      <NumberInput />
      <NumberInputStepper>
        <NumberIncrementStepper>▲</NumberIncrementStepper>
        <NumberDecrementStepper>▼</NumberDecrementStepper>
      </NumberInputStepper>
    </Group>
  </NumberField>
)

Default.argTypes = {
  className: { type: 'string' },
  minValue: { type: 'number' },
  maxValue: { type: 'number' },
  step: { type: 'number' },
}

Default.args = {
  className: '',
  minValue: 0,
  maxValue: 100,
  step: 1,
}

export const Mobile: ComponentStory<typeof NumberField> = (props) => (
  <NumberField
    defaultValue={50}
    minValue={props.minValue}
    maxValue={props.maxValue}
    step={props.step}
  >
    <Group className="flex gap-1">
      <Button slot="decrement">▲</Button>
      <Input />
      <Button slot="increment">▼</Button>
    </Group>
  </NumberField>
)

Mobile.argTypes = {
  className: { type: 'string' },
  minValue: { type: 'number' },
  maxValue: { type: 'number' },
  step: { type: 'number' },
}

Mobile.args = {
  className: '',
  minValue: 0,
  maxValue: 100,
  step: 1,
}
