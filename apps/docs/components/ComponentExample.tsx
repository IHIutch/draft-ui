'use client'

import * as React from 'react'

import { Highlight, themes } from 'prism-react-renderer'
import { Tab, TabList, TabPanel, Tabs } from 'ui'

import { Index } from '@/__registry__'
// import { DynamicImport } from '@/generated/dynamic-import';
import { cn } from '@/lib/utils'
import { type ExamplesListItem } from '@/types'

import CopyClipboardButton from './CopyClipboardButton'

interface ComponentExampleProps extends React.HTMLAttributes<HTMLDivElement> {
  // example: ExamplesListItem
  align?: 'center' | 'start' | 'end'
  name: string
  example: string
}

export default function ComponentExample({
  align = 'center',
  name,
  example,
  children,
}: ComponentExampleProps) {
  const [codeString] = React.Children.toArray(children) as React.ReactElement[]

  const Example = React.useMemo(() => {
    const Component = Index[name][example]?.component
    if (!Component) {
      return (
        <p className="text-muted-foreground text-sm">
          Component{' '}
          <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {name}
          </code>{' '}
          not found in registry.
        </p>
      )
    }

    return <Component />
  }, [name, example])

  return (
    <div>
      <Tabs disabledKeys={['Emp']}>
        <TabList aria-label="History of Ancient Rome">
          <Tab id="example">Example</Tab>
          <Tab id="code">Code</Tab>
        </TabList>
        <TabPanel id="example" className="px-0">
          <div className="not-prose rounded-md border dark:border-slate-700 dark:bg-slate-800">
            <div
              className={cn('flex min-h-[350px] justify-center p-10', {
                'items-center': align === 'center',
                'items-start': align === 'start',
                'items-end': align === 'end',
              })}
            >
              {/* <DynamicImport name={example.name} variant={example.example} /> */}
              <React.Suspense fallback={null}>{Example}</React.Suspense>
            </div>
          </div>
        </TabPanel>
        <TabPanel id="code" className="px-0">
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
                <pre style={style} className="my-0">
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
        </TabPanel>
      </Tabs>
    </div>
  )
}
