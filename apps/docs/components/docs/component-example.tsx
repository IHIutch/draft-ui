'use client'

import * as React from 'react'

import { Tab, TabList, TabPanel, Tabs } from 'ui'

import { Index } from '@/__registry__'
import { cx } from '@/lib/cva.config'

import CopyClipboardButton from '../copy-clipboard-button'

interface ComponentExampleProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'center' | 'start' | 'end'
  name: string
  story: string
}

export default function ComponentExample({
  align = 'center',
  name,
  story,
  children,
}: ComponentExampleProps) {
  const [Code] = React.Children.toArray(children) as React.ReactElement[]

  const codeString = React.useMemo(() => {
    if (
      typeof Code?.props['data-rehype-pretty-code-fragment'] !== 'undefined'
    ) {
      const [codeToCopy] = React.Children.toArray(
        Code.props.children,
      ) as React.ReactElement[]

      return codeToCopy?.props?.__rawString__ || null
    }
  }, [Code])

  const Story = React.useMemo(() => {
    const Component = Index[name]?.[story]?.component
    if (!Component) {
      return (
        <p className="text-muted-foreground text-sm">
          {name}{' '}
          <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm">
            &quot;{story}&quot;
          </code>{' '}
          not found in registry.
        </p>
      )
    }

    return <Component />
  }, [name, story])

  return (
    <div>
      <Tabs>
        <TabList aria-label="History of Ancient Rome">
          <Tab id="example">Example</Tab>
          <Tab id="code">Code</Tab>
        </TabList>
        <TabPanel id="example" className="px-0">
          <div className="not-prose overflow-x-auto rounded-md border dark:border-slate-700 dark:bg-slate-800">
            <div
              className={cx(
                'flex min-h-[350px] min-w-[max-content] justify-center p-10',
                {
                  'items-center': align === 'center',
                  'items-start': align === 'start',
                  'items-end': align === 'end',
                },
              )}
            >
              {/* <div className="w-[max-content] px-4"> */}
              <React.Suspense fallback={null}>{Story}</React.Suspense>
              {/* </div> */}
            </div>
          </div>
        </TabPanel>
        <TabPanel id="code" className="px-0">
          <div className="relative [&_pre]:mt-0">
            <div className="absolute right-2 top-2 z-10">
              <CopyClipboardButton text={String(codeString)} />
            </div>
            {Code}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  )
}
