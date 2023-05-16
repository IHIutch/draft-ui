import { MarkdocContent } from '@/components/MarkdocContent'
import DocsLayout from '@/layouts/DocsLayout'
import { getDocContent, getDocsMetadata } from '@/lib/utils'

export async function getStaticPaths() {
  const slugs = getDocsMetadata()
  return {
    paths: slugs.map((s) => s.slug),
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {
  const slug = '/docs/' + params?.slug?.join('/')
  const { content, frontmatter } = getDocContent(slug)
  return {
    props: {
      content: JSON.stringify(content),
      frontmatter: JSON.stringify(frontmatter),
    },
  }
}

export default function DocPage({ content, frontmatter }) {
  const fm = JSON.parse(frontmatter)
  return (
    <>
      <article className="my-12 flex grow">
        <div className="prose mx-auto">
          <h1>{fm.title}</h1>
          <p className="lead">{fm.description}</p>
          <MarkdocContent content={JSON.parse(content)} />
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
