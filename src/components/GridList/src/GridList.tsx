import { type ClassValue } from 'class-variance-authority/dist/types'
import { Item } from 'react-aria-components/src/Collection'
import { GridList } from 'react-aria-components/src/GridList'

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
