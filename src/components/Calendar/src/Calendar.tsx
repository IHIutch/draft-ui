import { type ClassValue } from 'class-variance-authority/dist/types'
import { Calendar, CalendarGrid, Item } from 'react-aria-components'

// export interface _MenuProps
//   extends VariantProps<typeof buttonVariants> {
//   className?: ClassValue
// }

const _Calendar = (props) => {
  return <Calendar {...props} />
}

const _CalendarGrid = (props) => {
  return <CalendarGrid {...props} />
}

const _CalendarCell = (props) => {
  return <Item {...props} />
}

const _CalendarHeader = (props) => {
  return <header {...props} />
}

const _CalendarFooter = (props) => {
  return <footer {...props} />
}

export {
  _Calendar as Calendar,
  _CalendarGrid as CalendarGrid,
  _CalendarCell as CalendarCell,
  _CalendarHeader as CalendarHeader,
  _CalendarFooter as CalendarFooter,
}
