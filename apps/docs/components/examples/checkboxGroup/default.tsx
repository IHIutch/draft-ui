import { Checkbox, CheckboxGroup, CheckboxGroupContent } from '@/components/ui'

export function CheckboxGroupDefault() {
  return (
    <CheckboxGroup>
      <CheckboxGroupContent>
        <Checkbox value="soccer">Soccer</Checkbox>
        <Checkbox value="baseball">Baseball</Checkbox>
        <Checkbox value="basketball">Basketball</Checkbox>
      </CheckboxGroupContent>
    </CheckboxGroup>
  )
}
