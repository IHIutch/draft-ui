'use client'

import { cva, type VariantProps } from 'class-variance-authority'
import { Button, type ButtonProps } from 'react-aria-components'

const iconButtonVariants = cva(
  'inline-flex items-center justify-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900 dark:data-[state=open]:bg-slate-800',
  {
    variants: {
      variant: {
        solid:
          'bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900',
        destructive:
          'bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600',
        outline:
          'border border-slate-200 bg-transparent hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100',
        subtle:
          'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100',
        ghost:
          'bg-transparent hover:bg-slate-100 data-[state=open]:bg-transparent dark:text-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:data-[state=open]:bg-transparent',
        link: 'bg-transparent text-slate-900 underline-offset-4 hover:bg-transparent hover:underline dark:bg-transparent dark:text-slate-100 dark:hover:bg-transparent',
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
  }
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
      className={iconButtonVariants({
        variant,
        size,
        className,
      })}
      {...props}
    />
  )
}

export { _IconButton as IconButton, iconButtonVariants }
