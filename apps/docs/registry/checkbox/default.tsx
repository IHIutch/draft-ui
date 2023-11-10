import { Checkbox } from 'ui'

export default function Default() {
  return (
    <div className="space-y-4">
      <Checkbox value="cat">Cat</Checkbox>
      <Checkbox value="dog" defaultSelected>
        Dog
      </Checkbox>
      <Checkbox value="reptile" isIndeterminate>
        Reptile
      </Checkbox>
    </div>
  )
}