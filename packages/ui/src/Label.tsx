'use client'

import { Label, type LabelProps } from 'react-aria-components'

import { cn } from '@/lib/utils'

export interface _LabelProps extends Omit<LabelProps, 'className'> {
  className?: string
}

const _Label = ({ className, ...props }: _LabelProps) => {
  return (
    <Label
      className={cn(
        'mb-2 mr-3 block font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className
      )}
      {...props}
    />
  )
}

export { _Label as Label }
