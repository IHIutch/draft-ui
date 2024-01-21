import * as ReactAria from 'react-aria-components'

import { cx } from '../lib/cva.config'

export const DatePicker = <T extends ReactAria.DateValue>({
  className,
  ...props
}: ReactAria.DatePickerProps<T>) => {
  return <ReactAria.DatePicker className={cx('w-full', className)} {...props} />
}

export interface DatePickerContentProps
  extends Omit<ReactAria.PopoverProps, 'children' | 'style'>,
    ReactAria.DialogProps {
  className?: string
  popoverClassName?: string
}

export const DatePickerContent = ({
  popoverClassName,
  ...props
}: DatePickerContentProps) => {
  return (
    <ReactAria.Popover
      className={cx(
        'overflow-auto rounded-md border border-slate-200 bg-white p-3 shadow-md dark:border-slate-700 dark:bg-slate-800',
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

export const DatePickerButton = ({
  className,
  ...props
}: ReactAria.ButtonProps) => {
  return <ReactAria.Button className={cx(className)} {...props} />
}
