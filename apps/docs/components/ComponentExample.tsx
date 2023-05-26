import * as React from 'react'

import { Highlight, themes } from 'prism-react-renderer'

import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@/components/ui/Tabs'
import { cn } from '@/lib/utils'

import CopyClipboardButton from './CopyClipboardButton'

// chlidren contains raw code string injected from ComponentExample.markdoc.ts
interface ComponentExampleProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'center' | 'start' | 'end'
}

export default function ComponentExample({
  children,
  align = 'center',
}: ComponentExampleProps) {
  const [Example, Code] = React.Children.toArray(
    children
  ) as React.ReactElement[]

  return (
    <div>
      <Tabs>
        <TabList aria-label="History of Ancient Rome" disabledKeys={['Emp']}>
          <Tab id="example">Example</Tab>
          <Tab id="code">Code</Tab>
        </TabList>
        <TabPanels>
          <TabPanel id="example" className="px-0">
            <div className="rounded-md border">
              <div
                className={cn('flex min-h-[350px] justify-center p-10', {
                  'items-center': align === 'center',
                  'items-start': align === 'start',
                  'items-end': align === 'end',
                })}
              >
                {Example}
              </div>
            </div>
          </TabPanel>
          <TabPanel id="code">
            <div className="relative">
              <div className="absolute right-2 top-2 z-10">
                <CopyClipboardButton text={String(Code)} />
              </div>
              <Highlight
                theme={themes.nightOwl}
                code={String(Code)}
                language="tsx"
              >
                {({
                  // className,
                  style,
                  tokens,
                  getLineProps,
                  getTokenProps,
                }) => (
                  <pre style={style} className="my-0">
                    {tokens.map((line, i) => (
                      <div key={i} {...getLineProps({ line })}>
                        {/* <span>{i + 1}</span> */}
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
        </TabPanels>
      </Tabs>
    </div>
  )
}
