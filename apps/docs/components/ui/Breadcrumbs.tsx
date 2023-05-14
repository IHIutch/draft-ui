'use client'

import { Breadcrumbs, Item, Link } from 'react-aria-components'

const _Breadcrumbs = (props: any) => {
  return (
    <Breadcrumbs
      className="[&_ol]:flex [&_ol]:flex-wrap [&_ol]:gap-1"
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
