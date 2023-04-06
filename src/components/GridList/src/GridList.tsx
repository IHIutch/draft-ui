import { type ClassValue } from 'class-variance-authority/dist/types'
import { GridList, Item } from 'react-aria-components'

// export interface _MenuProps
//   extends VariantProps<typeof buttonVariants> {
//   className?: ClassValue
// }

const _GridList = (props) => {
  return <GridList {...props} />
}

const _GridListItem = (props) => {
  return <Item {...props} />
}

export { _GridList as GridList, _GridListItem as GridListItem }
