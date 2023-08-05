import { notFound } from 'next/navigation'

import { allComponents } from '@/.contentlayer/generated'
import Markdown from '@/components/docs/markdown'
import PageToc from '@/components/PageToc'
import { getDocContent, getDocsMetadata } from '@/lib/server'

interface DocPageProps {
  params: {
    slug: string[]
  }
}

export async function generateStaticParams(): Promise<
  DocPageProps['params'][]
> {
  const docs = await getDocsMetadata()
  return docs.map((doc) => {
    return {
      slug: doc.slug.replace('/docs/', '').split('/'),
    }
  })
}

export default async function DocPage({ params }: DocPageProps) {
  const slug = '/docs/' + params?.slug?.join('/')
  const doc = await getDocContent(slug)

  const post = allComponents.find((post) => {
    return (
      post._raw.flattenedPath.replace('docs/', '') === params.slug.join('/')
    )
  })

  if (!doc || !post) {
    notFound()
  }

  return (
    <>
      <article className="my-12 w-full">
        <div className="prose prose-slate dark:prose-invert mx-auto">
          <h1>{post.title}</h1>
          <p className="lead">{post.description}</p>
          <Markdown doc={post} />
        </div>
      </article>
      <div className="hidden shrink-0 pl-4 md:pl-8 lg:w-1/4 xl:block">
        <div className="fixed top-0 h-screen pt-16">
          <div className="h-full overflow-y-auto">
            <div className="my-12 pr-4">
              <PageToc headings={doc.headings} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
