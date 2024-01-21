import { Check } from 'lucide-react'
import * as ReactAria from 'react-aria-components'

import { cx } from '../lib/cva.config'
import { Button, type ButtonProps } from './button'

export const Select = <T extends object>({
  className,
  ...props
}: ReactAria.SelectProps<T>) => {
  return <ReactAria.Select className={cx('w-full', className)} {...props} />
}

export interface SelectContentProps<T>
  extends Omit<ReactAria.PopoverProps, 'children' | 'style'>,
    Omit<ReactAria.ListBoxProps<T>, 'style'> {
  className?: string
  popoverClassName?: string
}

export const SelectContent = <T extends object>({
  className,
  popoverClassName,
  ...props
}: SelectContentProps<T>) => {
  return (
    <ReactAria.Popover
      className={cx(
        'min-w-[--trigger-width] overflow-auto rounded-md border border-slate-200 bg-white p-1 shadow-md dark:border-slate-700 dark:bg-slate-800',
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
      {...props}
    >
      <ReactAria.ListBox className={cx('outline-none', className)} {...props} />
    </ReactAria.Popover>
  )
}

export const SelectItem = ({
  className,
  children,
  ...props
}: ReactAria.ListBoxItemProps) => {
  return (
    <ReactAria.ListBoxItem
      className={cx(
        'group',
        'flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-black outline-none transition-colors dark:text-white',
        // Focus
        'focus:bg-slate-100 dark:focus:bg-slate-700',
        className,
      )}
      {...props}
    >
      <>
        <Check
          aria-hidden="true"
          strokeWidth="3"
          className="invisible h-4 w-4 group-selected:visible"
        />
        {children}
      </>
    </ReactAria.ListBoxItem>
  )
}

export const SelectValue = <T extends object>(
  props: ReactAria.SelectValueProps<T>,
) => {
  return <ReactAria.SelectValue {...props} />
}

export const SelectButton = ({ className, ...props }: ButtonProps) => {
  return (
    <Button
      className={cx(
        [
          'flex w-full items-center justify-between font-normal',
          // Disabled
          'disabled:cursor-not-allowed disabled:pointer-events-auto',
        ],
        className,
      )}
      {...props}
    />
  )
}
