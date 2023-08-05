import { defineDocumentType, makeSource } from 'contentlayer/source-files'
// @ts-ignore
import toc from 'markdown-toc'
import remarkGfm from 'remark-gfm'

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
    rehypePlugins: [rehypeComponent],
    remarkPlugins: [remarkGfm, withTableOfContents],
  },
})
