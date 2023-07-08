'use client'

import { createElement, type ReactNode } from 'react'

export default function Heading({
  id,
  level,
  children,
}: {
  id: string
  level: number
  children: ReactNode
}) {
  const headingEl = createElement(
    `h${level}`,
    { id, className: 'mt-0 scroll-mt-24' },
    children
  )

  return (
    <div className="mt-[2em]">
      {/* <Tooltip.Provider>
        <Tooltip.Root open={isToolTipVisible}>
          <Tooltip.Trigger asChild>
            <button
              type="button"
              className="mb-1 flex items-center text-sm font-semibold text-green-600 underline transition-colors hover:text-green-700"
              onClick={copyLinkToClipboard}
            >
              <LinkIcon strokeWidth="3" className="h-[0.875rem] w-[0.875rem]" />
              <div>
                <span className="ml-1">Share Section</span>
              </div>
            </button>
          </Tooltip.Trigger>
          <Tooltip.Content
            className={clsx(
              'rdx-tooltip',
              'inline-flex items-center rounded-md px-2 py-1',
              'bg-gray-800 text-xs text-white'
            )}
          >
            Copied to clipboard
          </Tooltip.Content>
        </Tooltip.Root>
      </Tooltip.Provider> */}
      {headingEl}
    </div>
  )
}
