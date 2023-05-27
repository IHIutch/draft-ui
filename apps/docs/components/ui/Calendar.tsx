'use client'

import { type HTMLAttributes } from 'react'

import clsx, { type ClassValue } from 'clsx'
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

export interface _CalendarProps<T extends DateValue>
  extends Omit<CalendarProps<T>, 'className'> {
  className?: ClassValue
}

const _Calendar = <T extends DateValue>({
  className,
  ...props
}: _CalendarProps<T>) => {
  return (
    <Calendar
      className={cn(
        'w-fit [&_td]:px-0',
        '[&_td:not([aria-selected])+td[aria-selected]_div]:rounded [&_td:not([aria-selected])+td[aria-selected]_div]:bg-black [&_td:not([aria-selected])+td[aria-selected]_div]:text-white',
        className
      )}
      {...props}
    />
  )
}

export interface _RangeCalendarProps<T extends DateValue>
  extends Omit<RangeCalendarProps<T>, 'className'> {
  className?: ClassValue
}

const _RangeCalendar = ({ className, ...props }: _RangeCalendarProps<T>) => {
  return (
    <RangeCalendar
      className={clsx(
        'w-fit [&_td]:px-0',
        '[&_td[aria-selected]:first-of-type_div]:rounded-s [&_td[aria-selected]:last-of-type_div]:rounded-e',
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
      className={cn('h-8 w-8 text-sm font-medium text-slate-500', className)}
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
        'focus-visible:ring-ring relative flex h-8 w-8 items-center justify-center text-sm transition-all hover:bg-slate-100 focus:ring-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'data-[outside-month]:text-slate-300',
        'data-[selected]:z-10 data-[selected]:bg-slate-200 [&:not([data-selected])]:rounded',
        'data-[selected]:data-[selection-start]:rounded-s data-[selected]:data-[selection-start]:bg-black data-[selection-start]:text-white',
        'data-[selected]:data-[selection-end]:rounded-e data-[selected]:data-[selection-end]:bg-black data-[selection-end]:text-white',
        'data-[disabled]:cursor-not-allowed data-[disabled]:hover:bg-white',
        className
      )}
      {...props}
    />
  )
}

const _CalendarHeading = ({ className, ...props }: HeadingProps) => {
  return <Heading className={cn('text-sm font-medium', className)} {...props} />
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

const _CalendarFooter = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return <footer className={className} {...props} />
}

const _CalendarNextButton = ({ className, ...props }: _IconButtonProps) => {
  return (
    <IconButton
      className={className}
      variant="outline"
      size="xs"
      slot="next"
      {...props}
    >
      <ChevronRight size="1em" strokeWidth="3" />
    </IconButton>
  )
}

const _CalendarPrevButton = ({ className, ...props }: _IconButtonProps) => {
  return (
    <IconButton
      className={className}
      variant="outline"
      size="xs"
      slot="previous"
      {...props}
    >
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
