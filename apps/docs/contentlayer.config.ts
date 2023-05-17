import { type Doc as DocType } from 'contentlayer/generated'
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

import { rehypeComponent } from './lib/rehypeComponent'

export const Doc = defineDocumentType(() => ({
  name: 'Doc',
  filePathPattern: 'docs/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the post',
      required: true,
    },
    component: {
      type: 'boolean',
      default: false,
      required: false,
    },
    isNew: {
      type: 'boolean',
      default: false,
      required: false,
    },
    // srcPath: {
    //   type: "string",
    //   required: false,
    // },
    // storyPath: {
    //   type: "string",
    //   required: false,
    // },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc: DocType) => {
        return `/${doc._raw.flattenedPath}`
      },
    },
    slugAsParams: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
    },
  },
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Doc],
  mdx: {
    remarkPlugins: [],
    rehypePlugins: [rehypeComponent],
  },
})
