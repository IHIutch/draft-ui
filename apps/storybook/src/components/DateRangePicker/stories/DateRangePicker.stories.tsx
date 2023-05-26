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

import { type Meta, type StoryObj } from '@storybook/react'

const meta: Meta<typeof DateRangePicker> = {
  title: 'DateRangePicker',
  component: DateRangePicker,
}

export default meta

export const Default: StoryObj<typeof DateRangePicker> = (props) => (
  <DateRangePicker>
    <Label>Date Range</Label>
    <DateInputGroup className="pr-1">
      <DateInput slot="start">
        {(segment) => <DateSegment segment={segment} />}
      </DateInput>
      <span aria-hidden="true">–</span>
      <DateInput slot="end">
        {(segment) => <DateSegment segment={segment} />}
      </DateInput>
      <IconButton size="sm" variant="subtle" className="ml-auto shrink-0">
        <ChevronDown size="1em" strokeWidth="3" />
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

Default.argTypes = {}

Default.args = {}
