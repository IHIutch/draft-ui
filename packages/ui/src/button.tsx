import { type VariantProps } from 'cva'
import * as ReactAria from 'react-aria-components'

import { cva, cx } from '@/lib/cva.config'

export const buttonVariants = cva({
  base: [
    'inline-flex items-center justify-center rounded-md font-semibold outline-none transition-colors',
    // Focus
    'focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900',
    // Disabled
    'disabled:pointer-events-none disabled:opacity-40',
  ],
  variants: {
    variant: {
      solid:
        'bg-slate-900 text-white open:bg-slate-100 hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900 dark:open:bg-slate-800 dark:hover:bg-slate-200',
      destructive:
        'bg-red-600 text-white hover:bg-red-700 dark:hover:bg-red-700',
      outline:
        'border border-slate-200 bg-transparent hover:bg-slate-100 focus:bg-slate-100 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700',
      subtle:
        'bg-slate-100 text-slate-900 hover:bg-slate-200 focus:bg-slate-200 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-700 dark:focus:bg-slate-700',
      ghost:
        'bg-transparent open:bg-transparent hover:bg-slate-100 focus:bg-slate-100 dark:text-slate-100 dark:open:bg-transparent dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:focus:bg-slate-800 dark:focus:text-slate-100',
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
})

export interface ButtonProps
  extends ReactAria.ButtonProps,
    VariantProps<typeof buttonVariants> {
  className?: string
}

export const Button = ({ className, variant, size, ...props }: ButtonProps) => {
  return (
    <ReactAria.Button
      className={cx(
        buttonVariants({
          variant,
          size,
          className,
        }),
      )}
      {...props}
    />
  )
}
