import { ChevronDown } from 'lucide-react'

import {
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeader,
  CalendarHeaderCell,
  CalendarHeading,
  CalendarNextButton,
  CalendarPrevButton,
  DateInput,
  DateInputGroup,
  DatePickerContent,
  DateRangePicker,
  DateSegment,
  IconButton,
  RangeCalendar,
} from '@/components/ui'

export function DateRangePickerDefault() {
  return (
    <DateRangePicker className="w-full">
      <DateInputGroup className="pr-1">
        <DateInput slot="start">
          {(segment) => <DateSegment segment={segment} />}
        </DateInput>
        <span aria-hidden="true" className="px-2">
          –
        </span>
        <DateInput slot="end">
          {(segment) => <DateSegment segment={segment} />}
        </DateInput>
        <IconButton size="sm" variant="subtle" className="ml-auto shrink-0">
          <ChevronDown size="16" strokeWidth="3" />
        </IconButton>
      </DateInputGroup>
      <DatePickerContent>
        <RangeCalendar>
          <CalendarHeader>
            <CalendarPrevButton />
            <CalendarHeading />
            <CalendarNextButton />
          </CalendarHeader>
          <CalendarGrid>
            <CalendarGridHeader>
              {(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}
            </CalendarGridHeader>
            <CalendarGridBody>
              {(date) => <CalendarCell date={date} />}
            </CalendarGridBody>
          </CalendarGrid>
        </RangeCalendar>
      </DatePickerContent>
    </DateRangePicker>
  )
}
