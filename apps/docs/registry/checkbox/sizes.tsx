import { Checkbox, CheckboxGroup } from 'ui'

export default function Sizes() {
  return (
    <div className="flex flex-col gap-4">
      <CheckboxGroup>
        <Checkbox size="sm" value="cat">
          Small Cat
        </Checkbox>
        <Checkbox size="sm" value="dog">
          Small Dog
        </Checkbox>
      </CheckboxGroup>
      <CheckboxGroup>
        <Checkbox size="md" value="cat">
          Medium Cat
        </Checkbox>
        <Checkbox size="md" value="dog">
          Medium Dog
        </Checkbox>
      </CheckboxGroup>
      <CheckboxGroup>
        <Checkbox size="lg" value="cat">
          Large Cat
        </Checkbox>
        <Checkbox size="lg" value="dog">
          Large Dog
        </Checkbox>
      </CheckboxGroup>
    </div>
  )
}