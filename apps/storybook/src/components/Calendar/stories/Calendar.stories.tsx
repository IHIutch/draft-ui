import { type StoryObj, type Meta } from '@storybook/react'
import { Calendar, CalendarCell, CalendarGrid, CalendarHeader } from 'ui/src'
import { Button } from 'ui/src'

const meta: Meta<typeof Calendar> = {
  title: 'Calendar',
  component: Calendar,
}

export default meta

export const Default: StoryObj<typeof Calendar> = (props) => (
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
