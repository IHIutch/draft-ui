import { type Meta, type StoryObj } from '@storybook/react'
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
} from 'ui'

const meta: Meta<typeof Calendar> = {
  title: 'Calendar',
  component: Calendar,
}

export default meta

export const Default: StoryObj<typeof Calendar> = (props) => (
  <Calendar {...props}>
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
)

Default.argTypes = {}

Default.args = {}
