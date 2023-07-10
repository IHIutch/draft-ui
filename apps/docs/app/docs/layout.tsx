import LinkList from '@/components/LinkList'
import Navigation from '@/components/Navigation'
import { getDocsMetadata } from '@/lib/server'

interface DocsLayoutProps {
  children: React.ReactNode
}

export default async function DocsLayout({ children }: DocsLayoutProps) {
  const docsMetadata = await getDocsMetadata()
  const componentList = docsMetadata
    .filter((doc) => doc.frontmatter.isComponent === true)
    .sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title))

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
    <div className="container mx-auto h-full px-4">
      <Navigation componentList={componentList} />
      <aside className="fixed top-0 hidden h-full shrink-0 border-r pt-14 md:w-56 lg:block">
        <nav className="h-full overflow-y-auto py-10">
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
