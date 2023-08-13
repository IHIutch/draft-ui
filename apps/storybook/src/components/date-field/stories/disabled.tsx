import { DateField, DateInput, DateInputGroup, DateSegment, Label } from 'ui'

export default function Disabled() {
  return (
    <DateField isDisabled>
      <Label>Date Label</Label>
      <DateInputGroup>
        <DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
      </DateInputGroup>
    </DateField>
  )
}
