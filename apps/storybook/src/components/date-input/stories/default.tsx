import { DateField, DateInput, DateInputGroup, DateSegment } from 'ui'

export default function Default() {
  return (
    <DateField>
      <DateInputGroup>
        <DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
      </DateInputGroup>
    </DateField>
  )
}
