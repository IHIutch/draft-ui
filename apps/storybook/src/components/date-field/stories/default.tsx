import { DateField, DateInput, DateInputGroup, DateSegment, Label } from 'ui'

export default function Default() {
  return (
    <DateField validationState="invalid">
      <Label>Date Label</Label>
      <DateInputGroup validationState="invalid">
        <DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
      </DateInputGroup>
    </DateField>
  )
}
