import { defineDocumentType, makeSource } from 'contentlayer/source-files'
// @ts-ignore
import toc from 'markdown-toc'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'
import { visit } from 'unist-util-visit'

import { rehypeComponent } from './lib/rehype-component'
import { withTableOfContents } from './lib/remark/with-table-of-contents'
import { type TocItemProps } from './types'

export const ComponentDocument = defineDocumentType(() => ({
  name: 'ComponentDocument',
  filePathPattern: 'components/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
    isComponent: {
      type: 'boolean',
    },
    isWip: {
      type: 'boolean',
    },
    isComing: {
      type: 'boolean',
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => `/docs/${post._raw.flattenedPath}`,
    },
    toc: {
      type: 'json',
      resolve: (doc): TocItemProps => toc(doc.body.raw, { maxdepth: 3 }).json,
    },
  },
}))

export const GeneralDocument = defineDocumentType(() => ({
  name: 'GeneralDocument',
  filePathPattern: 'getting-started/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    isNew: {
      type: 'boolean',
    },
    order: {
      type: 'number',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => `/${post._raw.flattenedPath}`,
    },
    toc: {
      type: 'json',
      resolve: (doc): TocItemProps => toc(doc.body.raw, { maxdepth: 3 }).json,
    },
  },
}))

export const ChangelogDocument = defineDocumentType(() => ({
  name: 'ChangelogDocument',
  filePathPattern: 'CHANGELOG.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    order: {
      type: 'number',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: () => '/changelog',
    },
    toc: {
      type: 'json',
      resolve: (doc): TocItemProps => toc(doc.body.raw, { maxdepth: 2 }).json,
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [ComponentDocument, ChangelogDocument, GeneralDocument],
  mdx: {
    rehypePlugins: [
      rehypeComponent,
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === 'element' && node?.tagName === 'pre') {
            const [codeEl] = node.children
            if (codeEl.tagName !== 'code') {
              return
            }

            if (codeEl.data?.meta) {
              // Extract event from meta and pass it down the tree.
              const regex = /event="([^"]*)"/
              const match = codeEl.data?.meta.match(regex)
              if (match) {
                node.__event__ = match ? match[1] : null
                codeEl.data.meta = codeEl.data.meta.replace(regex, '')
              }
            }

            node.__rawString__ = codeEl.children?.[0].value
            node.__src__ = node.properties?.__src__
            node.__style__ = node.properties?.__style__
          }
        })
      },
      [
        // @ts-expect-error related: https://github.com/atomiks/rehype-pretty-code/issues/145
        rehypePrettyCode,
        {
          theme: 'dracula',
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
          onVisitHighlightedLine(node) {
            node.properties?.className?.push('line--highlighted')
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ['word--highlighted']
          },
        },
      ],
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === 'element' && node?.tagName === 'figure') {
            if (!('data-rehype-pretty-code-figure' in node.properties)) {
              return
            }

            // Pass code snippet to figure wrapper
            if (node.__rawString__) {
              node.properties['__rawString__'] = node.__rawString__
            }

            // npm install
            if (node.__rawString__?.startsWith('npm install')) {
              const npmCommand = node.__rawString__
              node.properties['__npmCommand__'] = npmCommand
              node.properties['__yarnCommand__'] = npmCommand.replace(
                'npm install',
                'yarn add',
              )
              node.properties['__pnpmCommand__'] = npmCommand.replace(
                'npm install',
                'pnpm add',
              )
              node.properties['__niCommand__'] = npmCommand.replace(
                'npm install',
                'ni',
              )
            }

            // npx
            if (node.__rawString__?.startsWith('npx')) {
              const npmCommand = node.__rawString__
              node.properties['__npmCommand__'] = npmCommand
              node.properties['__yarnCommand__'] = npmCommand
              node.properties['__pnpmCommand__'] = npmCommand.replace(
                'npx',
                'pnpm dlx',
              )
              node.properties['__niCommand__'] = npmCommand.replace(
                'npx',
                'nlx',
              )
            }
          }
        })
      },
    ],
    remarkPlugins: [remarkGfm, withTableOfContents],
  },
})
