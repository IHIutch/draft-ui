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
import { type NpmCommands } from '@/types'

import CopyClipboardButton from '../copy-clipboard-button'

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
          figure: ({
            className,
            __npmCommand__,
            __yarnCommand__,
            __pnpmCommand__,
            __niCommand__,
            __rawString__,
            ...props
          }: React.HTMLAttributes<HTMLElement> & {
            __rawString__?: string
          } & NpmCommands) => (
            <>
              {/* TODO: Introduce buttons that let you choose package manager */}
              <div className="relative [&_figure]:my-0 [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
                <div className="absolute right-2 top-2 z-10">
                  <CopyClipboardButton text={__rawString__ || ''} />
                </div>
                <figure className={cx(className)} {...props} />
              </div>
            </>
          ),
        }}
      />
    </div>
  )
}
