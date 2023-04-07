import { Button } from '../../Button/src/Button'
import {
  CalendarCell,
  CalendarGrid,
  CalendarHeader,
} from '../../Calendar/src/Calendar'
import { DateInput, DateSegment } from '../../DateField/src/DateField'
import { Label } from '../../Label/src/Label'
import { DatePickerContent } from '../src/DateRangePicker'
import { type StoryObj, type Meta } from '@storybook/react'
import { RangeCalendar } from 'react-aria-components'
import { DateRangePicker } from 'react-aria-components'
import { Group } from 'react-aria-components'

const meta: Meta<typeof DateField> = {
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
