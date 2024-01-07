'use client'

import React from 'react'

import { type DocumentTypes } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { Tab, TabList, TabPanel, Tabs } from 'ui'

import Callout from '@/components/docs/callout'
import ComponentExample from '@/components/docs/component-example'
import ComponentSource from '@/components/docs/component-source'
import Heading from '@/components/docs/heading'
import { cx } from '@/lib/cva.config'

type MarkdownProps = {
  doc: DocumentTypes
}

export default function Markdown(props: MarkdownProps) {
  const { doc } = props
  const MDXComponent = useMDXComponent(doc.body.code)
  return (
    <div>
      <MDXComponent
        components={{
          ComponentSource,
          ComponentExample,
          Callout,
          Heading,
          Tabs,
          TabList,
          Tab,
          TabPanel,
          code: ({
            className,
            ...props
          }: React.HTMLAttributes<HTMLElement>) => (
            <code
              className={cx(
                // 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm',
                className,
              )}
              {...props}
            />
          ),
        }}
      />
    </div>
  )
}
