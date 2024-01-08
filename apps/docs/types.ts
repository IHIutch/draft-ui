import { type Node } from 'unist'

export interface UnistNode extends Node {
  type: string
  name?: string
  tagName?: string
  value?: string
  properties?: {
    __rawString__?: string
    __className__?: string
    __event__?: string
    [key: string]: unknown
  } & NpmCommands
  attributes?: {
    name: string
    value: unknown
    type?: string
  }[]
  children?: UnistNode[]
}

export interface UnistTree extends Node {
  children: UnistNode[]
}

export interface NpmCommands {
  __npmCommand__?: string
  __yarnCommand__?: string
  __pnpmCommand__?: string
  __niCommand__?: string
}

export interface ExamplesListItem {
  name: string
  variant: string
  text: string
  functionName: string
}

export interface TocItemProps {
  slug: string
  content: string
  lvl: number
}
