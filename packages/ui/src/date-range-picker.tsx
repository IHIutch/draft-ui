import {
  DateRangePicker,
  Dialog,
  Popover,
  type DateRangePickerProps,
  type DateValue,
  type DialogProps,
  type PopoverProps,
} from 'react-aria-components'

import { cx } from '@/lib/cva.config'

const _DateRangePicker = <T extends DateValue>({
  className,
  ...props
}: DateRangePickerProps<T>) => {
  return <DateRangePicker className={cx('w-full', className)} {...props} />
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
      className={cx(
        // Base
        'overflow-auto rounded-md border border-slate-200 bg-white p-3 shadow-md',
        // Entering
        'entering:animate-in entering:fade-in',
        // Exiting
        'exiting:animate-in exiting:fade-in exiting:direction-reverse',
        // Top
        'placement-top:slide-in-from-bottom-2',
        // Bottom
        'placement-bottom:slide-in-from-top-2',
        popoverClassName,
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
