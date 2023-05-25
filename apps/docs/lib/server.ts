'use server'

import fs from 'fs'
import path from 'path'

import { exampleTags } from '@/components/examples'
import heading from '@/markdoc/nodes/heading.markdoc'
import ComponentExample from '@/markdoc/tags/ComponentExample.markdoc'
import ComponentSource from '@/markdoc/tags/ComponentSource.markdoc'
import Markdoc from '@markdoc/markdoc'
import matter from 'gray-matter'

export async function getDocContent(path: string) {
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
  const headings = await getHeadings(content)

  return { content, frontmatter, headings }
}

export async function getHeadings(
  node: any,
  sections: { id: string; title: string; level: number }[] = []
) {
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

export interface ComponentMetadataProps {
  slug: string
  frontmatter: {
    title: string
    description: string
    component: boolean
  }
}

export async function getDocsMetadata() {
  const contentDir = './content'
  const fileMetadata: ComponentMetadataProps[] = []

  function traverseDirectory(currentPath: string) {
    const files = fs.readdirSync(currentPath)

    files.forEach((file) => {
      const filePath = path.join(currentPath, file)
      const stat = fs.statSync(filePath)

      if (stat.isDirectory()) {
        traverseDirectory(filePath) // Recursively traverse subdirectories
      } else if (path.extname(filePath) === '.mdx') {
        const { data: frontmatter } = matter.read(filePath)

        const fileNameWithoutExt = filePath
          .replace('.mdx', '')
          .replace('content', '') // Remove file extension
        fileMetadata.push({
          slug: fileNameWithoutExt,
          frontmatter,
        }) // Add file path to the array
      }
    })
  }

  traverseDirectory(contentDir)

  return fileMetadata
}
