import { defineDocumentType, makeSource } from 'contentlayer/source-files'
// @ts-ignore
import toc from 'markdown-toc'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'
import { getHighlighter } from 'shiki'
import { visit } from 'unist-util-visit'

import { rehypeComponent } from './lib/rehype-component'
import { withTableOfContents } from './lib/remark/withTableOfContents'
import { type Toc } from './types'

export const Component = defineDocumentType(() => ({
  name: 'Component',
  filePathPattern: 'components/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string' },
    isComponent: { type: 'boolean' },
    isWip: { type: 'boolean' },
    isComing: { type: 'boolean' },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (post) => `/docs/${post._raw.flattenedPath}`,
    },
    toc: {
      type: 'json',
      resolve: (doc): Toc => toc(doc.body.raw, { maxdepth: 3 }).json,
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Component],
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
        rehypePrettyCode,
        {
          getHighlighter: async () => {
            return await getHighlighter({ theme: 'dracula' })
          },
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push('line--highlighted')
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ['word--highlighted']
          },
        },
      ],
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === 'element' && node?.tagName === 'div') {
            if (!('data-rehype-pretty-code-fragment' in node.properties)) {
              return
            }

            const preElement = node.children.at(-1)
            if (preElement.tagName !== 'pre') {
              return
            }

            preElement.properties['__withMeta__'] =
              node.children.at(0).tagName === 'div'
            preElement.properties['__rawString__'] = node.__rawString__

            if (node.__src__) {
              preElement.properties['__src__'] = node.__src__
            }

            if (node.__event__) {
              preElement.properties['__event__'] = node.__event__
            }

            if (node.__style__) {
              preElement.properties['__style__'] = node.__style__
            }
          }
        })
      },
    ],
    remarkPlugins: [remarkGfm, withTableOfContents],
  },
})
