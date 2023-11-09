'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import { Button, type ButtonProps } from 'react-aria-components'

import { cn } from '@/lib/utils'

const iconButtonVariants = cva(
  [
    'inline-flex items-center justify-center rounded-md font-semibold outline-none transition-colors',
    // Focus
    'focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900',
    // Disabled
    'disabled:pointer-events-none disabled:opacity-40',
  ],
  {
    variants: {
      variant: {
        solid: [
          // Base
          'bg-slate-900 text-white dark:bg-slate-50 dark:text-slate-900',
          // Hover
          'hover:bg-slate-700 dark:hover:bg-slate-200',
          // Focus
          'focus:bg-slate-700 dark:focus:bg-slate-200',
          // Open
          'open:bg-slate-100 dark:open:bg-slate-800',
        ],
        destructive: [
          // Base
          'bg-red-500 text-white',
          // Hover
          'hover:bg-red-600 dark:hover:bg-red-600',
          // Focus
          'focus:bg-red-600 dark:focus:bg-red-600',
          // Open
          '',
        ],
        outline: [
          // Base
          'border border-slate-200 bg-transparent dark:border-slate-700 dark:text-slate-100',
          // Hover
          'hover:bg-slate-100 dark:hover:bg-slate-700',
          // Focus
          'focus:bg-slate-100 dark:focus:bg-slate-700',
          // Open
          '',
        ],
        subtle: [
          // Base
          'bg-slate-100 text-slate-900 dark:bg-slate-700 dark:text-slate-100',
          // Hover
          'hover:bg-slate-200 dark:hover:bg-slate-600',
          // Focus
          'focus:bg-slate-200 dark:focus:bg-slate-600',
          // Open
          '',
        ],
        ghost: [
          // Base
          'bg-transparent dark:text-slate-100',
          // Hover
          'hover:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-100',
          // Focus
          'focus:bg-slate-100 dark:focus:bg-slate-800 dark:focus:text-slate-100',
          // Open
          'open:bg-transparent dark:open:bg-transparent',
        ],
        link: [
          // Base
          'bg-transparent text-slate-900 underline-offset-4 dark:bg-transparent dark:text-slate-100',
          // Hover
          'hover:bg-transparent hover:underline dark:hover:bg-transparent',
          // Focus
          'focus:bg-transparent focus:underline dark:focus:bg-transparent',
          // Open
          '',
        ],
      },
      size: {
        lg: 'h-12 w-12 rounded-lg text-3xl',
        md: 'h-10 w-10 rounded-md text-2xl',
        sm: 'h-8 w-8 rounded px-1 text-xl',
        xs: 'h-6 w-6 rounded px-1 text-lg',
      },
    },
    defaultVariants: {
      variant: 'solid',
      size: 'md',
    },
  },
)

export interface _IconButtonProps
  extends ButtonProps,
    VariantProps<typeof iconButtonVariants> {
  className?: string
  'aria-label': string
}

const _IconButton = ({
  className,
  variant,
  size,
  ...props
}: _IconButtonProps) => {
  return (
    <Button
      className={cn(
        iconButtonVariants({
          variant,
          size,
          className,
        }),
      )}
      {...props}
    />
  )
}

export { _IconButton as IconButton, iconButtonVariants }
