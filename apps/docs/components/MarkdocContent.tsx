'use client'

import Markdoc, { type RenderableTreeNodes } from '@markdoc/markdoc'
import React from 'react'

import ComponentExample from './ComponentExample'
import ComponentSource from './ComponentSource'
import { exampleComponents } from './examples'
import Heading from './Heading'

const components = {
  Heading,
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
