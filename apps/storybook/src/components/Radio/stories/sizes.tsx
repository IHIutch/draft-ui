import { Radio, RadioGroup } from 'ui'

export default function Sizes() {
  return (
    <div className="flex flex-col gap-4">
      <RadioGroup>
        <Radio size="sm" value="cat">
          Small Cat
        </Radio>
        <Radio size="sm" value="dog">
          Small Dog
        </Radio>
      </RadioGroup>
      <RadioGroup>
        <Radio size="md" value="cat">
          Medium Cat
        </Radio>
        <Radio size="md" value="dog">
          Medium Dog
        </Radio>
      </RadioGroup>
      <RadioGroup>
        <Radio size="lg" value="cat">
          Large Cat
        </Radio>
        <Radio size="lg" value="dog">
          Large Dog
        </Radio>
      </RadioGroup>
    </div>
  )
}
