import { type Meta, type StoryObj } from '@storybook/react'
import { Group } from 'react-aria-components'
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
  DatePicker,
  DatePickerContent,
  DateSegment,
  IconButton,
  Label,
} from 'ui'

const meta: Meta<typeof DatePicker> = {
  title: 'DatePicker',
  component: DatePicker,
}

export default meta

export const Default: StoryObj<typeof DatePicker> = (props) => (
  <DatePicker>
    <Label>Date</Label>
    <Group>
      <DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
      <IconButton>▼</IconButton>
    </Group>
    <DatePickerContent>
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
    </DatePickerContent>
  </DatePicker>
)

Default.argTypes = {}

Default.args = {}
