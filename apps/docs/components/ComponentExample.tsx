import { cn } from '@/lib/utils'
import { Highlight, themes } from 'prism-react-renderer'
import * as React from 'react'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from 'ui'

// import { Tab, TabList, TabPanel, TabPanels, Tabs } from 'ui' // Tabs aren't working with App dir or pages dir at the moment

interface ComponentExampleProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'center' | 'start' | 'end'
}

export default function ComponentExample({
  children,
  className,
  align = 'center',
  ...props
}: ComponentExampleProps) {
  const [Example, Code] = React.Children.toArray(children) as [
    React.ReactElement,
    string
  ]

  return (
    <div {...props}>
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
          <TabPanel id="code" className="px-0">
            <div>
              <Highlight theme={themes.nightOwl} code={Code} language="tsx">
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
