import { Button } from '../../Button/src/Button'
import {
  CalendarCell,
  CalendarGrid,
  CalendarHeader,
} from '../../Calendar/src/Calendar'
import { Input } from '../../Input/src/Input'
import { Label } from '../../Label/src/Label'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { RangeCalendar } from 'react-aria-components/src/Calendar'
import { DateRangePicker } from 'react-aria-components/src/DatePicker'
import { Dialog } from 'react-aria-components/src/Dialog'
import { Popover } from 'react-aria-components/src/Popover'

export default {
  title: 'DateRangePicker',
  component: DateRangePicker,
} as ComponentMeta<typeof DateRangePicker>

export const Default: ComponentStory<typeof DateRangePicker> = (props) => (
  <DateRangePicker>
    <Label>Date Range</Label>
    <div>
      <Input />
      <Button>▼</Button>
    </div>
    <Popover>
      <Dialog>
        <RangeCalendar>
          <CalendarHeader>
            <Button slot="previous">◀</Button>
            {/* <Heading /> */}
            <h3>Calendar Heading</h3>
            <Button slot="next">▶</Button>
          </CalendarHeader>
          <CalendarGrid>{(date) => <CalendarCell date={date} />}</CalendarGrid>
        </RangeCalendar>
      </Dialog>
    </Popover>
  </DateRangePicker>
)

Default.argTypes = {
  className: { type: 'string' },
}

Default.args = {
  className: '',
}
