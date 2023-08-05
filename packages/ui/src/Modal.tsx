'use client'

import { type HTMLAttributes, type ReactNode } from 'react'

import { cva, type VariantProps } from 'class-variance-authority'
import {
  Dialog,
  DialogTrigger,
  Modal,
  ModalOverlay,
  type DialogTriggerProps,
  type ModalOverlayProps,
} from 'react-aria-components'

import { cn } from '@/lib/utils'

export const modalVariants = cva(
  [
    'fill-mode-forwards',
    'mx-auto w-full flex-col rounded bg-white outline-none dark:bg-slate-800',
    // Entering
    'data-[entering]:animate-in data-[entering]:zoom-in-95',
    // Exiting
    'data-[exiting]:animate-in data-[exiting]:zoom-in-95 data-[exiting]:direction-reverse',
  ],
  {
    variants: {
      size: {
        full: 'h-full',
        xl: 'my-16 max-w-[36rem]',
        lg: 'my-16 max-w-[32rem]',
        md: 'my-16 max-w-[28rem]',
        sm: 'my-16 max-w-[24rem]',
        xs: 'my-16 max-w-[20rem]',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  }
)

const _Modal = (props: DialogTriggerProps) => {
  return <DialogTrigger {...props} />
}

export interface _ModalContentProps
  extends ModalOverlayProps,
    VariantProps<typeof modalVariants> {
  className?: string
  children?: ReactNode
}

const _ModalContent = ({
  className,
  size,
  children,
  ...props
}: _ModalContentProps) => {
  return (
    <Modal
      className={cn(
        modalVariants({
          size,
          className,
        })
      )}
      {...props}
    >
      <Dialog className="relative flex h-full flex-col outline-none">
        {children}
      </Dialog>
    </Modal>
  )
}

const _ModalOverlay = ({
  isDismissable = true,
  className,
  ...props
}: ModalOverlayProps) => {
  return (
    <ModalOverlay
      isDismissable={isDismissable}
      className={cn(
        'fill-mode-forwards h-[--visual-viewport-height]',
        'fixed inset-x-0 top-0 z-50 bg-black/60 backdrop-blur-sm transition-all',
        // Entering
        'data-[entering]:animate-in data-[entering]:fade-in data-[entering]:duration-75',
        // Exiting
        'data-[exiting]:animate-in data-[exiting]:fade-in data-[exiting]:direction-reverse',
        className
      )}
      {...props}
    />
  )
}

const _ModalHeader = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
  return (
    <header
      className={cn(
        'px-6 py-4 shrink-0 text-xl font-semibold text-black dark:text-white',
        className
      )}
      {...props}
    />
  )
}

const _ModalBody = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn('px-6 py-2 flex-1', className)} {...props} />
}

const _ModalFooter = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
  return <footer className={cn('px-6 py-4', className)} {...props} />
}

export {
  _Modal as Modal,
  _ModalContent as ModalContent,
  _ModalOverlay as ModalOverlay,
  _ModalHeader as ModalHeader,
  _ModalBody as ModalBody,
  _ModalFooter as ModalFooter,
}
