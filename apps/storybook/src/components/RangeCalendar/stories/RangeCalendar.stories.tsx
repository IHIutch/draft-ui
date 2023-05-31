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
  RangeCalendar,
} from 'ui'

import { type Meta, type StoryObj } from '@storybook/react'

const meta: Meta<typeof RangeCalendar> = {
  title: 'RangeCalendar',
  component: RangeCalendar,
}

export default meta

export const Default: StoryObj<typeof RangeCalendar> = {
  argTypes: {},
  args: {},
  render: (props) => (
    <RangeCalendar {...props} aria-label="Trip dates">
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
  ),
}
