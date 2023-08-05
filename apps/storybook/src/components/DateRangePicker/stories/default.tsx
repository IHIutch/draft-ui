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
  Label,
  RangeCalendar,
} from 'ui'

export default function Default() {
  return (
    <DateRangePicker>
      <Label>Date Range</Label>
      <DateInputGroup className="relative">
        <DateInput slot="start">
          {(segment) => <DateSegment segment={segment} />}
        </DateInput>
        <span aria-hidden="true" className="px-2">
          –
        </span>
        <DateInput slot="end">
          {(segment) => <DateSegment segment={segment} />}
        </DateInput>
        <div className="absolute inset-y-0 right-0 flex items-center p-1">
          <IconButton size="sm" variant="subtle" className="ml-auto shrink-0">
            <ChevronDown size="16" strokeWidth="3" />
          </IconButton>
        </div>
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
