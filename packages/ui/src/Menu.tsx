import { type ClassValue } from 'clsx'
import React from 'react'
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
  type SectionProps,
} from 'react-aria-components'

import { cn } from '../lib/utils'

const _Menu = (props: MenuTriggerProps) => {
  return <MenuTrigger {...props} />
}
export interface _MenuContentProps<T> extends Omit<MenuProps<T>, 'className'> {
  value?: T
  className?: ClassValue
  popoverClassName?: ClassValue
}

const _MenuContent = <T extends object>({
  className,
  popoverClassName,
  ...props
}: _MenuContentProps<T>) => {
  return (
    <Popover
      className={cn(
        'data-[entering]:animate-in data-[entering]:fade-in',
        'data-[exiting]:animate-in data-[exiting]:fade-in data-[exiting]:direction-reverse',
        'data-[placement=top]:slide-in-from-bottom-2',
        'data-[placement=bottom]:slide-in-from-top-2',
        'min-w-[150px] rounded-md border bg-white p-1 shadow',
        popoverClassName
      )}
    >
      <Menu className={cn('outline-none', className)} {...props} />
    </Popover>
  )
}

export interface _MenuItemProps extends Omit<ItemProps, 'className'> {
  className?: ClassValue
}

const _MenuItem = ({ className, ...props }: _MenuItemProps) => {
  return (
    <Item
      className={cn(
        'rounded-sm px-2 py-1.5 outline-none transition-colors hover:bg-slate-100 focus:bg-slate-100',
        className
      )}
      {...props}
    />
  )
}

export interface _MenuSectionProps<T>
  extends Omit<SectionProps<T>, 'className'> {
  value?: T
  className?: ClassValue
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
  className?: ClassValue
}

const _MenuHeader = ({ className, ...props }: _MenuHeaderProps) => {
  return (
    <Header
      className={cn('px-2 py-1 text-sm font-semibold', className)}
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
