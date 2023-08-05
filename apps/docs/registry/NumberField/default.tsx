import { Input, Label, NumberField } from 'ui'

export default function Default() {
  return (
    <NumberField defaultValue={50}>
      <Label>Width</Label>
      <Input />
    </NumberField>
  )
}