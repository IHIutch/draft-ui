import { DateField, DateInput, DateInputGroup, DateSegment } from 'ui'

export default function Sizes() {
  return (
    <div className="flex flex-col gap-4">
      <DateField>
        <DateInputGroup size="xs">
          <DateInput>
            {(segment) => <DateSegment segment={segment} />}
          </DateInput>
        </DateInputGroup>
      </DateField>
      <DateField>
        <DateInputGroup size="sm">
          <DateInput>
            {(segment) => <DateSegment segment={segment} />}
          </DateInput>
        </DateInputGroup>
      </DateField>
      <DateField>
        <DateInputGroup size="md">
          <DateInput>
            {(segment) => <DateSegment segment={segment} />}
          </DateInput>
        </DateInputGroup>
      </DateField>
      <DateField>
        <DateInputGroup size="lg">
          <DateInput>
            {(segment) => <DateSegment segment={segment} />}
          </DateInput>
        </DateInputGroup>
      </DateField>
    </div>
  )
}