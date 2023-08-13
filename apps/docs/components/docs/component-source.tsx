'use client'

import * as React from 'react'

import CopyClipboardButton from '../copy-clipboard-button'

export default function ComponentSource({ children }) {
  const [Code] = React.Children.toArray(children) as React.ReactElement[]

  const codeString = React.useMemo(() => {
    if (
      typeof Code?.props['data-rehype-pretty-code-fragment'] !== 'undefined'
    ) {
      const [Button] = React.Children.toArray(
        Code.props.children,
      ) as React.ReactElement[]

      return Button?.props?.value || Button?.props?.__rawString__ || null
    }
  }, [Code])

  return (
    <div className="relative [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
      <div className="absolute right-2 top-2 z-10">
        <CopyClipboardButton text={String(codeString)} />
      </div>
      {Code}
    </div>
  )
}
