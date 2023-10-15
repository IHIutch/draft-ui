import React from 'react'

import { allGeneralDocuments } from 'contentlayer/generated'
import { type Metadata, type ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'

import Markdown from '@/components/docs/markdown'
import PageToc from '@/components/page-toc'

export async function generateStaticParams() {
  return allGeneralDocuments.map((post) => {
    return {
      slug: post._raw.flattenedPath.split('/'),
    }
  })
}

export async function generateMetadata(
  { params }: { params: { slug: string[] } },
  parent?: ResolvingMetadata,
): Promise<Metadata> {
  const post = allGeneralDocuments.find((post) => {
    return (
      post._raw.flattenedPath.replace('getting-started/', '') ===
      params.slug.join('/')
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

export default async function GettingStartedPage({
  params,
}: {
  params: { slug: string[] }
}) {
  const post = allGeneralDocuments.find((post) => {
    return (
      post._raw.flattenedPath.replace('getting-started/', '') ===
      params.slug.join('/')
    )
  })

  if (!post) {
    notFound()
  }

  return (
    <>
      <div className="order-2 hidden shrink-0 pl-4 md:pl-8 lg:w-1/4 xl:block">
        <div className="fixed top-0 h-screen pt-16">
          <div className="h-full overflow-y-auto">
            <div className="my-12 pr-4">
              <PageToc headings={post.toc} />
            </div>
          </div>
        </div>
      </div>
      <article className="my-12 w-full">
        <div className="prose prose-slate order-1 mx-auto dark:prose-invert">
          <h1>{post.title}</h1>
          <p className="lead">{post.description}</p>
          <Markdown doc={post} />
        </div>
      </article>
    </>
  )
}
