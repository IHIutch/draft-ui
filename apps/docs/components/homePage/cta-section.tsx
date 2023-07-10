'use client'

import React from 'react'

import Link from 'next/link'

import { buttonVariants } from '@/components/ui'

export default function CtaSection() {
  return (
    <div className="mt-12 flex justify-center gap-4">
      <Link
        href="/getting-started"
        className={buttonVariants({
          size: 'lg',
        })}
      >
        Get Started
      </Link>
      <Link
        href="/docs/components"
        className={buttonVariants({
          size: 'lg',
          variant: 'outline',
        })}
      >
        Components
      </Link>
    </div>
  )
}
