import { Radio, RadioGroup, RadioGroupContent } from '@/components/ui'

export function RadioGroupDefault() {
  return (
    <RadioGroup>
      <RadioGroupContent>
        <Radio value="dogs">Dog</Radio>
        <Radio value="cats">Cat</Radio>
        <Radio value="dragon">Dragon</Radio>
      </RadioGroupContent>
    </RadioGroup>
  )
}
