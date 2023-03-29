import { type ClassValue } from 'class-variance-authority/dist/types'
import { Calendar, CalendarGrid } from 'react-aria-components/src/Calendar'
import { Item } from 'react-aria-components/src/Collection'

// export interface _MenuProps
//   extends VariantProps<typeof buttonVariants> {
//   className?: ClassValue
// }

const _Calendar = (props: any) => {
  return <Calendar {...props} />
}

const _CalendarGrid = (props: any) => {
  return <CalendarGrid {...props} />
}

const _CalendarCell = (props: any) => {
  return <Item {...props} />
}

const _CalendarHeader = (props: any) => {
  return <header {...props} />
}

const _CalendarFooter = (props: any) => {
  return <footer {...props} />
}

export {
  _Calendar as Calendar,
  _CalendarGrid as CalendarGrid,
  _CalendarCell as CalendarCell,
  _CalendarHeader as CalendarHeader,
  _CalendarFooter as CalendarFooter,
}
