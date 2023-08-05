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
        'flex',
        'group-[[aria-orientation=horizontal]]:flex-row group-[[aria-orientation=horizontal]]:gap-6',
        'group-[[aria-orientation=vertical]]:flex-col group-[[aria-orientation=vertical]]:gap-2'
      )}
      {...props}
    />
  )
}

export { _RadioGroup as RadioGroup, _RadioGroupContent as RadioGroupContent }
