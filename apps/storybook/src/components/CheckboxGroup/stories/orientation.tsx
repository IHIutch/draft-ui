import { Checkbox, CheckboxGroup, CheckboxGroupContent, Label } from 'ui'

export default function Orientation() {
  return (
    <div className="flex flex-col gap-4">
      <CheckboxGroup orientation="vertical">
        <Label>Favorite sports</Label>
        <CheckboxGroupContent>
          <Checkbox value="soccer">Soccer</Checkbox>
          <Checkbox value="baseball">Baseball</Checkbox>
          <Checkbox value="basketball">Basketball</Checkbox>
        </CheckboxGroupContent>
      </CheckboxGroup>
      <CheckboxGroup orientation="horizontal">
        <Label>Favorite sports</Label>
        <CheckboxGroupContent>
          <Checkbox value="soccer">Soccer</Checkbox>
          <Checkbox value="baseball">Baseball</Checkbox>
          <Checkbox value="basketball">Basketball</Checkbox>
        </CheckboxGroupContent>
      </CheckboxGroup>
    </div>
  )
}
