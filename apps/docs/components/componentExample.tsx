import { cn } from '@/lib/utils'
import * as React from 'react'

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
  // extractClassname,
  // extractedClassNames,
  align = 'center',
  src: _, // src is used to inject code snippet into {Code} section below
  ...props
}: ComponentExampleProps) {
  const [Example, Code, ...Children] = React.Children.toArray(
    children
  ) as React.ReactElement[]
  console.log({ Example, Code, Children })

  return (
    <div {...props}>
      <div>
        <h4>Example</h4>
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
      </div>
      <div>
        <h4>Code</h4>
        <div className="w-full rounded-md [&_button]:hidden [&_pre]:my-0 [&_pre]:overflow-auto">
          {Code}
        </div>
      </div>
    </div>
  )
}
