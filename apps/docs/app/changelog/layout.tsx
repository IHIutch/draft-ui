import {
  allChangelogDocuments,
  allComponentDocuments,
  allGeneralDocuments,
} from 'contentlayer/generated'
import { notFound } from 'next/navigation'

import JumpToContentMenu from '@/components/docs/jump-to-content-menu'
import LinkList from '@/components/link-list'
import Navigation from '@/components/navigation'

const sortedComponents = allComponentDocuments
  .filter((doc) => doc.isComponent === true)
  .sort((a, b) => a.title.localeCompare(b.title))
  .map((doc) => ({
    isComing: doc?.isComing || false,
    isWip: doc?.isWip || false,
    slug: doc.slug,
    title: doc.title,
  }))

const sortedDocuments = [...allGeneralDocuments, ...allChangelogDocuments]
  .sort((a, b) => a.order - b.order)
  .map((doc) => ({
    isNew: 'isNew' in doc ? doc.isNew : false,
    slug: doc.slug,
    title: doc.title,
  }))

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const post = allChangelogDocuments[0]

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto h-full px-4">
      <JumpToContentMenu toc={post.toc} />
      <Navigation
        gettingStartedList={sortedDocuments}
        componentList={sortedComponents}
      />
      <aside className="fixed top-0 hidden h-full shrink-0 border-r pt-14 dark:border-slate-800 md:w-56 lg:block">
        <nav
          className="-ml-3 h-full overflow-y-auto py-10 pl-3"
          id="site-navigation"
          tabIndex={-1}
        >
          <div className="mb-4">
            <h4 className="text-base font-semibold text-slate-900 dark:text-white">
              Getting Started
            </h4>
            <div className="mt-3 pr-3">
              <LinkList list={sortedDocuments} />
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
        <main className="flex" id="page-content" tabIndex={-1}>
          {children}
          {/* <Footer /> */}
        </main>
      </div>
    </div>
  )
}
