import fs from 'fs'
import path from 'path'

import { Tag, type Config, type Node } from '@markdoc/markdoc'

const ComponentSource = {
  render: 'ComponentSource',
  attributes: {
    src: { type: String },
  },
  transform(node: Node, config: Config) {
    const attributes = node.transformAttributes(config)
    const children = node.transformChildren(config)

    const filePath = path.join(process.cwd(), attributes.src)
    const source = fs.readFileSync(filePath, 'utf8')

    children.push(source)

    return new Tag(this.render, { ...node.attributes }, children)
  },
}

export default ComponentSource
