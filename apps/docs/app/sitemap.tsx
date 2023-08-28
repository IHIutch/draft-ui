import { allDocuments } from 'contentlayer/generated'
import { type MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://draft-ui.vercel.app'
  const urls = allDocuments.map((post) => {
    return { url: siteUrl + post.slug }
  })

  return [
    {
      url: siteUrl,
    },
    ...urls,
  ]
}
