'use client'

import React from 'react'

import Markdoc, { type RenderableTreeNodes } from '@markdoc/markdoc'

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
