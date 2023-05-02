import clsx from 'clsx'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  Heading,
  RangeCalendar,
} from 'react-aria-components'

import { IconButton } from './IconButton'

// export interface _MenuProps
//   extends VariantProps<typeof buttonVariants> {
//   className?: ClassValue
// }

const _Calendar = (props) => {
  return (
    <Calendar
      className={clsx(
        'w-fit [&_td]:px-0',
        '[&_td:not([aria-selected])+td[aria-selected]_div]:rounded [&_td:not([aria-selected])+td[aria-selected]_div]:bg-black [&_td:not([aria-selected])+td[aria-selected]_div]:text-white'
      )}
      {...props}
    />
  )
}

const _RangeCalendar = (props) => {
  return (
    <RangeCalendar
      className={clsx(
        'w-fit [&_td]:px-0',
        '[&_td[aria-selected]:first-of-type_div]:rounded-s [&_td[aria-selected]:last-of-type_div]:rounded-e'
      )}
      {...props}
    />
  )
}

const _CalendarGrid = (props) => {
  return <CalendarGrid className="mt-3" {...props} />
}

const _CalendarGridHeader = (props) => {
  return <CalendarGridHeader {...props} />
}

const _CalendarHeaderCell = (props) => {
  return (
    <CalendarHeaderCell
      className="h-8 w-8 text-sm font-medium text-slate-500"
      {...props}
    />
  )
}

const _CalendarGridBody = (props) => {
  return <CalendarGridBody className="relative pt-4" {...props} />
}

const _CalendarCell = (props) => {
  return (
    <CalendarCell
      className={clsx(
        'focus-visible:ring-ring relative flex h-8 w-8 items-center justify-center text-sm transition-all hover:bg-slate-100 focus:ring-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'data-[outside-month]:text-slate-300',
        'data-[selected]:z-10 data-[selected]:bg-slate-200 [&:not([data-selected])]:rounded',
        'data-[selected]:data-[selection-start]:rounded-s data-[selected]:data-[selection-start]:bg-black data-[selection-start]:text-white',
        'data-[selected]:data-[selection-end]:rounded-e data-[selected]:data-[selection-end]:bg-black data-[selection-end]:text-white',
        'data-[disabled]:cursor-not-allowed data-[disabled]:hover:bg-white'
      )}
      {...props}
    />
  )
}

const _CalendarHeading = (props) => {
  return <Heading className="text-sm font-medium" {...props} />
}

const _CalendarHeader = (props) => {
  return (
    <header className="flex h-full items-center justify-between" {...props} />
  )
}

const _CalendarFooter = (props) => {
  return <footer {...props} />
}

const _CalendarNextButton = (props) => {
  return (
    <IconButton variant="outline" size="xs" slot="next" {...props}>
      <ChevronRight size="1em" strokeWidth="3" />
    </IconButton>
  )
}

const _CalendarPrevButton = (props) => {
  return (
    <IconButton variant="outline" size="xs" slot="previous" {...props}>
      <ChevronLeft size="1em" strokeWidth="3" />
    </IconButton>
  )
}

export {
  _Calendar as Calendar,
  _RangeCalendar as RangeCalendar,
  _CalendarGrid as CalendarGrid,
  _CalendarCell as CalendarCell,
  _CalendarHeading as CalendarHeading,
  _CalendarHeader as CalendarHeader,
  _CalendarFooter as CalendarFooter,
  _CalendarNextButton as CalendarNextButton,
  _CalendarPrevButton as CalendarPrevButton,
  _CalendarGridHeader as CalendarGridHeader,
  _CalendarGridBody as CalendarGridBody,
  _CalendarHeaderCell as CalendarHeaderCell,
}
