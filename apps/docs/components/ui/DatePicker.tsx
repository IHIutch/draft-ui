'use client'

import {
  DatePicker,
  Dialog,
  Popover,
  type DatePickerProps,
  type DateValue,
  type DialogProps,
  type PopoverProps,
} from 'react-aria-components'

import { cn } from '@/lib/utils'

export interface _DatePickerProps<T extends DateValue>
  extends Omit<DatePickerProps<T>, 'className'> {
  className?: string
}

const _DatePicker = <T extends DateValue>(props: DatePickerProps<T>) => {
  return <DatePicker {...props} />
}

export interface _DatePickerContentProps<T>
  extends Omit<PopoverProps, 'children' | 'style' | 'className'>,
    Omit<DialogProps, 'className'> {
  value?: T
  className?: string
  popoverClassName?: string
}

const _DatePickerContent = <T extends object>({
  className,
  popoverClassName,
  ...props
}: _DatePickerContentProps<T>) => {
  return (
    <Popover
      className={cn(
        'fill-mode-forwards',
        'overflow-auto rounded-md border border-slate-200 bg-white p-3 shadow-md',
        'data-[entering]:animate-in data-[entering]:fade-in',
        'data-[exiting]:animate-in data-[exiting]:fade-in data-[exiting]:direction-reverse',
        'data-[placement=top]:slide-in-from-bottom-2',
        'data-[placement=bottom]:slide-in-from-top-2',
        popoverClassName
      )}
    >
      <Dialog className={className} {...props} />
    </Popover>
  )
}

export { _DatePicker as DatePicker, _DatePickerContent as DatePickerContent }
