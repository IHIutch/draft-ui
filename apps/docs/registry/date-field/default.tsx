import { DateField, DateInput, DateInputGroup, DateSegment, Label } from 'ui'

export default function Default() {
  return (
    <DateField>
      <Label>Date Label</Label>
      <DateInputGroup>
        <DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
      </DateInputGroup>
    </DateField>
  )
}