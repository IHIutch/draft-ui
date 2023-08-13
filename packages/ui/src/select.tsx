'use client'

import { Check } from 'lucide-react'
import {
  Item,
  ListBox,
  Popover,
  Select,
  SelectValue,
  type ItemProps,
  type ListBoxProps,
  type PopoverProps,
  type SelectProps,
  type SelectValueProps,
} from 'react-aria-components'

import { cn } from '@/lib/utils'

const _Select = <T extends object>({ className, ...props }: SelectProps<T>) => {
  return <Select className={cn('w-full', className)} {...props} />
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
      className={cn(
        'fill-mode-forwards',
        'min-w-[--trigger-width] overflow-auto rounded-md border border-slate-200 bg-white p-1 shadow-md dark:border-slate-700 dark:bg-slate-800',
        // Entering
        'data-[entering]:animate-in data-[entering]:fade-in',
        // Exiting
        'data-[exiting]:animate-in data-[exiting]:fade-in data-[exiting]:direction-reverse',
        // Top
        'data-[placement=top]:slide-in-from-bottom-2',
        // Bottom
        'data-[placement=bottom]:slide-in-from-top-2',
        popoverClassName,
      )}
      {...props}
    >
      <ListBox className={cn('outline-none', className)} {...props} />
    </Popover>
  )
}

const _SelectItem = ({ className, children, ...props }: ItemProps) => {
  return (
    <Item
      className={cn(
        'group',
        'flex items-center gap-2 rounded-sm px-2 py-1.5 outline-none transition-colors cursor-pointer text-black dark:text-white',
        // Focus
        'data-[focused]:bg-slate-100 dark:data-[focused]:bg-slate-700',
        className,
      )}
      {...props}
    >
      <>
        <Check
          aria-hidden="true"
          strokeWidth="3"
          className="h-4 w-4 group-[[aria-selected=false]]:invisible"
        />
        {children}
      </>
    </Item>
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
