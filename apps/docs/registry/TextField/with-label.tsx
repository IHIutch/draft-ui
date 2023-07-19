import { Input, Label, TextField } from 'ui'

export default function withError() {
  return (
    <TextField>
      <Label>Label</Label>
      <Input size="md" />
    </TextField>
  )
}