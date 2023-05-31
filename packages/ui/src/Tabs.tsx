'use client'

import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  type TabListProps,
  type TabPanelProps,
  type TabPanelsProps,
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
        'data-[orientation=horizontal]:flex-col',
        className
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
        'flex border-slate-200',
        // Horizontal
        'group-[[data-orientation=horizontal]]/tabs:border-b-2',
        // Vertical
        'group-[[data-orientation=vertical]]/tabs:border-r-2 group-[[data-orientation=vertical]]/tabs:flex-col',
        className
      )}
      {...props}
    />
  )
}

const _Tab = ({ className, ...props }: TabProps) => {
  return (
    <Tab
      className={cn(
        'transition-colors px-4 py-2 cursor-pointer border-transparent relative text-slate-500 outline-none',
        // Focus-visible
        'data-[focus-visible]:ring-2 data-[focus-visible]:ring-slate-400',
        // Disabled
        'aria-[disabled]:opacity-40 aria-[disabled]:cursor-not-allowed',
        // Horizontal
        'group-[[data-orientation=horizontal]]/tabs:border-b-2 group-[[data-orientation=horizontal]]/tabs:top-[2px]',
        // Horizontal & Selected
        'group-[[data-orientation=horizontal]]/tabs:aria-[selected=true]:border-b-2',
        // Vertical
        'group-[[data-orientation=vertical]]/tabs:inline-flex group-[[data-orientation=vertical]]/tabs:border-r-2 group-[[data-orientation=vertical]]/tabs:left-[2px]',
        // Vertical & Selected
        'group-[[data-orientation=vertical]]/tabs:aria-[selected=true]:border-r-2',
        // Selected
        'aria-[selected=true]:border-black aria-[selected=true]:text-black',
        className
      )}
      {...props}
    />
  )
}

const _TabPanels = <T extends object>(props: TabPanelsProps<T>) => {
  return <TabPanels {...props} />
}

const _TabPanel = ({ className, ...props }: TabPanelProps) => {
  return <TabPanel className={cn('p-4', className)} {...props} />
}

export {
  _Tabs as Tabs,
  _TabList as TabList,
  _Tab as Tab,
  _TabPanels as TabPanels,
  _TabPanel as TabPanel,
}
