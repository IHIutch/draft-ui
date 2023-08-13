import { allComponents } from 'contentlayer/generated'

import LinkList from '@/components/link-list'
import Navigation from '@/components/navigation'

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const sortedComponents = allComponents
    .filter((doc) => doc.isComponent === true)
    .sort((a, b) => a.title.localeCompare(b.title))

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
    <div className="container mx-auto h-full px-4">
      <Navigation componentList={sortedComponents} />
      <aside className="fixed top-0 hidden h-full shrink-0 border-r pt-14 dark:border-slate-800 md:w-56 lg:block">
        <nav className="h-full overflow-y-auto py-10">
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
              <LinkList list={sortedComponents} />
            </div>
          </div>
        </nav>
      </aside>
      <div className="pt-16 lg:ml-56">
        <main className="flex">
          {children}
          {/* <Footer /> */}
        </main>
      </div>
    </div>
  )
}
