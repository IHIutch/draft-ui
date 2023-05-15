import { allDocs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

import '@/styles/mdx.css'

import { Mdx } from '@/components/mdx'

// import { getTableOfContents } from "@/lib/toc";

interface DocPageProps {
  params: {
    slug: string[]
  }
}

export async function generateStaticParams(): Promise<
  DocPageProps['params'][]
> {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split('/'),
  }))
}

export default async function DocPage({ params }: DocPageProps) {
  const slug = params?.slug?.join('/') || ''
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)

  if (!doc) {
    notFound()
  }

  return (
    <>
      <article className="my-12 flex grow">
        <div className="prose mx-auto">
          <h1>{doc.title}</h1>
          <p className="lead">{doc.description}</p>
          <Mdx code={doc.body.code} />
        </div>
      </article>
      <div className="hidden shrink-0 pl-4 md:pl-8 lg:w-1/4 xl:block">
        <div className="fixed top-0 h-screen pt-16">
          <div className="h-full overflow-y-auto">
            <div className="my-12 pr-4">
              ...toc...
              {/* <DashboardTableOfContents toc={toc} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
