'use client'

import { cx } from 'cva'
import {
  GridList,
  Item,
  type GridListProps,
  type ItemProps,
} from 'react-aria-components'

const _GridList = <T extends object>({
  className,
  ...props
}: GridListProps<T>) => {
  return (
    <GridList className={cx('flex flex-col gap-2', className)} {...props} />
  )
}

const _GridListItem = (props: ItemProps) => {
  return <Item {...props} />
}

export { _GridList as GridList, _GridListItem as GridListItem }
