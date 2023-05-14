'use client'

import '@/styles/globals.css'

import clsx from 'clsx'
import { allDocs } from 'contentlayer/generated'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SSRProvider } from 'react-aria-components'

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  const pathname = usePathname()
  const componentList = allDocs.filter((doc) => doc.component === true)

  return (
    <html lang="en" className="h-full">
      {/*
      <head /> will contain the components returned by the nearest parent
      head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
    */}
      <head />
      <body className="h-full">
        <SSRProvider>
          <div className="container mx-auto h-full flex-1">
            <div className="fixed inset-0 z-10 h-14 border-b bg-white shadow-sm">
              <div className="container mx-auto flex h-full items-center">
                <Link href="/" aria-label="Home">
                  {/* <Logo className="h-6" /> */}
                  Draft UI
                </Link>
              </div>
            </div>
            <div className="h-full flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
              <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r border-r-slate-100 dark:border-r-slate-700 md:sticky md:block">
                <div>
                  {/* <Navigation className="hidden lg:mt-10 lg:block" /> */}
                  <nav className="hidden lg:block lg:py-10">
                    <h2 className="text-base font-semibold text-zinc-900 dark:text-white">
                      Components
                    </h2>
                    <div className="relative mt-3">
                      <ul role="list">
                        {componentList.map((doc, idx) => (
                          <li key={idx}>
                            <Link
                              href={doc.slug}
                              aria-current={
                                pathname === doc.slug ? 'page' : undefined
                              }
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
                </div>
              </aside>
              <main className="h-full py-16">
                <article>{children}</article>
                {/* <Footer /> */}
              </main>
            </div>
          </div>
        </SSRProvider>
      </body>
    </html>
  )
}
