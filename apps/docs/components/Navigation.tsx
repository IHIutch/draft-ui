'use client'

import { Github } from 'lucide-react'
import Link from 'next/link'

import { cn } from '@/lib/utils'

import SearchComponent from './SearchComponent'
import { iconButtonVariants } from './ui'

export default function Navigation() {
  return (
    <div className="fixed inset-x-0 top-0 z-10 h-14 border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-full items-center">
        <div>
          <Link href="/" aria-label="Home" className="font-semibold">
            Draft UI
          </Link>
        </div>
        <div className="ml-14">
          <Link href="/docs/components" className="font-semibold">
            Components
          </Link>
        </div>
        <div className="pl-4">
          <SearchComponent />
        </div>
        <div className="ml-auto">
          <Link
            className={cn(iconButtonVariants({ size: 'sm', variant: 'ghost' }))}
            href="https://github.com/IHIutch/draft-ui"
            target="_blank"
            rel="noreferrer"
          >
            <Github size="20" aria-label="Link to GitHub repository" />
          </Link>
        </div>
      </div>
    </div>
  )
}
