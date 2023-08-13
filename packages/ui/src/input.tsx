'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import { Input, type InputProps } from 'react-aria-components'

import { cn } from '@/lib/utils'

const inputVariants = cva(
  [
    'flex w-full border bg-transparent placeholder:text-slate-400',
    // Focus
    'focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2',
    // Dark
    'dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900',
    // Disabled
    'disabled:cursor-not-allowed disabled:opacity-40',
    // Invalid
    'aria-[invalid]:border-red-500',
  ],
  {
    variants: {
      size: {
        lg: 'h-12 rounded-lg px-4 text-lg',
        md: 'h-10 rounded-md px-4 text-base',
        sm: 'h-8 rounded px-3 text-sm',
        xs: 'h-6 rounded px-2 text-xs',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

export interface _InputProps
  extends Omit<InputProps, 'size'>,
    VariantProps<typeof inputVariants> {
  className?: string
}

const _Input = ({ className, size, ...props }: _InputProps) => {
  return (
    <Input
      className={cn(
        inputVariants({
          size,
          className,
        }),
      )}
      {...props}
    />
  )
}

export { _Input as Input }
