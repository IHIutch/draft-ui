'use client'

import { type ReactNode } from 'react'

import {
  Breadcrumbs,
  Item,
  Link,
  type BreadcrumbsProps,
  type ItemProps,
} from 'react-aria-components'

import { cn } from '@/lib/utils'

const _Breadcrumbs = <T extends object>({
  className,
  ...props
}: BreadcrumbsProps<T>) => {
  return (
    <Breadcrumbs
      className={cn('[&_ol]:flex [&_ol]:flex-wrap [&_ol]:gap-1', className)}
      {...props}
    />
  )
}

export interface _BreadcrumbItemProps extends ItemProps {
  separator?: ReactNode
  children?: ReactNode
}

const _BreadcrumbItem = ({
  separator,
  children,
  ...props
}: _BreadcrumbItemProps) => {
  return (
    <Item className="flex items-center gap-1" {...props}>
      <Link className="text-slate-500 aria-[current=page]:text-black dark:text-slate-400 dark:aria-[current=page]:text-white [&:not([aria-current=page])]:hover:underline">
        {children}
      </Link>
      {separator ? (
        <div aria-hidden="true" className="text-slate-600 dark:text-slate-500">
          {separator}
        </div>
      ) : null}
    </Item>
  )
}

export { _Breadcrumbs as Breadcrumbs, _BreadcrumbItem as BreadcrumbItem }
