import React from 'react'

import {
  DateField,
  DateInput,
  DateInputContent,
  DateSegment,
} from '@/components/ui'

export function DateFieldDefault() {
  return (
    <DateField className="w-56">
      <DateInputContent>
        <DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
      </DateInputContent>
    </DateField>
  )
}
