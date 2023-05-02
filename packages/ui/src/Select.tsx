import { Check } from 'lucide-react'
import {
  Item,
  ListBox,
  Popover,
  Select,
  SelectValue,
} from 'react-aria-components'

import { cn } from '../lib/utils'

const _Select = (props) => {
  return <Select {...props} />
}

const _SelectContent = ({ className, popoverClassName, ...props }) => {
  return (
    <Popover
      className={cn(
        'fill-mode-forwards min-w-[--trigger-width] rounded-md border bg-white p-1 shadow',
        'data-[entering]:animate-in data-[entering]:fade-in',
        'data-[exiting]:animate-in data-[exiting]:fade-in data-[exiting]:direction-reverse',
        'data-[placement=top]:slide-in-from-bottom-2',
        'data-[placement=bottom]:slide-in-from-top-2',
        popoverClassName
      )}
      {...props}
    >
      <ListBox className={cn('outline-none', className)} {...props} />
    </Popover>
  )
}

const _SelectItem = ({ className, children, ...props }) => {
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

const _SelectValue = (props) => {
  return (
    <SelectValue {...props}>
      {({ selectedText }) => (selectedText ? selectedText : 'Select an item')}
    </SelectValue>
  )
}

export {
  _Select as Select,
  _SelectContent as SelectContent,
  _SelectItem as SelectItem,
  _SelectValue as SelectValue,
}
