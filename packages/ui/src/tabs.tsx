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
        'flex border-[length:var(--border-width)] border-slate-200 dark:border-slate-700',
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
        'relative shrink-0 cursor-pointer border-[length:var(--border-width)] border-transparent px-4 py-2 text-slate-500 outline-none transition-colors dark:text-slate-400',
        // Focus-visible
        'data-[focus-visible]:ring-2 data-[focus-visible]:ring-slate-400',
        // Disabled
        'aria-disabled:cursor-not-allowed aria-disabled:opacity-40',
        // Horizontal
        'group-[[data-orientation=horizontal]]/tabs:border-[width:var(--border-width)] group-[[data-orientation=horizontal]]/tabs:top-[2px]',
        // Vertical
        'group-[[data-orientation=vertical]]/tabs:border-[width:var(--border-width)] group-[[data-orientation=vertical]]/tabs:left-[2px] group-[[data-orientation=vertical]]/tabs:inline-flex',
        // Selected
        'aria-[selected=true]:border-[length:var(--border-width)] aria-[selected=true]:border-black aria-[selected=true]:text-black dark:aria-[selected=true]:border-white dark:aria-[selected=true]:text-white',
        className,
      )}
      {...props}
    />
  )
}

const _TabPanel = ({ className, ...props }: TabPanelProps) => {
  return <TabPanel className={cn('grow p-4', className)} {...props} />
}

export {
  _Tabs as Tabs,
  _TabList as TabList,
  _Tab as Tab,
  _TabPanel as TabPanel,
}
