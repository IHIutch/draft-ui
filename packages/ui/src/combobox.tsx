'use client'

import { Check } from 'lucide-react'
import {
  Button,
  ComboBox,
  ListBox,
  ListBoxItem,
  Popover,
  type ButtonProps,
  type ComboBoxProps,
  type ListBoxItemProps,
  type ListBoxProps,
  type PopoverProps,
} from 'react-aria-components'

import { cx } from '@/lib/cva.config'

import { type _ButtonProps } from './button'
import { Input, type _InputProps } from './input'

const _ComboBox = <T extends object>({
  className,
  ...props
}: ComboBoxProps<T>) => {
  return <ComboBox className={cx('group w-full', className)} {...props} />
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
      className={cx(
        'min-w-[--trigger-width] overflow-auto rounded-md border border-slate-200 bg-white p-1 shadow-md dark:border-slate-700 dark:bg-slate-800',
        popoverClassName,
      )}
      {...props}
    >
      <ListBox className={cx('outline-none', className)} {...props} />
    </Popover>
  )
}

export interface _ListBoxItemProps extends ListBoxItemProps {
  textValue: string
}

const _ComboBoxItem = ({
  className,
  children,
  ...props
}: _ListBoxItemProps) => {
  return (
    <ListBoxItem
      className={cx(
        'group',
        'flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-black outline-none transition-colors dark:text-white',
        // Focus
        'focus:bg-slate-100 dark:focus:bg-slate-700',
        // Disabled
        'disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent',
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

const _ComboBoxButton = ({ className, ...props }: ButtonProps) => {
  return <Button className={cx(className)} {...props} />
}

export {
  _ComboBox as ComboBox,
  _ComboBoxContent as ComboBoxContent,
  _ComboBoxInput as ComboBoxInput,
  _ComboBoxItem as ComboBoxItem,
  _ComboBoxButton as ComboBoxButton,
}
