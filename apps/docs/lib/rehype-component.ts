import fs from 'fs'
import path from 'path'

import { u } from 'unist-builder'
import { visit } from 'unist-util-visit'

import { type UnistNode, type UnistTree } from '@/types'

import { Index } from '../__registry__'

export function rehypeComponent() {
  return async (tree: UnistTree) => {
    visit(tree, (node: UnistNode) => {
      if (node.name === 'ComponentSource') {
        const src = getNodeAttributeByName(node, 'src')?.value as string
        if (!src) {
          return null
        }

        try {
          // Read the source file.
          const filePath = path.join(process.cwd(), src)
          const source = fs.readFileSync(filePath, 'utf8')

          node.children?.push(
            u('element', {
              // tagName: 'pre',
              // properties: {
              //   __src__: src,
              // },
              // children: [
              //   u('element', {
              //     tagName: 'code',
              //     properties: {
              //       className: ['language-tsx'],
              //     },
              //     children: [
              // {
              type: 'text',
              value: source,
              // },
              //     ],
              //   }),
              // ],
            })
          )
        } catch (error) {
          console.error(error)
        }
      }

      if (node.name === 'ComponentExample') {
        const name = getNodeAttributeByName(node, 'name')?.value as string
        const example = getNodeAttributeByName(node, 'example')?.value as string

        if (!name || !example) {
          console.log('❌ name or example prop not passed on ComponentExample')
          return null
        }

        try {
          const component = Index[name][example]
          const src = component.file

          // Read the source file.
          const filePath = path.join(process.cwd(), src)
          const source = fs.readFileSync(filePath, 'utf8')

          node.children?.push(
            u('element', {
              // tagName: 'pre',
              // properties: {
              //   __src__: src,
              // },
              // children: [
              //   u('element', {
              //     tagName: 'code',
              //     properties: {
              //       className: ['language-tsx'],
              //     },
              //     children: [
              //       {
              type: 'text',
              value: source,
              //         },
              //       ],
              //     }),
              //   ],
            })
          )
        } catch (error) {
          console.error(error)
        }
      }
    })
  }
}

function getNodeAttributeByName(node: UnistNode, name: string) {
  return node.attributes?.find((attribute) => attribute.name === name)
}
