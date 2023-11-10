'use client'

import * as React from 'react'

import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  Heading,
  RangeCalendar,
  type ButtonProps,
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

import { cx } from '@/lib/cva.config'

const _Calendar = <T extends DateValue>({
  className,
  ...props
}: CalendarProps<T>) => {
  return (
    <Calendar
      className={cx(
        'w-fit [&_td:not([aria-selected])+td[aria-selected]_div]:rounded [&_td]:px-0',
        '[&_td:not([aria-selected])+td[aria-selected]_div]:bg-black [&_td:not([aria-selected])+td[aria-selected]_div]:text-white',
        'dark:[&_td:not([aria-selected])+td[aria-selected]_div]:bg-white dark:[&_td:not([aria-selected])+td[aria-selected]_div]:text-black',
        className,
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
      className={cx(
        'w-fit [&_td]:px-0',
        // First date of week
        '[&_td[aria-selected]:first-of-type_div]:rounded-s',
        // Last date of week
        '[&_td[aria-selected]:last-of-type_div]:rounded-e',
        className,
      )}
      {...props}
    />
  )
}

const _CalendarGrid = ({ className, ...props }: CalendarGridProps) => {
  return <CalendarGrid className={cx('mt-3', className)} {...props} />
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
      className={cx(
        'h-10 w-10 text-sm font-medium text-slate-500 dark:text-slate-400',
        className,
      )}
      {...props}
    />
  )
}

const _CalendarGridBody = ({ className, ...props }: CalendarGridBodyProps) => {
  return (
    <CalendarGridBody className={cx('relative pt-4', className)} {...props} />
  )
}

const _CalendarCell = ({ className, ...props }: CalendarCellProps) => {
  return (
    <CalendarCell
      className={cx(
        'transition-color relative flex h-10 w-10 items-center justify-center text-sm text-black dark:text-white',
        // Hover
        'hover:bg-slate-100 dark:hover:bg-slate-700',
        // Focus
        'focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900',
        // Date Outside Current Month
        'outside-month:text-slate-300 dark:outside-month:text-slate-600',
        // Selected
        'selected:z-10 selected:bg-slate-100 dark:selected:bg-slate-700 [&:not([data-selected])]:rounded',
        // Selection Start
        'selection-start:text-white selected:selection-start:rounded-s selected:selection-start:bg-black dark:selection-start:text-black dark:selected:selection-start:bg-white',
        // Selection End
        'selection-end:text-white selected:selection-end:rounded-e selected:selection-end:bg-black dark:selection-end:text-black dark:selected:selection-end:bg-white',
        // Disabled
        'disabled:cursor-not-allowed disabled:hover:!bg-transparent',
        className,
      )}
      {...props}
    />
  )
}

const _CalendarHeading = ({ className, ...props }: HeadingProps) => {
  return (
    <Heading
      slot="title"
      className={cx(
        'text-sm font-medium text-black dark:text-white',
        className,
      )}
      {...props}
    />
  )
}

const _CalendarHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <header
      className={cx('flex h-full items-center justify-between', className)}
      {...props}
    />
  )
}

const _CalendarFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <footer className={cx(className)} {...props} />
}

const _CalendarNextButton = ({ className, ...props }: ButtonProps) => {
  return <Button className={cx(className)} {...props} slot="next" />
}

const _CalendarPrevButton = ({ className, ...props }: ButtonProps) => {
  return <Button className={cx(className)} {...props} slot="previous" />
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
