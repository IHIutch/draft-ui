import { ChevronDown, ChevronUp } from 'lucide-react'
import { Group } from 'react-aria-components'
import { IconButton, Input, NumberField } from 'ui'

export default function Mobile() {
  return (
    <NumberField defaultValue={50}>
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
  )
}