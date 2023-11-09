'use client'

import { cx } from 'cva'
import { Check } from 'lucide-react'
import {
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
  type ListBoxItemProps,
  type ListBoxProps,
  type PopoverProps,
  type SelectProps,
  type SelectValueProps,
} from 'react-aria-components'

const _Select = <T extends object>({ className, ...props }: SelectProps<T>) => {
  return <Select className={cx('w-full', className)} {...props} />
}

export interface _SelectContentProps<T>
  extends Omit<PopoverProps, 'children' | 'style'>,
    Omit<ListBoxProps<T>, 'style'> {
  className?: string
  popoverClassName?: string
}

const _SelectContent = <T extends object>({
  className,
  popoverClassName,
  ...props
}: _SelectContentProps<T>) => {
  return (
    <Popover
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
      <ListBox className={cx('outline-none', className)} {...props} />
    </Popover>
  )
}

const _SelectItem = ({ className, children, ...props }: ListBoxItemProps) => {
  return (
    <ListBoxItem
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
    </ListBoxItem>
  )
}

const _SelectValue = <T extends object>(props: SelectValueProps<T>) => {
  return <SelectValue {...props} />
}

export {
  _Select as Select,
  _SelectContent as SelectContent,
  _SelectItem as SelectItem,
  _SelectValue as SelectValue,
}
