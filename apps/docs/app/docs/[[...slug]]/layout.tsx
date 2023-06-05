import Navigation from '@/components/Navigation'
import NavItems from '@/components/NavItems'
import { getDocsMetadata } from '@/lib/server'

import '@/styles/globals.css'

interface DocsLayoutProps {
  children: React.ReactNode
}

export default async function DocsLayout({ children }: DocsLayoutProps) {
  const docsMetadata = await getDocsMetadata()
  const componentList = docsMetadata
    .filter((doc) => doc.frontmatter.isComponent === true)
    .sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title))

  return (
    <div className="container mx-auto h-full px-4">
      <Navigation componentList={componentList} />
      <aside className="fixed top-0 hidden h-full shrink-0 border-r pt-14 md:w-56 lg:block">
        <nav className="h-full overflow-y-auto py-10">
          <h2 className="text-base font-semibold text-zinc-900 dark:text-white">
            Components
          </h2>
          <div className="relative mt-3 pr-3">
            <NavItems componentList={componentList} />
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
