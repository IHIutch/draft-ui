import { Input, TextField, TextFieldDescription } from '@/components/ui'

export function TextFieldDefault() {
  return (
    <TextField>
      <Input size="md" />
      <TextFieldDescription>
        <span>This is a description</span>
      </TextFieldDescription>
    </TextField>
  )
}
