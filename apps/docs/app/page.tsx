import Navigation from '@/components/Navigation'
import { getDocsMetadata } from '@/lib/server'

export default async function Home() {
  const docsMetadata = await getDocsMetadata()
  const componentList = docsMetadata
    .filter((doc) => doc.frontmatter.isComponent === true)
    .sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title))

  return (
    <div className="pt-14">
      <Navigation componentList={componentList} />
      <div className="prose mx-auto pt-14">
        <h1>Homepage</h1>
      </div>
    </div>
  )
}
