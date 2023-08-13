import { Checkbox, CheckboxGroup, CheckboxGroupContent, Label } from 'ui'

export default function Horizontal() {
  return (
    <CheckboxGroup orientation="horizontal">
      <Label>Favorite sports</Label>
      <CheckboxGroupContent>
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
        <Checkbox value="basketball">Basketball</Checkbox>
      </CheckboxGroupContent>
    </CheckboxGroup>
  )
}
