import { Button } from '../../Button/src/Button'
import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarHeader,
} from '../../Calendar/src/Calendar'
import { Input } from '../../Input/src/Input'
import { Label } from '../../Label/src/Label'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { DatePicker } from 'react-aria-components/src/DatePicker'
import { Dialog } from 'react-aria-components/src/Dialog'
import { Popover } from 'react-aria-components/src/Popover'

export default {
  title: 'DatePicker',
  component: DatePicker,
} as ComponentMeta<typeof DatePicker>

export const Default: ComponentStory<typeof DatePicker> = (props) => (
  <DatePicker>
    <Label>Date</Label>
    <div>
      <Input />
      <Button>▼</Button>
    </div>
    <Popover>
      <Dialog>
        <Calendar>
          <CalendarHeader>
            <Button slot="previous">◀</Button>
            {/* <Heading /> */}
            <h3>Calendar Heading</h3>
            <Button slot="next">▶</Button>
          </CalendarHeader>
          <CalendarGrid>{(date) => <CalendarCell date={date} />}</CalendarGrid>
        </Calendar>
      </Dialog>
    </Popover>
  </DatePicker>
)

Default.argTypes = {
  className: { type: 'string' },
}

Default.args = {
  className: '',
}
