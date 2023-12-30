import { ChevronDown, ChevronUp } from 'lucide-react'
import { IconButton, Input, Label, NumberField, NumberInputGroup } from 'ui'

export default function Mobile() {
  return (
    <NumberField defaultValue={50}>
      <Label>Width</Label>
      <NumberInputGroup className="flex gap-1">
        <IconButton className="shrink-0" slot="decrement">
          <ChevronDown size="16" strokeWidth="3" />
        </IconButton>
        <Input />
        <IconButton className="shrink-0" slot="increment">
          <ChevronUp size="16" strokeWidth="3" />
        </IconButton>
      </NumberInputGroup>
    </NumberField>
  )
}
