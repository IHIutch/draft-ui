import { Button } from '../../Button/src/Button'
import {
  CalendarCell,
  CalendarGrid,
  CalendarHeader,
} from '../../Calendar/src/Calendar'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { RangeCalendar } from 'react-aria-components/src/Calendar'

export default {
  title: 'RangeCalendar',
  component: RangeCalendar,
} as ComponentMeta<typeof RangeCalendar>

export const Default: ComponentStory<typeof RangeCalendar> = (props) => (
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

Default.argTypes = {
  className: { type: 'string' },
}

Default.args = {
  className: '',
}
