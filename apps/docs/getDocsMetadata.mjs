import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'

const contentDir = './content'
const fileMetadata = []

;(function () {
  function traverseDirectory(currentPath) {
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

  return fs.writeFileSync(
    './data/docsMetadata.json',
    JSON.stringify(fileMetadata, null, 2)
  )
})()
