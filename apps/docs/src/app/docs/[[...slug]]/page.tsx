import { allDocs } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import "@/styles/mdx.css"
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
    <div className="relative py-6 lg:gap-10 lg:py-10 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="prose mx-auto w-full min-w-0 max-w-full">
        <Mdx code={doc.body.code} />
      </div>
      <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
          ...toc...
          {/* <DashboardTableOfContents toc={toc} /> */}
        </div>
      </div>
    </div>
  )
}
