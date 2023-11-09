'use client'

import { cx } from 'cva'
import {
  GridList,
  GridListItem,
  type GridListItemProps,
  type GridListProps,
} from 'react-aria-components'

const _GridList = <T extends object>({
  className,
  ...props
}: GridListProps<T>) => {
  return (
    <GridList className={cx('flex flex-col gap-2', className)} {...props} />
  )
}

const _GridListItem = (props: GridListItemProps) => {
  return <GridListItem {...props} />
}

export { _GridList as GridList, _GridListItem as GridListItem }
