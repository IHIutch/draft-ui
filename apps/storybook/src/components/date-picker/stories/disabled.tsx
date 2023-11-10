import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react'
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
  DatePickerButton,
  DatePickerContent,
  DateSegment,
  iconButtonVariants,
  Label,
} from 'ui'

export default function Default() {
  return (
    <DatePicker isDisabled>
      <Label>Date</Label>
      <DateInputGroup className="relative pr-10">
        <DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
        <div className="absolute inset-y-0 right-0 flex items-center p-1">
          <DatePickerButton
            className={iconButtonVariants({
              variant: 'subtle',
              size: 'sm',
              className: 'ml-auto shrink-0',
            })}
          >
            <ChevronDown size="16" strokeWidth="3" />
          </DatePickerButton>
        </div>
      </DateInputGroup>
      <DatePickerContent>
        <Calendar>
          <CalendarHeader>
            <CalendarPrevButton
              className={iconButtonVariants({
                variant: 'outline',
                size: 'sm',
              })}
            >
              <ChevronLeft size="16" strokeWidth="3" />
            </CalendarPrevButton>
            <CalendarHeading />
            <CalendarNextButton
              className={iconButtonVariants({
                variant: 'outline',
                size: 'sm',
              })}
            >
              <ChevronRight size="16" strokeWidth="3" />
            </CalendarNextButton>
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
