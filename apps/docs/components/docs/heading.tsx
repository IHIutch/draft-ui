'use client'

import * as React from 'react'

import { type TocItemProps } from '@/types'

interface HeadingProps extends TocItemProps {
  children: React.ReactNode
}

export default function Heading({ slug, lvl, children }: HeadingProps) {
  const headingEl = React.createElement(
    `h${lvl}`,
    {
      id: slug,
      className:
        'mt-0 scroll-mt-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 dark:focus-visible:ring-slate-400 dark:focus-visible:ring-offset-slate-900 rounded-sm',
      tabIndex: -1,
    },
    children,
  )

  return <div className="mt-[2em]">{headingEl}</div>
}
