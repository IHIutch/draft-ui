import { type Meta, type StoryObj } from '@storybook/react'
import { Group } from 'react-aria-components'
import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarHeader,
  DateInput,
  DatePicker,
  DatePickerContent,
  DateSegment,
  Label,
} from 'ui/src'

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
      <Button>▼</Button>
    </Group>
    <DatePickerContent>
      <Calendar>
        <CalendarHeader>
          <Button slot="previous">◀</Button>
          {/* <Heading /> */}
          <h3>Calendar Heading</h3>
          <Button slot="next">▶</Button>
        </CalendarHeader>
        <CalendarGrid>{(date) => <CalendarCell date={date} />}</CalendarGrid>
      </Calendar>
    </DatePickerContent>
  </DatePicker>
)

Default.argTypes = {
  className: { type: 'string' },
}

Default.args = {
  className: '',
}
