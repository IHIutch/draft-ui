'use client'

import Navigation from '@/components/navigation'

import '@/styles/globals.css'

import clsx from 'clsx'
import { allDocs } from 'contentlayer/generated'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  const pathname = usePathname()
  const componentList = allDocs
    .filter((doc) => doc.component === true)
    .sort((a, b) => a.title.localeCompare(b.title))

  return (
    <div className="container mx-auto h-full">
      <Navigation />
      <aside className="fixed top-0 hidden h-full shrink-0 border-r pt-14 md:block md:w-56">
        <nav className="hidden h-full overflow-y-auto py-10 lg:block">
          <h2 className="text-base font-semibold text-zinc-900 dark:text-white">
            Components
          </h2>
          <div className="relative mt-3">
            <ul role="list">
              {componentList.map((doc, idx) => (
                <li key={idx}>
                  <Link
                    href={doc.slug}
                    aria-current={pathname === doc.slug ? 'page' : undefined}
                    className={clsx(
                      'flex justify-between gap-2 py-1 pr-3 text-sm transition',
                      pathname === doc.slug
                        ? 'text-zinc-900 dark:text-white'
                        : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
                    )}
                  >
                    <span className="truncate">{doc.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>
      <div className="pl-10 pt-20 md:ml-56 md:pt-16">
        <main className="flex">
          {children}
          {/* <Footer /> */}
        </main>
      </div>
    </div>
  )
}
