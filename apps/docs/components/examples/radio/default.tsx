import { Radio, RadioGroup } from '@/components/ui'

export function RadioDefault() {
  return (
    <RadioGroup>
      <Radio value="cat">Cat</Radio>
      <Radio value="dog">Dog</Radio>
    </RadioGroup>
  )
}
