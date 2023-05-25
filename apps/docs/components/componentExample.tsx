import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@/components/ui/Tabs'
import { cn } from '@/lib/utils'
import { Highlight, themes } from 'prism-react-renderer'
import * as React from 'react'

interface ComponentExampleProps extends React.HTMLAttributes<HTMLDivElement> {
  extractClassname?: boolean
  extractedClassNames?: string
  align?: 'center' | 'start' | 'end'
  src?: string
}

export default function ComponentExample({
  children,
  className,
  align = 'center',
  src: _,
  ...props
}: ComponentExampleProps) {
  const [Example, Code, ..._Children] = React.Children.toArray(
    children
  ) as React.ReactElement[]

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
          <TabPanel id="code">
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
