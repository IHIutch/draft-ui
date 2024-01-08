import {
  GridList,
  GridListItem,
  type GridListItemProps,
  type GridListProps,
} from 'react-aria-components'

import { cx } from '@/lib/cva.config'

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
