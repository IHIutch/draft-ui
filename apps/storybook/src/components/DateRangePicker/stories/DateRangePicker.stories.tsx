import { type Meta, type StoryObj } from '@storybook/react'
import { DateRangePicker, Group, RangeCalendar } from 'react-aria-components'
import {
  Button,
  CalendarCell,
  CalendarGrid,
  CalendarHeader,
  DateInput,
  DatePickerContent,
  DateSegment,
  Label,
} from 'ui/src'

const meta: Meta<typeof DateRangePicker> = {
  title: 'DateRangePicker',
  component: DateRangePicker,
}

export default meta

export const Default: StoryObj<typeof DateRangePicker> = (props) => (
  <DateRangePicker>
    <Label>Trip dates</Label>
    <Group>
      <DateInput slot="start">
        {(segment) => <DateSegment segment={segment} />}
      </DateInput>
      <span aria-hidden="true">–</span>
      <DateInput slot="end">
        {(segment) => <DateSegment segment={segment} />}
      </DateInput>
      <Button>▼</Button>
    </Group>
    <DatePickerContent>
      <RangeCalendar>
        <CalendarHeader>
          <Button slot="previous">◀</Button>
          {/* <Heading /> */}
          <h3>Calendar Heading</h3>
          <Button slot="next">▶</Button>
        </CalendarHeader>
        <CalendarGrid>{(date) => <CalendarCell date={date} />}</CalendarGrid>
      </RangeCalendar>
    </DatePickerContent>
  </DateRangePicker>
)

Default.argTypes = {
  className: { type: 'string' },
}

Default.args = {
  className: '',
}
