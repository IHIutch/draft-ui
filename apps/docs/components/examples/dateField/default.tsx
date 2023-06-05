import { DateField, DateInput, DateSegment } from '@/components/ui'

export function DateFieldDefault() {
  return (
    <DateField className="w-56">
      <DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
    </DateField>
  )
}
