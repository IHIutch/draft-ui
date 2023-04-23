import { type Meta, type StoryObj } from '@storybook/react'
import { RangeCalendar } from 'react-aria-components'
import { Button, CalendarCell, CalendarGrid, CalendarHeader } from 'ui'

const meta: Meta<typeof RangeCalendar> = {
  title: 'RangeCalendar',
  component: RangeCalendar,
}

export default meta

export const Default: StoryObj<typeof RangeCalendar> = (props) => (
  <RangeCalendar aria-label="Trip dates">
    <CalendarHeader>
      <Button slot="previous">◀</Button>
      {/* <Heading /> */}
      <h3>Calendar Heading</h3>
      <Button slot="next">▶</Button>
    </CalendarHeader>
    <CalendarGrid>{(date) => <CalendarCell date={date} />}</CalendarGrid>
  </RangeCalendar>
)

Default.argTypes = {}

Default.args = {}
