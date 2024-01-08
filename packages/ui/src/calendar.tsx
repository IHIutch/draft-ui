import * as React from 'react'

import * as ReactAria from 'react-aria-components'

import { cx } from '@/lib/cva.config'

export const Calendar = <T extends ReactAria.DateValue>({
  className,
  ...props
}: ReactAria.CalendarProps<T>) => {
  return (
    <ReactAria.Calendar
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

export const RangeCalendar = <T extends ReactAria.DateValue>({
  className,
  ...props
}: ReactAria.RangeCalendarProps<T>) => {
  return (
    <ReactAria.RangeCalendar
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

export const CalendarGrid = ({
  className,
  ...props
}: ReactAria.CalendarGridProps) => {
  return <ReactAria.CalendarGrid className={cx('mt-3', className)} {...props} />
}

export const CalendarGridHeader = (
  props: ReactAria.CalendarGridHeaderProps,
) => {
  return <ReactAria.CalendarGridHeader {...props} />
}

export const CalendarHeaderCell = ({
  className,
  ...props
}: ReactAria.CalendarHeaderCellProps) => {
  return (
    <ReactAria.CalendarHeaderCell
      className={cx(
        'h-10 w-10 text-sm font-medium text-slate-500 dark:text-slate-400',
        className,
      )}
      {...props}
    />
  )
}

export const CalendarGridBody = ({
  className,
  ...props
}: ReactAria.CalendarGridBodyProps) => {
  return (
    <ReactAria.CalendarGridBody
      className={cx('relative pt-4', className)}
      {...props}
    />
  )
}

export const CalendarCell = ({
  className,
  ...props
}: ReactAria.CalendarCellProps) => {
  return (
    <ReactAria.CalendarCell
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

export const CalendarHeading = ({
  className,
  ...props
}: ReactAria.HeadingProps) => {
  return (
    <ReactAria.Heading
      slot="title"
      className={cx(
        'text-sm font-medium text-black dark:text-white',
        className,
      )}
      {...props}
    />
  )
}

export const CalendarHeader = ({
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

export const CalendarFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <footer className={cx(className)} {...props} />
}

export const CalendarNextButton = ({
  className,
  ...props
}: ReactAria.ButtonProps) => {
  return <ReactAria.Button className={cx(className)} {...props} slot="next" />
}

export const CalendarPrevButton = ({
  className,
  ...props
}: ReactAria.ButtonProps) => {
  return (
    <ReactAria.Button className={cx(className)} {...props} slot="previous" />
  )
}
