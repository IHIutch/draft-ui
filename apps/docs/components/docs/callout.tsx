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
      <div className="not-prose flex flex-col gap-2 border-l-4 border-blue-600 bg-blue-50 px-3 py-2 text-sm">
        <div className="flex items-center gap-2 text-blue-600">
          <Info size="1rem" />
          <span className="font-semibold">Info</span>
        </div>
        <div>{children}</div>
      </div>
    ))
    .with('important', () => (
      <div className="not-prose flex flex-col gap-2 border-l-4 border-purple-700 bg-purple-50 px-3 py-2 text-sm">
        <div className="flex items-center gap-2 text-purple-700">
          <MessageSquare size="1rem" />
          <span className="font-semibold">Important</span>
        </div>
        <div>{children}</div>
      </div>
    ))
    .with('warning', () => (
      <div className="not-prose flex flex-col gap-2 border-l-4 border-yellow-700 bg-yellow-50 px-3 py-2 text-sm">
        <div className="flex items-center gap-2 text-yellow-700">
          <AlertTriangle size="1rem" />
          <span className="font-semibold">Warning</span>
        </div>
        <div>{children}</div>
      </div>
    ))
    .exhaustive()
}
