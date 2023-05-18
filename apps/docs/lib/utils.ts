import { exampleTags } from '@/components/examples'
import heading from '@/markdoc/nodes/heading.markdoc'
import ComponentExample from '@/markdoc/tags/ComponentExample.markdoc'
import ComponentSource from '@/markdoc/tags/ComponentSource.markdoc'
import Markdoc from '@markdoc/markdoc'
import { clsx, type ClassValue } from 'clsx'
import * as matter from 'gray-matter'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function getDocContent(path: string) {
  const contentDir = './content' + path
  const { data: frontmatter, content: fileContent } = matter.read(
    `${contentDir}.mdx`
  )

  const ast = Markdoc.parse(fileContent)
  const content = Markdoc.transform(ast, {
    tags: {
      ComponentExample,
      ComponentSource,
      ...exampleTags,
    },
    nodes: {
      heading,
    },
  })
  const headings = getHeadings(content)

  return { content, frontmatter, headings }
}

export const getHeadings = (
  node: any,
  sections: { id: string; title: string; level: number }[] = []
) => {
  if (node?.name) {
    // 'Heading' is defined in markdoc/node/heading.ts
    if (node.name.match('Heading')) {
      const title = node.children[0]

      if (typeof title === 'string') {
        sections.push({
          ...node.attributes,
          title,
        })
      }
    }

    if (node.children) {
      for (const child of node.children) {
        getHeadings(child, sections)
      }
    }
  }

  return sections
}
