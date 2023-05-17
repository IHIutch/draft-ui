import fs from 'fs'
import path from 'path'

import { type UnistNode } from 'types/unist'
import { u } from 'unist-builder'
import { visit } from 'unist-util-visit'

export function rehypeComponent() {
  return async (tree: any) => {
    visit(tree, (node: UnistNode) => {
      if (node.name === 'ComponentExample') {
        const source = getComponentSourceFileContent(node)
        if (!source) {
          return
        }

        // Inject source code text into component as child
        node.children?.push(
          u('element', {
            type: 'text',
            value: source,
          })
        )
      }

      if (node.name === 'ComponentSource') {
        const source = getComponentSourceFileContent(node)

        if (!source) {
          return
        }

        // Inject source code text into component as child
        node.children?.push(
          u('element', {
            type: 'text',
            value: source,
          })
        )
      }
    })
  }
}

function getNodeAttributeByName(node: UnistNode, name: string) {
  return node.attributes?.find((attribute) => attribute.name === name)
}

function getComponentSourceFileContent(node: UnistNode) {
  const src = getNodeAttributeByName(node, 'src')?.value as string

  if (!src) {
    return null
  }

  // Read the source file.
  const filePath = path.join(process.cwd(), src)
  const source = fs.readFileSync(filePath, 'utf8')

  return source
}
