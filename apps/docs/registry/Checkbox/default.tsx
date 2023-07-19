import { Checkbox, CheckboxGroup } from 'ui'

export default function Default() {
  return (
    <CheckboxGroup>
      <Checkbox value="cat">Cat</Checkbox>
      <Checkbox value="dog">Dog</Checkbox>
    </CheckboxGroup>
  )
}