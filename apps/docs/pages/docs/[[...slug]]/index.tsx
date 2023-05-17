import { allDocs, type Doc } from '@/.contentlayer/generated'
import { MdxContent } from '@/components/MdxContent'
import DocsLayout from '@/layouts/DocsLayout'
import { type GetStaticPaths, type GetStaticProps } from 'next'

export const getStaticPaths: GetStaticPaths = () => {
  const paths = allDocs.map((doc) => ({
    params: { slug: doc.slugAsParams.split('/') },
  }))

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = ({ params }) => {
  const slug = params?.slug?.join('/')
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)

  if (!doc) {
    return {
      notFound: true,
    }
  }

  return {
    props: { doc },
  }
}

export default function DocPage({ doc }: { doc: Doc }) {
  return (
    <>
      <article className="my-12 flex grow">
        <div className="prose mx-auto">
          <h1>{doc.title}</h1>
          <p className="lead">{doc.description}</p>
          <MdxContent code={doc.body.code} />
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

DocPage.getLayout = function getLayout(page) {
  return <DocsLayout>{page}</DocsLayout>
}
