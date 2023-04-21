import { type Meta, type StoryObj } from '@storybook/react'
import { Group } from 'react-aria-components'
import {
  Button,
  Input,
  Label,
  NumberDecrementStepper,
  NumberField,
  NumberIncrementStepper,
  NumberInput,
  NumberInputStepper,
} from 'ui/src'

const meta: Meta<typeof NumberField> = {
  title: 'NumberField',
  component: NumberField,
}

export default meta

export const Default: StoryObj<typeof NumberField> = (props) => (
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

export const Mobile: StoryObj<typeof NumberField> = (props) => (
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
