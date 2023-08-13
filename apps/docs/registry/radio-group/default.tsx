import { Label, Radio, RadioGroup, RadioGroupContent } from 'ui'

export default function Default() {
  return (
    <RadioGroup>
      <Label>Favorite animal</Label>
      <RadioGroupContent>
        <Radio value="dog">Dog</Radio>
        <Radio value="cat">Cat</Radio>
        <Radio value="dragon">Dragon</Radio>
      </RadioGroupContent>
    </RadioGroup>
  )
}