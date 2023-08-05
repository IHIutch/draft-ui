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
      <DateInputGroup className="relative">
        <DateInput className="pr-1">
          {(segment) => <DateSegment segment={segment} />}
        </DateInput>
        <div className="absolute inset-y-0 right-0 flex items-center p-1">
          <IconButton size="sm" variant="subtle" className="ml-auto shrink-0">
            <ChevronDown size="16" strokeWidth="3" />
          </IconButton>
        </div>
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