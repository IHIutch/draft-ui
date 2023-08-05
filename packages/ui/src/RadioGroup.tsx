'use client'

import * as React from 'react'

import { RadioGroup, type RadioGroupProps } from 'react-aria-components'

import { cn } from '@/lib/utils'

const _RadioGroup = (props: RadioGroupProps) => {
  return <RadioGroup className="group" {...props} />
}

const _RadioGroupContent = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={cn(
        'flex flex-wrap gap-x-6 gap-y-2',
        'group-[[aria-orientation=horizontal]]:flex-row',
        'group-[[aria-orientation=vertical]]:flex-col'
      )}
      {...props}
    />
  )
}

export { _RadioGroup as RadioGroup, _RadioGroupContent as RadioGroupContent }
