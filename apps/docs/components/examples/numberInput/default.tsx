'use client'

import { ChevronDown, ChevronUp } from 'lucide-react'
import { Group } from 'react-aria-components'

import {
  NumberDecrementStepper,
  NumberField,
  NumberIncrementStepper,
  NumberInput,
  NumberInputStepper,
} from '@/components/ui'

export function NumberInputDefault() {
  return (
    <NumberField defaultValue={50} minValue={0} maxValue={100}>
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
