import React from 'react'

import { type DocumentTypes } from 'contentlayer/generated'
import { useMDXComponent } from 'next-contentlayer/hooks'

import Callout from '@/components/docs/callout'
import ComponentExample from '@/components/docs/ComponentExample'
import ComponentSource from '@/components/docs/ComponentSource'
import Heading from '@/components/docs/Heading'

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
        }}
      />
    </div>
  )
}
