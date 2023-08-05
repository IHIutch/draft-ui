'use client'

import * as React from 'react'

import { Highlight, themes } from 'prism-react-renderer'

import CopyClipboardButton from '../CopyClipboardButton'

// chlidren is raw code string injected from ComponentSource.markdoc.ts
export default function ComponentSource({ children }) {
  const codeString = children

  return (
    <div>
      <h2 className="font-bold">Component Source</h2>
      <div className="relative">
        <div className="absolute right-2 top-2 z-10">
          <CopyClipboardButton text={String(codeString)} />
        </div>
        <Highlight
          theme={themes.nightOwl}
          code={String(codeString)}
          language="tsx"
        >
          {({ style, tokens, getLineProps, getTokenProps }) => (
            <pre style={style} className="relative">
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  )
}
