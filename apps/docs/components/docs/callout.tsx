import * as React from 'react'

import { AlertTriangle, Info, MessageSquare } from 'lucide-react'
import { match } from 'ts-pattern'

export default function Callout({
  type,
  children,
}: {
  type: 'note' | 'warning' | 'important'
  children: React.ReactNode
}) {
  return match(type)
    .with('note', () => (
      <div className="not-prose mb-[2em] flex flex-col gap-2 border-l-4 border-blue-600 bg-blue-50 px-3 py-2 text-sm dark:border-blue-300 dark:bg-blue-400/20">
        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-300">
          <Info size="1rem" />
          <span className="font-semibold">Info</span>
        </div>
        <div className="dark:text-white">{children}</div>
      </div>
    ))
    .with('important', () => (
      <div className="not-prose mb-[2em] flex flex-col gap-2 border-l-4 border-purple-700 bg-purple-50 px-3 py-2 text-sm dark:border-purple-300 dark:bg-purple-400/20">
        <div className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
          <MessageSquare size="1rem" />
          <span className="font-semibold">Important</span>
        </div>
        <div className="dark:text-white">{children}</div>
      </div>
    ))
    .with('warning', () => (
      <div className="not-prose mb-[2em] flex flex-col gap-2 border-l-4 border-yellow-700 bg-yellow-50 px-3 py-2 text-sm dark:border-yellow-300 dark:bg-yellow-400/20">
        <div className="flex items-center gap-2 text-yellow-700 dark:text-yellow-300">
          <AlertTriangle size="1rem" />
          <span className="font-semibold">Warning</span>
        </div>
        <div className="dark:text-white">{children}</div>
      </div>
    ))
    .exhaustive()
}
