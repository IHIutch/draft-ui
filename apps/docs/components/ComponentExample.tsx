import { cn } from '@/lib/utils'
import * as React from 'react'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from 'ui'

// import { Tab, TabList, TabPanel, TabPanels, Tabs } from 'ui' // Tabs aren't working with App dir or pages dir at the moment

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
  const [Example, Code, ...Children] = React.Children.toArray(
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
              <pre className="w-full rounded-md [&_button]:hidden [&_pre]:my-0 [&_pre]:overflow-auto">
                {Code}
              </pre>
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}
