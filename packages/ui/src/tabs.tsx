'use client'

import {
  Tab,
  TabList,
  TabPanel,
  Tabs,
  type TabListProps,
  type TabPanelProps,
  type TabProps,
  type TabsProps,
} from 'react-aria-components'

import { cn } from '@/lib/utils'

const _Tabs = ({ className, ...props }: TabsProps) => {
  return (
    <Tabs
      className={cn(
        'group/tabs flex',
        // Horizontal
        'data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:[--border-width:0_0_2px_0]',
        // Vertical
        'data-[orientation=vertical]:[--border-width:0_2px_0_0]',
        className,
      )}
      {...props}
    />
  )
}

const _TabList = <T extends object>({
  className,
  ...props
}: TabListProps<T>) => {
  return (
    <TabList
      className={cn(
        'flex border-slate-200 dark:border-slate-700 border-[length:var(--border-width)]',
        // Vertical
        'group-[[data-orientation=vertical]]/tabs:flex-col',
        className,
      )}
      {...props}
    />
  )
}

const _Tab = ({ className, ...props }: TabProps) => {
  return (
    <Tab
      className={cn(
        'transition-colors px-4 py-2 cursor-pointer border-transparent border-[length:var(--border-width)] relative text-slate-500 dark:text-slate-400 outline-none shrink-0',
        // Focus-visible
        'data-[focus-visible]:ring-2 data-[focus-visible]:ring-slate-400',
        // Disabled
        'aria-disabled:opacity-40 aria-disabled:cursor-not-allowed',
        // Horizontal
        'group-[[data-orientation=horizontal]]/tabs:border-[width:var(--border-width)] group-[[data-orientation=horizontal]]/tabs:top-[2px]',
        // Vertical
        'group-[[data-orientation=vertical]]/tabs:inline-flex group-[[data-orientation=vertical]]/tabs:border-[width:var(--border-width)] group-[[data-orientation=vertical]]/tabs:left-[2px]',
        // Selected
        'aria-[selected=true]:border-black aria-[selected=true]:text-black dark:aria-[selected=true]:border-white dark:aria-[selected=true]:text-white aria-[selected=true]:border-[length:var(--border-width)]',
        className,
      )}
      {...props}
    />
  )
}

const _TabPanel = ({ className, ...props }: TabPanelProps) => {
  return <TabPanel className={cn('p-4 grow', className)} {...props} />
}

export {
  _Tabs as Tabs,
  _TabList as TabList,
  _Tab as Tab,
  _TabPanel as TabPanel,
}
