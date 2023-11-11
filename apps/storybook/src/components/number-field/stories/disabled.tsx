import React from 'react'

import { ChevronDown, ChevronUp } from 'lucide-react'
import {
  Label,
  NumberDecrementStepper,
  NumberField,
  NumberIncrementStepper,
  NumberInput,
  NumberInputGroup,
  NumberInputStepper,
} from 'ui'

export default function Default() {
  return (
    <NumberField defaultValue={50} isDisabled>
      <Label>Width</Label>
      <NumberInputGroup className="relative">
        <NumberInput />
        <NumberInputStepper>
          <NumberIncrementStepper>
            <ChevronUp size="1em" strokeWidth="3" />
          </NumberIncrementStepper>
          <NumberDecrementStepper>
            <ChevronDown size="1em" strokeWidth="3" />
          </NumberDecrementStepper>
        </NumberInputStepper>
      </NumberInputGroup>
    </NumberField>
  )
}
