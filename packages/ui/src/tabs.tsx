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
        'flex',
        // Horizontal
        'orientation-horizontal:flex-col orientation-horizontal:[--border-width:0_0_2px_0]',
        // Vertical
        'orientation-vertical:[--border-width:0_2px_0_0]',
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
        'group',
        'flex border-[length:var(--border-width)] border-slate-200 dark:border-slate-700',
        // Vertical
        'orientation-vertical:flex-col',
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
        'focus-visible:ring-2 focus-visible:ring-slate-400',
        // Disabled
        'aria-disabled:cursor-not-allowed aria-disabled:opacity-40',
        // Horizontal
        'group-orientation-horizontal:border-[width:var(--border-width)] group-orientation-horizontal:top-[2px]',
        // Vertical
        'group-orientation-vertical:border-[width:var(--border-width)] group-orientation-vertical:left-[2px] group-orientation-vertical:inline-flex',
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
