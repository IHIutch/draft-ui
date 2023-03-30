import { cva } from 'class-variance-authority'
import { type ClassValue } from 'class-variance-authority/dist/types'
import clsx from 'clsx'
import { Label, type LabelProps } from 'react-aria-components/src/Label'

export interface _LabelProps extends Omit<LabelProps, 'className'> {
  className?: ClassValue
}

const _Label = ({ className, ...props }: _LabelProps) => {
  return (
    <Label
      className={clsx(
        'mb-2 mr-3 block font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className
      )}
      {...props}
    />
  )
}

export { _Label as Label }
