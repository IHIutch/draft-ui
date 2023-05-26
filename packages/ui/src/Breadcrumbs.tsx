'use client'

import { type ClassValue } from 'clsx'
import {
  Breadcrumbs,
  Item,
  Link,
  type BreadcrumbsProps,
} from 'react-aria-components'

import { cn } from '../lib/utils'

export interface _BreadcrumbsProps<T>
  extends Omit<BreadcrumbsProps<T>, 'className'> {
  value?: T
  className?: ClassValue
}

const _Breadcrumbs = <T extends object>({
  className,
  ...props
}: _BreadcrumbsProps<T>) => {
  return (
    <Breadcrumbs
      className={cn(className, '[&_ol]:flex [&_ol]:flex-wrap [&_ol]:gap-1')}
      {...props}
    />
  )
}

const _BreadcrumbItem = ({ separator, children, ...props }: any) => {
  return (
    <Item className="flex items-center gap-1" {...props}>
      <Link className="text-slate-500 aria-[current=page]:text-black [&:not([aria-current=page])]:hover:underline">
        {children}
      </Link>
      {separator ? <div aria-hidden="true">{separator}</div> : null}
    </Item>
  )
}

export { _Breadcrumbs as Breadcrumbs, _BreadcrumbItem as BreadcrumbItem }
