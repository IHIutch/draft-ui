import Markdoc, { type RenderableTreeNodes } from '@markdoc/markdoc'
import { clsx } from 'clsx'
import React from 'react'

import ComponentExample from './ComponentExample'
import ComponentSource from './ComponentSource'
import { exampleComponents } from './examples'

const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={clsx(
        'mt-2 scroll-m-20 text-4xl font-bold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  ComponentExample,
  ComponentSource,
  ...exampleComponents,
}

export function MarkdocContent({ content }: { content: RenderableTreeNodes }) {
  return (
    <>
      {Markdoc.renderers.react(content, React, {
        components,
      })}
    </>
  )
}
