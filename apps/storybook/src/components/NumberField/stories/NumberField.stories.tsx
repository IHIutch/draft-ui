import { ChevronDown, ChevronUp } from 'lucide-react'
import { Group } from 'react-aria-components'
import {
  IconButton,
  Input,
  Label,
  NumberDecrementStepper,
  NumberField,
  NumberIncrementStepper,
  NumberInput,
  NumberInputStepper,
} from 'ui'

import { type Meta, type StoryObj } from '@storybook/react'

const meta: Meta<typeof NumberField> = {
  title: 'NumberField',
  component: NumberField,
}

export default meta

export const Default: StoryObj<typeof NumberField> = {
  argTypes: {
    minValue: { type: 'number' },
    maxValue: { type: 'number' },
    step: { type: 'number' },
  },
  args: {
    minValue: 0,
    maxValue: 100,
    step: 1,
  },
  render: (props) => (
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
          <NumberIncrementStepper>
            <ChevronUp size="1em" strokeWidth="3" />
          </NumberIncrementStepper>
          <NumberDecrementStepper>
            <ChevronDown size="16" strokeWidth="3" />
          </NumberDecrementStepper>
        </NumberInputStepper>
      </Group>
    </NumberField>
  ),
}

export const Mobile: StoryObj<typeof NumberField> = {
  argTypes: {
    minValue: { type: 'number' },
    maxValue: { type: 'number' },
    step: { type: 'number' },
  },
  args: {
    minValue: 0,
    maxValue: 100,
    step: 1,
  },
  render: (props) => (
    <NumberField
      defaultValue={50}
      minValue={props.minValue}
      maxValue={props.maxValue}
      step={props.step}
    >
      <Group className="flex gap-1">
        <IconButton className="shrink-0" slot="decrement">
          <ChevronUp size="16" strokeWidth="3" />
        </IconButton>
        <Input />
        <IconButton className="shrink-0" slot="increment">
          <ChevronDown size="16" strokeWidth="3" />
        </IconButton>
      </Group>
    </NumberField>
  ),
}
