import { Radio, RadioGroup } from 'ui'

export default function Sizes() {
  return (
    <div className="space-y-4">
      <RadioGroup>
        <Radio size="sm" value="sm-cat">
          Small Cat
        </Radio>
        <Radio size="sm" value="sm-dog">
          Small Dog
        </Radio>
      </RadioGroup>
      <RadioGroup>
        <Radio size="md" value="md-cat">
          Medium Cat
        </Radio>
        <Radio size="md" value="md-dog">
          Medium Dog
        </Radio>
      </RadioGroup>
      <RadioGroup>
        <Radio size="lg" value="lg-cat">
          Large Cat
        </Radio>
        <Radio size="lg" value="lg-dog">
          Large Dog
        </Radio>
      </RadioGroup>
    </div>
  )
}
