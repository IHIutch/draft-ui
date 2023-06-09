'use client'

import { type HTMLAttributes } from 'react'

import { CheckboxGroup, type CheckboxGroupProps } from 'react-aria-components'

import { cn } from '@/lib/utils'

interface _CheckboxGroupProps extends CheckboxGroupProps {
  orientation?: 'horizontal' | 'vertical'
}

const _CheckboxGroup = ({
  orientation = 'vertical',
  ...props
}: _CheckboxGroupProps) => {
  return (
    <CheckboxGroup
      data-orientation={orientation}
      className="group"
      {...props}
    />
  )
}

const _CheckboxGroupContent = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'flex',
        'group-[[data-orientation=horizontal]]:flex-row group-[[data-orientation=horizontal]]:gap-6',
        'group-[[data-orientation=vertical]]:flex-col group-[[data-orientation=vertical]]:gap-2'
      )}
      {...props}
    />
  )
}

export {
  _CheckboxGroup as CheckboxGroup,
  _CheckboxGroupContent as CheckboxGroupContent,
}
