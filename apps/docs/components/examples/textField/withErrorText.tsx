import { Input, TextField, TextFieldErrorMessage } from '@/components/ui'

export function TextFieldWithErrorText() {
  return (
    <TextField>
      <Input size="md" />
      <TextFieldErrorMessage>
        <span>This is an error message</span>
      </TextFieldErrorMessage>
    </TextField>
  )
}
