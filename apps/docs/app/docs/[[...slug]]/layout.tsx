import Navigation from '@/components/Navigation'
import Sidebar from '@/components/Sidebar'
import { getDocsMetadata } from '@/lib/server'

import '@/styles/globals.css'

interface DocsLayoutProps {
  children: React.ReactNode
}

export default async function DocsLayout({ children }: DocsLayoutProps) {
  const docsMetadata = await getDocsMetadata()
  const componentList = docsMetadata
    .filter((doc) => doc.frontmatter.component === true)
    .sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title))

  return (
    <div className="container mx-auto h-full">
      <Navigation />
      <aside className="fixed top-0 hidden h-full shrink-0 border-r pt-14 md:block md:w-56">
        <nav className="hidden h-full overflow-y-auto py-10 lg:block">
          <h2 className="text-base font-semibold text-zinc-900 dark:text-white">
            Components
          </h2>
          <div className="relative mt-3">
            <Sidebar componentList={componentList} />
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
