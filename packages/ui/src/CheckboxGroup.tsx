'use client'

import { type HTMLAttributes } from 'react'

import clsx from 'clsx'
import { CheckboxGroup, type CheckboxGroupProps } from 'react-aria-components'

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
      className="flex flex-col"
      {...props}
    />
  )
}

const _CheckboxGroupContent = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={clsx(
        'flex flex-col gap-2',
        'group-[[aria-orientation=horizontal]]:flex-row group-[[aria-orientation=horizontal]]:gap-6',
        'group-[[aria-orientation=vertical]]:flex-col group-[[aria-orientation=vertical]]:gap-2'
      )}
      {...props}
    />
  )
}

export {
  _CheckboxGroup as CheckboxGroup,
  _CheckboxGroupContent as CheckboxGroupContent,
}
