import React from 'react'

import { ChevronDown, ChevronUp } from 'lucide-react'
import { Group } from 'react-aria-components'
import {
  Label,
  NumberDecrementStepper,
  NumberField,
  NumberIncrementStepper,
  NumberInput,
  NumberInputStepper,
} from 'ui'

export default function Default() {
  return (
    <NumberField defaultValue={50}>
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
  )
}