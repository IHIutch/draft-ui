'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import { Button, type ButtonProps } from 'react-aria-components'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center rounded-md font-semibold outline-none transition-colors',
    'focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        solid:
          'bg-slate-900 text-white hover:bg-slate-700 data-[state=open]:bg-slate-100 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200 dark:data-[state=open]:bg-slate-800',
        destructive:
          'bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600',
        outline:
          'border border-slate-200 bg-transparent hover:bg-slate-100 focus:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700',
        subtle:
          'bg-slate-100 text-slate-900 hover:bg-slate-200 focus:bg-slate-200 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700',
        ghost:
          'bg-transparent hover:bg-slate-100 focus:bg-slate-100 data-[state=open]:bg-transparent dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:focus:bg-slate-800 dark:focus:text-slate-100 dark:data-[state=open]:bg-transparent',
        link: 'bg-transparent text-slate-900 underline-offset-4 hover:bg-transparent hover:underline focus:bg-transparent focus:underline dark:bg-transparent dark:text-slate-100 dark:hover:bg-transparent dark:focus:bg-transparent',
      },
      size: {
        lg: 'h-12 px-6 text-lg',
        md: 'h-10 px-4 text-base',
        sm: 'h-8 px-3 text-sm',
        xs: 'h-6 px-2 text-xs',
      },
    },
    defaultVariants: {
      variant: 'solid',
      size: 'md',
    },
  }
)

export interface _ButtonProps
  extends ButtonProps,
    VariantProps<typeof buttonVariants> {
  className?: string
}

const _Button = ({ className, variant, size, ...props }: _ButtonProps) => {
  return (
    <Button
      className={cn(
        buttonVariants({
          variant,
          size,
          className,
        })
      )}
      {...props}
    />
  )
}

export { _Button as Button, buttonVariants }
