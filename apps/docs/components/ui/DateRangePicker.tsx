'use client'

import {
  DateRangePicker,
  Dialog,
  Popover,
  type DialogProps,
  type PopoverProps,
} from 'react-aria-components'

import { cn } from '@/lib/utils'

const _DateRangePicker = (props) => {
  return <DateRangePicker {...props} />
}

export interface _DateRangePickerContentProps<T>
  extends Omit<PopoverProps, 'children' | 'style' | 'className'>,
    Omit<DialogProps, 'className'> {
  value?: T
  className: string
  popoverClassName?: string
}

const _DateRangePickerContent = <T extends object>(
  props: _DateRangePickerContentProps<T>
) => {
  return (
    <Popover
      className={cn(
        'fill-mode-forwards',
        'overflow-auto rounded-md border border-slate-200 bg-white p-3 shadow-md',
        'data-[entering]:animate-in data-[entering]:fade-in',
        'data-[exiting]:animate-in data-[exiting]:fade-in data-[exiting]:direction-reverse',
        'data-[placement=top]:slide-in-from-bottom-2',
        'data-[placement=bottom]:slide-in-from-top-2'
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
