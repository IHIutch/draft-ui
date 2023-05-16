import fs from 'fs'
import path from 'path'

import { exampleTags } from '@/components/examples'
import ComponentExample from '@/markdoc/tags/ComponentExample.markdoc'
import ComponentSource from '@/markdoc/tags/ComponentSource.markdoc'
import Markdoc from '@markdoc/markdoc'
import { clsx, type ClassValue } from 'clsx'
import * as matter from 'gray-matter'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

interface DocsMetaData {
  slug?: string
  frontmatter?: any
}

export function getDocsMetadata() {
  const contentDir = './content'
  const fileMetadata: DocsMetaData[] = []

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
    // nodes: {
    //   heading,
    // },
  })
  // const headings = getHeadings(content)

  return { content, frontmatter, headings: [] }
}
