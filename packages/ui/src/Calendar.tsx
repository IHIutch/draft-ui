'use client'

import { type HTMLAttributes } from 'react'

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
  type CalendarCellProps,
  type CalendarGridBodyProps,
  type CalendarGridHeaderProps,
  type CalendarGridProps,
  type CalendarHeaderCellProps,
  type CalendarProps,
  type DateValue,
  type HeadingProps,
  type RangeCalendarProps,
} from 'react-aria-components'

import { cn } from '@/lib/utils'

import { IconButton, type _IconButtonProps } from './IconButton'

const _Calendar = <T extends DateValue>({
  className,
  ...props
}: CalendarProps<T>) => {
  return (
    <Calendar
      className={cn(
        'w-fit [&_td]:px-0 [&_td:not([aria-selected])+td[aria-selected]_div]:rounded',
        '[&_td:not([aria-selected])+td[aria-selected]_div]:bg-black [&_td:not([aria-selected])+td[aria-selected]_div]:text-white',
        'dark:[&_td:not([aria-selected])+td[aria-selected]_div]:bg-white dark:[&_td:not([aria-selected])+td[aria-selected]_div]:text-black',
        className
      )}
      {...props}
    />
  )
}

const _RangeCalendar = <T extends DateValue>({
  className,
  ...props
}: RangeCalendarProps<T>) => {
  return (
    <RangeCalendar
      className={cn(
        'w-fit [&_td]:px-0',
        // First date of week
        '[&_td[aria-selected]:first-of-type_div]:rounded-s',
        // Last date of week
        '[&_td[aria-selected]:last-of-type_div]:rounded-e',
        className
      )}
      {...props}
    />
  )
}

const _CalendarGrid = ({ className, ...props }: CalendarGridProps) => {
  return <CalendarGrid className={cn('mt-3', className)} {...props} />
}

const _CalendarGridHeader = (props: CalendarGridHeaderProps) => {
  return <CalendarGridHeader {...props} />
}

const _CalendarHeaderCell = ({
  className,
  ...props
}: CalendarHeaderCellProps) => {
  return (
    <CalendarHeaderCell
      className={cn(
        'h-10 w-10 text-sm font-medium text-slate-500 dark:text-slate-400',
        className
      )}
      {...props}
    />
  )
}

const _CalendarGridBody = ({ className, ...props }: CalendarGridBodyProps) => {
  return (
    <CalendarGridBody className={cn('relative pt-4', className)} {...props} />
  )
}

const _CalendarCell = ({ className, ...props }: CalendarCellProps) => {
  return (
    <CalendarCell
      className={cn(
        'text-black dark:text-white relative flex h-10 w-10 items-center justify-center text-sm transition-color',
        // Hover
        'hover:bg-slate-100 dark:hover:bg-slate-700',
        // Focus Visible
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 dark:focus-visible:ring-slate-400 dark:focus-visible:ring-offset-slate-900',
        // Date Outside Current Month
        'data-[outside-month]:text-slate-300 dark:data-[outside-month]:text-slate-600',
        // Selected
        'data-[selected]:z-10 data-[selected]:bg-slate-100 dark:data-[selected]:bg-slate-700 [&:not([data-selected])]:rounded',
        // Selection Start
        'data-[selected]:data-[selection-start]:rounded-s data-[selected]:data-[selection-start]:bg-black dark:data-[selected]:data-[selection-start]:bg-white data-[selection-start]:text-white dark:data-[selection-start]:text-black',
        // Selection End
        'data-[selected]:data-[selection-end]:rounded-e data-[selected]:data-[selection-end]:bg-black dark:data-[selected]:data-[selection-end]:bg-white data-[selection-end]:text-white dark:data-[selection-end]:text-black',
        // Disabled
        'data-[disabled]:cursor-not-allowed data-[disabled]:hover:!bg-transparent',
        className
      )}
      {...props}
    />
  )
}

const _CalendarHeading = ({ className, ...props }: HeadingProps) => {
  return (
    <Heading
      className={cn(
        'text-sm font-medium text-black dark:text-white',
        className
      )}
      {...props}
    />
  )
}

const _CalendarHeader = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <header
      className={cn('flex h-full items-center justify-between', className)}
      {...props}
    />
  )
}

const _CalendarFooter = (props: HTMLAttributes<HTMLDivElement>) => {
  return <footer {...props} />
}

const _CalendarNextButton = (props: _IconButtonProps) => {
  return (
    <IconButton variant="outline" size="sm" slot="next" {...props}>
      <ChevronRight size="16" strokeWidth="3" />
    </IconButton>
  )
}

const _CalendarPrevButton = (props: _IconButtonProps) => {
  return (
    <IconButton variant="outline" size="sm" slot="previous" {...props}>
      <ChevronLeft size="16" strokeWidth="3" />
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
