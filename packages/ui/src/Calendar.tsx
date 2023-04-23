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
} from 'react-aria-components'

import { Button } from './Button'
import { IconButton } from './IconButton'

// export interface _MenuProps
//   extends VariantProps<typeof buttonVariants> {
//   className?: ClassValue
// }

const _Calendar = (props) => {
  return <Calendar className="w-fit" {...props} />
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
        'focus-visible:ring-ring relative flex h-8 w-8 items-center justify-center rounded text-sm transition-colors hover:bg-slate-100 focus:ring-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'data-[outside-month=true]:text-slate-300',
        'data-[selected=true]:z-10 data-[selected=true]:bg-black data-[selected=true]:text-white',
        'data-[disabled=true]:cursor-not-allowed data-[disabled=true]:hover:bg-white'
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
      <ChevronRight size="1em" />
    </IconButton>
  )
}

const _CalendarPrevButton = (props) => {
  return (
    <IconButton variant="outline" size="xs" slot="previous" {...props}>
      <ChevronLeft size="1em" />
    </IconButton>
  )
}

export {
  _Calendar as Calendar,
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
