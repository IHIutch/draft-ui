'use client'

import { Check } from 'lucide-react'
import { ComboBox, Item, ListBox, Popover } from 'react-aria-components'

import { cn } from '../lib/utils'
import { IconButton } from './IconButton'
import { Input } from './Input'

// export interface _MenuProps
//   extends VariantProps<typeof buttonVariants> {
//   className?: ClassValue
// }

const _ComboBox = (props) => {
  return <ComboBox className="group" {...props} />
}

const _ComboBoxInput = ({ className, ...props }) => {
  return <Input className={cn('', className)} {...props} />
}

const _ComboBoxContent = ({ className, popoverClassName, ...props }) => {
  return (
    <Popover
      className={cn(
        'w-[--trigger-width] rounded-md border bg-white p-1 shadow',
        popoverClassName
      )}
      {...props}
    >
      <ListBox className={cn('outline-none', className)} {...props} />
    </Popover>
  )
}

const _ComboBoxButton = ({ className, ...props }) => {
  return (
    <div className="absolute inset-y-0 right-0 flex items-center p-1">
      <IconButton
        className={cn('group-[[data-empty]]:hidden', className)}
        {...props}
      />
    </div>
  )
}

const _ComboBoxItem = ({ className, children, ...props }) => {
  return (
    <Item
      className={cn(
        'group',
        'flex items-center gap-2 rounded-sm px-2 py-1.5 outline-none transition-colors',
        'data-[focused]:bg-slate-100',
        className
      )}
      {...props}
    >
      <Check
        strokeWidth="3"
        className="h-4 w-4 group-[[aria-selected=false]]:invisible"
      />
      {children}
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
