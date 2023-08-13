import { Input, Label, TextField, TextFieldErrorMessage } from 'ui'

export default function withError() {
  return (
    <TextField validationState="invalid">
      <Label>Label</Label>
      <Input size="md" />
      <TextFieldErrorMessage>This is an error message</TextFieldErrorMessage>
    </TextField>
  )
}
