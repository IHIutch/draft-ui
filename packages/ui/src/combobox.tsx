import { Check } from 'lucide-react'
import * as ReactAria from 'react-aria-components'

import { cx } from '../lib/cva.config'
import { type ButtonProps } from './button'
import { Input, type InputProps } from './input'

export const ComboBox = <T extends object>({
  className,
  ...props
}: ReactAria.ComboBoxProps<T>) => {
  return (
    <ReactAria.ComboBox className={cx('group w-full', className)} {...props} />
  )
}

export const ComboBoxInput = (props: InputProps) => {
  return <Input {...props} />
}

export interface ComboBoxContentProps<T>
  extends Omit<ReactAria.PopoverProps, 'children' | 'style' | 'className'>,
    Omit<ReactAria.ListBoxProps<T>, 'style'> {
  popoverClassName?: string
}

export const ComboBoxContent = <T extends object>({
  className,
  popoverClassName,
  ...props
}: ComboBoxContentProps<T>) => {
  return (
    <ReactAria.Popover
      className={cx(
        'min-w-[--trigger-width] overflow-auto rounded-md border border-slate-200 bg-white p-1 shadow-md dark:border-slate-700 dark:bg-slate-800',
        popoverClassName,
      )}
      {...props}
    >
      <ReactAria.ListBox className={cx('outline-none', className)} {...props} />
    </ReactAria.Popover>
  )
}

export interface ListBoxItemProps extends ReactAria.ListBoxItemProps {
  textValue: string
}

export const ComboBoxItem = ({
  className,
  children,
  ...props
}: ListBoxItemProps) => {
  return (
    <ReactAria.ListBoxItem
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
          className="group-selected:visible invisible h-4 w-4"
        />
        {children}
      </>
    </ReactAria.ListBoxItem>
  )
}

export const ComboBoxButton = ({ className, ...props }: ButtonProps) => {
  return <ReactAria.Button className={cx(className)} {...props} />
}
