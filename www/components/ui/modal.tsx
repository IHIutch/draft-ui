import { cva, type VariantProps } from 'class-variance-authority'
import { type ClassValue } from 'class-variance-authority/dist/types'
import { clsx } from 'clsx'
import { type ReactNode } from 'react'
import {
  Modal,
  ModalOverlay,
  type ModalOverlayProps,
} from 'react-aria-components/src/Modal'

const buttonVariants = cva('bg-white rounded mx-auto', {
  variants: {
    size: {
      full: 'w-full h-full',
      xl: 'w-[36rem] my-16',
      lg: 'w-[32rem] my-16',
      md: 'w-[28rem] my-16',
      sm: 'w-[24rem] my-16',
      xs: 'w-[20rem] my-16',
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export interface _ModalProps
  extends Omit<ModalOverlayProps, 'className'>,
    VariantProps<typeof buttonVariants> {
  className?: ClassValue
  children?: ReactNode
}

const _Modal = ({ className, size, ...props }: _ModalProps) => {
  return (
    <Modal
      className={buttonVariants({
        size,
        className,
      })}
      {...props}
    />
  )
}

const _ModalOverlay = ({ className, ...props }: ModalOverlayProps) => {
  return (
    <ModalOverlay
      className={clsx(
        'fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-all',
        '[&_[data-entering]]:animate-in [&_[data-entering]]:fade-in [&_[data-entering]]:zoom-in-75',
        '[&_[data-exiting]]:animate-out [&_[data-exiting]]:fade-out [&_[data-exiting]]:zoom-out-75',
        className
      )}
      {...props}
    />
  )
}

function _ModalHeader({
  className,
  ...props
}: {
  className?: ClassValue
  children: ReactNode
}) {
  return (
    <header
      {...props}
      className={clsx('py-4 px-6 text-xl font-semibold', className)}
    />
  )
}

function _ModalBody({
  className,
  ...props
}: {
  className?: ClassValue
  children: ReactNode
}) {
  return <div {...props} className={clsx('py-2 px-6', className)} />
}

function _ModalFooter({
  className,
  ...props
}: {
  className?: ClassValue
  children: ReactNode
}) {
  return <footer {...props} className={clsx('py-4 px-6', className)} />
}

export {
  _ModalOverlay as ModalOverlay,
  _Modal as ModalContent,
  _ModalHeader as ModalHeader,
  _ModalBody as ModalBody,
  _ModalFooter as ModalFooter,
}
