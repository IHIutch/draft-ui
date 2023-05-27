'use client'

import { Check, Circle } from 'lucide-react'
import {
  Header,
  Item,
  Menu,
  MenuTrigger,
  Popover,
  Section,
  Separator,
  type ItemProps,
  type MenuProps,
  type MenuTriggerProps,
  type PopoverProps,
  type SectionProps,
} from 'react-aria-components'

import { cn } from '@/lib/utils'

const _Menu = (props: MenuTriggerProps) => {
  return <MenuTrigger {...props} />
}
export interface _MenuContentProps<T>
  extends Omit<PopoverProps, 'children' | 'style' | 'className'>,
    Omit<MenuProps<T>, 'className'> {
  value?: T
  className?: string
  popoverClassName?: string
}

const _MenuContent = <T extends object>({
  className,
  popoverClassName,
  ...props
}: _MenuContentProps<T>) => {
  return (
    <Popover
      className={cn(
        'fill-mode-forwards',
        'overflow-auto min-w-[150px] rounded-md border bg-white p-1 shadow',
        'data-[entering]:animate-in data-[entering]:fade-in',
        'data-[exiting]:animate-in data-[exiting]:fade-in data-[exiting]:direction-reverse',
        'data-[placement=top]:slide-in-from-bottom-2',
        'data-[placement=bottom]:slide-in-from-top-2',
        popoverClassName
      )}
      {...props}
    >
      <Menu className={cn('outline-none', className)} {...props} />
    </Popover>
  )
}

export interface _MenuItemProps extends Omit<ItemProps, 'className'> {
  className?: string
}

const _MenuItem = ({ className, children, ...props }: _MenuItemProps) => {
  return (
    <Item
      className={cn(
        'group',
        'flex items-center gap-2 rounded-sm px-2 py-1.5 outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100',
        className
      )}
      {...props}
    >
      {({ selectionMode }) => (
        <>
          {selectionMode === 'single' ? (
            <Circle
              strokeWidth="3"
              className="h-2 w-2 fill-current group-[[aria-checked=false]]:invisible"
            />
          ) : selectionMode === 'multiple' ? (
            <Check
              strokeWidth="3"
              className="h-4 w-4 group-[[aria-checked=false]]:invisible"
            />
          ) : null}
          {children}
        </>
      )}
    </Item>
  )
}

export interface _MenuSectionProps<T>
  extends Omit<SectionProps<T>, 'className'> {
  value?: T
  className?: string
}

const _MenuSection = <T extends object>({
  className,
  ...props
}: _MenuSectionProps<T>) => {
  return <Section className={cn('', className)} {...props} />
}

export interface _MenuHeaderProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'className'>,
    React.RefAttributes<HTMLElement> {
  className?: string
}

const _MenuHeader = ({ className, ...props }: _MenuHeaderProps) => {
  return (
    <Header
      className={cn('px-2 py-1 text-sm font-medium text-slate-500', className)}
      {...props}
    />
  )
}

const _MenuSeparator = ({ className, ...props }: { className?: string }) => {
  return (
    <Separator className={cn('-mx-1 my-1 border-t', className)} {...props} />
  )
}

export {
  _Menu as Menu,
  _MenuContent as MenuContent,
  _MenuSection as MenuSection,
  _MenuHeader as MenuHeader,
  _MenuItem as MenuItem,
  _MenuSeparator as MenuSeparator,
}
