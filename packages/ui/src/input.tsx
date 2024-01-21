import { type VariantProps } from 'cva'
import * as ReactAria from 'react-aria-components'

import { cva, cx } from '../lib/cva.config'

const inputVariants = cva({
  base: [
    'flex w-full border border-slate-300 bg-transparent placeholder:text-slate-400',
    // Focus
    'focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2',
    // Dark
    'dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900',
    // Disabled
    'disabled:cursor-not-allowed disabled:opacity-40',
    // Invalid
    'invalid:border-red-600 dark:invalid:border-red-400',
  ],
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
})

export interface InputProps
  extends Omit<ReactAria.InputProps, 'size'>,
    VariantProps<typeof inputVariants> {
  className?: string
}

export const Input = ({ className, size, ...props }: InputProps) => {
  return (
    <ReactAria.Input
      className={cx(
        inputVariants({
          size,
          className,
        }),
      )}
      {...props}
    />
  )
}
