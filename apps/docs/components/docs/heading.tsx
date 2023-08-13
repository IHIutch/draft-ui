'use client'

import * as React from 'react'

import { type Toc } from '@/types'

interface HeadingProps extends Toc {
  children: React.ReactNode
}

export default function Heading({ slug, lvl, children }: HeadingProps) {
  const headingEl = React.createElement(
    `h${lvl}`,
    { id: slug, className: 'mt-0 scroll-mt-20' },
    children,
  )

  return <div className="mt-[2em]">{headingEl}</div>
}
