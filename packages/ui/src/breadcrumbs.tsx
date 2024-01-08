import * as React from 'react'

import {
  Breadcrumb,
  Breadcrumbs,
  Link,
  type BreadcrumbProps,
  type BreadcrumbsProps,
  type LinkProps,
} from 'react-aria-components'

import { cx } from '@/lib/cva.config'

const _Breadcrumbs = <T extends object>({
  className,
  ...props
}: BreadcrumbsProps<T>) => {
  return (
    <Breadcrumbs className={cx('flex flex-wrap gap-1', className)} {...props} />
  )
}

export interface _BreadcrumbItemProps extends BreadcrumbProps {
  separator?: React.ReactNode
}

const _BreadcrumbItem = ({
  separator,
  children,
  ...props
}: _BreadcrumbItemProps) => {
  return (
    <Breadcrumb className="flex items-center gap-1" {...props}>
      {children}
      {separator ? (
        <div aria-hidden="true" className="text-slate-400 dark:text-slate-500">
          {separator}
        </div>
      ) : null}
    </Breadcrumb>
  )
}

const _BreadcrumbLink = ({ children, className, ...props }: LinkProps) => {
  return (
    <Link
      className={cx(
        'text-slate-500 hover:underline current:text-black current:hover:no-underline dark:text-slate-300 dark:current:text-white',
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  )
}

export {
  _Breadcrumbs as Breadcrumbs,
  _BreadcrumbItem as BreadcrumbItem,
  _BreadcrumbLink as BreadcrumbLink,
}
