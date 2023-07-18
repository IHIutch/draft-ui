import { ChevronDown } from 'lucide-react'
import {
  Calendar,
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
  DatePicker,
  DatePickerContent,
  DateSegment,
  IconButton,
  Label,
} from 'ui'

export default function Default() {
  return (
    <DatePicker>
      <Label>Date</Label>
      <DateInputGroup className="pr-1">
        <DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
        <IconButton size="sm" variant="subtle" className="ml-auto shrink-0">
          <ChevronDown size="16" strokeWidth="3" />
        </IconButton>
      </DateInputGroup>
      <DatePickerContent>
        <Calendar>
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
        </Calendar>
      </DatePickerContent>
    </DatePicker>
  )
}
