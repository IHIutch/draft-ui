import * as ReactAria from 'react-aria-components'

import { cx } from '../lib/cva.config'

export const DateRangePicker = <T extends ReactAria.DateValue>({
  className,
  ...props
}: ReactAria.DateRangePickerProps<T>) => {
  return (
    <ReactAria.DateRangePicker className={cx('w-full', className)} {...props} />
  )
}

export interface DateRangePickerContentProps
  extends Omit<ReactAria.PopoverProps, 'children' | 'style'>,
    ReactAria.DialogProps {
  className?: string
  popoverClassName?: string
}

export const DateRangePickerContent = ({
  popoverClassName,
  ...props
}: DateRangePickerContentProps) => {
  return (
    <ReactAria.Popover
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
      <ReactAria.Dialog {...props} />
    </ReactAria.Popover>
  )
}
