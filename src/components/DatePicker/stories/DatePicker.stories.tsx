import { Button } from '../../Button/src/button'
import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarHeader,
} from '../../Calendar/src/Calendar'
import { DateInput, DateSegment } from '../../DateField/src/DateField'
import { Label } from '../../Label/src/Label'
import { DatePicker, DatePickerContent } from '../src/DatePicker'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Group } from 'react-aria-components'

export default {
  title: 'DatePicker',
  component: DatePicker,
} as ComponentMeta<typeof DatePicker>

export const Default: ComponentStory<typeof DatePicker> = (props) => (
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
