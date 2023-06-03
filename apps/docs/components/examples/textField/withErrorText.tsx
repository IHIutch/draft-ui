import { Input, TextField, TextFieldErrorMessage } from '@/components/ui'

export function TextFieldWithErrorText() {
  return (
    <TextField>
      <Input size="md" />
      <TextFieldErrorMessage>This is an error message</TextFieldErrorMessage>
    </TextField>
  )
}
