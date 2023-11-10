import { Checkbox } from 'ui'

export default function Sizes() {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <Checkbox size="sm" value="cat-sm">
          Small Cat
        </Checkbox>
        <Checkbox size="sm" value="dog-sm">
          Small Dog
        </Checkbox>
        <Checkbox size="sm" value="reptile-sm" isIndeterminate>
          Small Reptile
        </Checkbox>
      </div>
      <div className="space-y-2">
        <Checkbox size="md" value="cat-md">
          Medium Cat
        </Checkbox>
        <Checkbox size="md" value="dog-md">
          Medium Dog
        </Checkbox>
        <Checkbox size="md" value="reptile-md" isIndeterminate>
          Medium Reptile
        </Checkbox>
      </div>
      <div className="space-y-2">
        <Checkbox size="lg" value="cat-lg">
          Large Cat
        </Checkbox>
        <Checkbox size="lg" value="dog-lg">
          Large Dog
        </Checkbox>
        <Checkbox size="lg" value="reptile-lg" isIndeterminate>
          Large Reptile
        </Checkbox>
      </div>
    </div>
  )
}