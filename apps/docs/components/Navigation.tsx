'use client'

import { useState } from 'react'

import { GithubIcon, MenuIcon, XIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {
  IconButton,
  iconButtonVariants,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from 'ui'

import { type ComponentMetadataProps } from '@/lib/server'
import { cn } from '@/lib/utils'

import LinkList from './LinkList'
import { ModeToggle } from './ModeToggle'
import SearchComponent from './SearchComponent'

export default function Navigation({
  componentList,
}: {
  componentList: ComponentMetadataProps[]
}) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const gettingStartedLinks = [
    {
      slug: '/docs/introduction',
      label: 'Introduction',
    },
    {
      slug: '/docs/installation',
      label: 'Installation',
    },
    {
      slug: '/docs/about',
      label: 'About',
    },
    {
      slug: '/docs/changelog',
      label: 'Changelog',
    },
  ]

  return (
    <div className="fixed inset-x-0 top-0 z-10 h-14 border-b bg-white shadow-sm">
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
            <Link href="/getting-started" className="text-sm font-medium">
              Getting Started
            </Link>
            <Link href="/docs/components" className="text-sm font-medium">
              Components
            </Link>
          </div>
          <div className="ml-auto">
            <div className="flex gap-2">
              <div>
                <SearchComponent />
              </div>
              <div>
                <a
                  className={cn(
                    iconButtonVariants({ size: 'sm', variant: 'ghost' })
                  )}
                  href="https://github.com/IHIutch/draft-ui"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Link to GitHub repository"
                >
                  <GithubIcon size="20" aria-hidden="true" />
                </a>
              </div>
              {/* <div>
                <ModeToggle />
              </div> */}
            </div>
          </div>
        </div>
        {/* Mobile Nav */}
        <div className="flex grow lg:hidden">
          <div className="flex grow justify-center">
            <SearchComponent />
          </div>
          <div className="flex items-center gap-1">
            <div>
              <a
                className={cn(
                  iconButtonVariants({ size: 'sm', variant: 'ghost' })
                )}
                href="https://github.com/IHIutch/draft-ui"
                target="_blank"
                rel="noreferrer"
                aria-label="Link to GitHub repository"
              >
                <GithubIcon size="20" aria-hidden="true" />
              </a>
            </div>
            {/* <div>
              <ModeToggle />
            </div> */}
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
                      <h4 className="text-base font-semibold text-zinc-900 dark:text-white">
                        Getting Started
                      </h4>
                      <div className="mt-3 pr-3">
                        <LinkList list={gettingStartedLinks} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-zinc-900 dark:text-white">
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
