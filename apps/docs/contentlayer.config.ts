import { defineDocumentType, makeSource } from 'contentlayer/source-files'

import { rehypeComponent } from './lib/rehype-component'
import { type ExamplesListItem } from './types'

export const Component = defineDocumentType(() => ({
  name: 'Component',
  filePathPattern: 'docs/components/**/*.mdx',
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
    // examples: {
    //   type: 'json',
    //   resolve: async (doc) => {
    //     try {
    //       const jsonPath = `./generated/examples-list.json`
    //       const json: ExamplesListItem[] = fs.readJSONSync(jsonPath)
    //       const items = json.filter((c) => c.name === doc.title)
    //       return items
    //     } catch (error) {
    //       console.log("Couldn't find stories for", `${doc.title}`)
    //       return {}
    //     }
    //   },
    // },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Component],
  mdx: {
    rehypePlugins: [rehypeComponent],
  },
})
