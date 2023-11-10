import { Checkbox } from 'ui'

export default function Sizes() {
  return (
    <div className="space-y-4">
      <Checkbox value="cat">Medium Cat</Checkbox>
      <Checkbox value="dog" isDisabled>
        Medium Dog
      </Checkbox>
      <Checkbox value="reptile" defaultSelected isDisabled>
        Medium Reptile
      </Checkbox>
    </div>
  )
}