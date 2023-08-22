'use client'

import { useEffect, useState } from 'react'

import { type Component } from 'contentlayer/generated'
import { GithubIcon, MenuIcon, XIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  IconButton,
  iconButtonVariants,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from 'ui'

import { cn } from '@/lib/utils'

import LinkList from './link-list'
import { ModeToggle } from './mode-toggle'
import SearchComponent from './search-component'

export default function Navigation({
  componentList,
}: {
  componentList: Component[]
}) {
  const pathname = usePathname()
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    setIsModalOpen(false)
  }, [pathname])

  const gettingStartedLinks = [
    {
      slug: '/docs/introduction',
      title: 'Introduction',
    },
    {
      slug: '/docs/installation',
      title: 'Installation',
    },
    {
      slug: '/docs/about',
      title: 'About',
    },
    {
      slug: '/docs/changelog',
      title: 'Changelog',
    },
  ]

  return (
    <div className="light:shadow-sm fixed inset-x-0 top-0 z-10 h-14 border-b bg-white dark:border-b dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto flex h-full w-full items-center px-4">
        <Link
          href="/"
          aria-label="Home"
          className="flex items-center gap-2 font-semibold"
        >
          <Image src="/draft_ui.svg" alt="" width={30} height={30} />
          <span>Draft UI</span>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden grow items-center lg:flex">
          <div className="ml-14 flex items-center gap-8">
            <Link
              href="/getting-started"
              className="rounded-sm text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 dark:focus-visible:ring-slate-400 dark:focus-visible:ring-offset-slate-900"
            >
              Getting Started
            </Link>
            <Link
              href="/docs/components"
              className="rounded-sm text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 dark:focus-visible:ring-slate-400 dark:focus-visible:ring-offset-slate-900"
            >
              Components
            </Link>
          </div>
          <div className="ml-auto">
            <div className="flex gap-2">
              <SearchComponent />
              <div>
                <a
                  className={cn(
                    iconButtonVariants({ size: 'sm', variant: 'ghost' }),
                  )}
                  href="https://github.com/IHIutch/draft-ui"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Link to GitHub repository"
                >
                  <GithubIcon size="20" aria-hidden="true" />
                </a>
              </div>
              <div>
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Nav */}
        <div className="flex grow justify-end gap-1 lg:hidden">
          <div className="flex md:grow md:justify-center">
            <SearchComponent />
          </div>
          <div className="flex items-center gap-1">
            <div>
              <a
                className={cn(
                  iconButtonVariants({ size: 'sm', variant: 'ghost' }),
                )}
                href="https://github.com/IHIutch/draft-ui"
                target="_blank"
                rel="noreferrer"
                aria-label="Link to GitHub repository"
              >
                <GithubIcon size="20" aria-hidden="true" />
              </a>
            </div>
            <div>
              <ModeToggle />
            </div>
            <div>
              <IconButton
                aria-label="Open Navigation Menu"
                size="sm"
                variant="ghost"
                onPress={() => setIsModalOpen(true)}
              >
                <MenuIcon size="1em" />
              </IconButton>
              <ModalOverlay
                isDismissable
                isOpen={isModalOpen}
                onOpenChange={setIsModalOpen}
              >
                <ModalContent size="full" className="max-h-full overflow-auto">
                  <ModalHeader>Menu</ModalHeader>
                  <IconButton
                    aria-label="Close Navigation Menu"
                    className="absolute right-3 top-2"
                    size="sm"
                    variant="ghost"
                    onPress={() => setIsModalOpen(false)}
                    autoFocus
                  >
                    <XIcon size="1em" />
                  </IconButton>
                  <ModalBody>
                    <div className="mb-4">
                      <h4 className="text-base font-semibold text-slate-900 dark:text-white">
                        Getting Started
                      </h4>
                      <div className="mt-3 pr-3">
                        <LinkList list={gettingStartedLinks} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-slate-900 dark:text-white">
                        Components
                      </h4>
                      <div className="mt-3 pr-3">
                        <LinkList list={componentList} />
                      </div>
                    </div>
                  </ModalBody>
                </ModalContent>
              </ModalOverlay>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
