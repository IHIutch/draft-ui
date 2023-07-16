'use client'

import {
  DateRangePicker,
  Dialog,
  Popover,
  type DateRangePickerProps,
  type DateValue,
  type DialogProps,
  type PopoverProps,
} from 'react-aria-components'

import { cn } from '@/lib/utils'

const _DateRangePicker = <T extends DateValue>(
  props: DateRangePickerProps<T>
) => {
  return <DateRangePicker {...props} />
}

export interface _DateRangePickerContentProps
  extends Omit<PopoverProps, 'children' | 'style'>,
    DialogProps {
  className?: string
  popoverClassName?: string
}

const _DateRangePickerContent = ({
  popoverClassName,
  ...props
}: _DateRangePickerContentProps) => {
  return (
    <Popover
      className={cn(
        'fill-mode-forwards',
        // Base
        'overflow-auto rounded-md border border-slate-200 bg-white p-3 shadow-md',
        // Entering
        'data-[entering]:animate-in data-[entering]:fade-in',
        // Exiting
        'data-[exiting]:animate-in data-[exiting]:fade-in data-[exiting]:direction-reverse',
        // Top
        'data-[placement=top]:slide-in-from-bottom-2',
        // Bottom
        'data-[placement=bottom]:slide-in-from-top-2',
        popoverClassName
      )}
    >
      <Dialog {...props} />
    </Popover>
  )
}

export {
  _DateRangePicker as DateRangePicker,
  _DateRangePickerContent as DateRangePickerContent,
}
