import { Radio, RadioGroup } from 'ui'

export default function Default() {
  return (
    <RadioGroup defaultValue="dog">
      <Radio value="cat">Cat</Radio>
      <Radio value="dog" isDisabled>
        Dog
      </Radio>
    </RadioGroup>
  )
}