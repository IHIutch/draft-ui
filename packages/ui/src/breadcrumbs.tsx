'use client'

import * as React from 'react'

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
    <Breadcrumbs className={cn('flex flex-wrap gap-1', className)} {...props} />
  )
}

export interface _BreadcrumbItemProps extends ItemProps {
  separator?: React.ReactNode
  children?: React.ReactNode
}

const _BreadcrumbItem = ({
  separator,
  children,
  ...props
}: _BreadcrumbItemProps) => {
  return (
    <Item className="flex items-center gap-1" {...props}>
      <Link className="text-slate-500 current:text-black dark:text-slate-300 dark:current:text-white">
        {children}
      </Link>
      {separator ? (
        <div aria-hidden="true" className="text-slate-400 dark:text-slate-500">
          {separator}
        </div>
      ) : null}
    </Item>
  )
}

export { _Breadcrumbs as Breadcrumbs, _BreadcrumbItem as BreadcrumbItem }
