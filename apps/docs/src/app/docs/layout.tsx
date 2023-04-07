'use client'

import { allDocs } from 'contentlayer/generated'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  const pathname = usePathname()
  const componentList = allDocs.filter((doc) => doc.component === true)

  return (
    <div className="container mx-auto flex-1">
      <div className="flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r border-r-slate-100 dark:border-r-slate-700 md:sticky md:block">
          <div className="">
            <div className="hidden lg:flex">
              <Link href="/" aria-label="Home">
                {/* <Logo className="h-6" /> */}
                Draft UI
              </Link>
            </div>
            {/* <Navigation className="hidden lg:mt-10 lg:block" /> */}
            <nav className="hidden lg:mt-10 lg:block">
              <h2 className="text-md font-semibold text-zinc-900 dark:text-white">
                Components
              </h2>
              <div className="relative mt-3 pl-2">
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
        <main className="py-16">
          <article>{children}</article>
          {/* <Footer /> */}
        </main>
      </div>
    </div>
  )
}
