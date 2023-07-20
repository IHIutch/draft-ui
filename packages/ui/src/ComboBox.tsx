'use client'

import { Check } from 'lucide-react'
import {
  ComboBox,
  Item,
  ListBox,
  Popover,
  type ComboBoxProps,
  type ItemProps,
  type ListBoxProps,
  type PopoverProps,
} from 'react-aria-components'

import { cn } from '@/lib/utils'

import { IconButton, type _IconButtonProps } from './IconButton'
import { Input, type _InputProps } from './Input'

const _ComboBox = <T extends object>({
  className,
  ...props
}: ComboBoxProps<T>) => {
  return <ComboBox className={cn('group', className)} {...props} />
}

const _ComboBoxInput = (props: _InputProps) => {
  return <Input {...props} />
}

export interface _ComboBoxContentProps<T>
  extends Omit<PopoverProps, 'children' | 'style' | 'className'>,
    Omit<ListBoxProps<T>, 'style'> {
  popoverClassName?: string
}

const _ComboBoxContent = <T extends object>({
  className,
  popoverClassName,
  ...props
}: _ComboBoxContentProps<T>) => {
  return (
    <Popover
      className={cn(
        'fill-mode-forwards',
        'min-w-[--trigger-width] overflow-auto rounded-md border border-slate-200 bg-white p-1 shadow-md dark:border-slate-700 dark:bg-slate-800',
        popoverClassName
      )}
      {...props}
    >
      <ListBox className={cn('outline-none', className)} {...props} />
    </Popover>
  )
}

const _ComboBoxButton = ({ className, ...props }: _IconButtonProps) => {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center p-1">
      <IconButton
        className={cn('group-[[data-empty]]:hidden', className)}
        {...props}
      />
    </div>
  )
}

const _ComboBoxItem = ({ className, children, ...props }: ItemProps) => {
  return (
    <Item
      className={cn(
        'group',
        'flex items-center gap-2 rounded-sm px-2 py-1.5 outline-none transition-colors cursor-pointer text-black dark:text-white',
        'data-[focused]:bg-slate-100 dark:data-[focused]:bg-slate-700',
        className
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

export {
  _ComboBox as ComboBox,
  _ComboBoxButton as ComboBoxButton,
  _ComboBoxContent as ComboBoxContent,
  _ComboBoxInput as ComboBoxInput,
  _ComboBoxItem as ComboBoxItem,
}
