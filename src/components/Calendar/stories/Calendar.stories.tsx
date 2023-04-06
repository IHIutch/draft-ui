import { Button } from '../../Button/src/button'
import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarHeader,
} from '../src/Calendar'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

export default {
  title: 'Calendar',
  component: Calendar,
} as ComponentMeta<typeof Calendar>

export const Default: ComponentStory<typeof Calendar> = (props) => (
  <Calendar aria-label="Appointment date">
    <CalendarHeader>
      <Button slot="previous">◀</Button>
      {/* <Heading /> */}
      <h3>Calendar Heading</h3>
      <Button slot="next">▶</Button>
    </CalendarHeader>
    <CalendarGrid>{(date) => <CalendarCell date={date} />}</CalendarGrid>
  </Calendar>
)

Default.argTypes = {
  className: { type: 'string' },
}

Default.args = {
  className: '',
}
