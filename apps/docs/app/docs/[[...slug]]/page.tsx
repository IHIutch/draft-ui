import { allComponentDocuments } from 'contentlayer/generated'
import { type Metadata, type ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import Markdown from '@/components/docs/markdown'
import EditFeedbackLinks from '@/components/edit-feedback'
import PageToc from '@/components/page-toc'

export async function generateStaticParams() {
  return allComponentDocuments.map((post) => {
    return {
      slug: post._raw.flattenedPath.split('/'),
    }
  })
}

export async function generateMetadata(
  { params }: { params: { slug: string[] } },
  parent?: ResolvingMetadata,
): Promise<Metadata> {
  const post = allComponentDocuments.find((post) => {
    return (
      post._raw.flattenedPath.replace('docs/', '') === params.slug.join('/')
    )
  })

  if (!post) {
    notFound()
  }

  const parentMeta = await parent

  return {
    title: post.title,
    openGraph: {
      siteName: parentMeta?.openGraph?.siteName,
      title: post.title || parentMeta?.openGraph?.title,
      description: post.description || parentMeta?.openGraph?.description,
      images: parentMeta?.openGraph?.images || [],
      url: post.slug,
      locale: parentMeta?.openGraph?.locale,
    },
    twitter: {
      title: post.title || parentMeta?.twitter?.title,
      description: post.description || parentMeta?.twitter?.description || '',
      images: parentMeta?.twitter?.images || [],
      card: 'summary_large_image',
    },
    alternates: {
      canonical: post.slug,
    },
  }
}

export default async function DocPage({
  params,
}: {
  params: { slug: Array<string> }
}) {
  const post = allComponentDocuments.find((post) => {
    return (
      post._raw.flattenedPath.replace('docs/', '') === params.slug.join('/')
    )
  })

  if (!post) {
    notFound()
  }

  return (
    <>
      <div className="order-2 hidden shrink-0 lg:w-1/4 xl:block">
        <div className="fixed top-0 h-screen pt-16">
          <div className="h-full overflow-y-auto">
            <div className="my-12 px-4 md:pl-8">
              <PageToc headings={post.toc} />
              {/* TODO: Fix the spacing on this to separate it from the TOC above */}
              <EditFeedbackLinks post={post} />
            </div>
          </div>
        </div>
      </div>
      <main
        className="order-1 my-12 w-full scroll-mt-20"
        id="page-content"
        tabIndex={-1}
      >
        <div className="prose prose-slate mx-auto dark:prose-invert">
          <h1>{post.title}</h1>
          <p className="lead">{post.description}</p>
          <Markdown doc={post} />
        </div>
      </main>
    </>
  )
}
