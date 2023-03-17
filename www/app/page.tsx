import { allDocs } from '@/.contentlayer/generated'
import Link from 'next/link'

export default async function Home() {
  return (
    <div>
      <div>
        <span className="text-lg font-medium">Links</span>
      </div>
      <ul>
        {allDocs.map((doc, idx) => (
          <li key={idx}>
            <Link className="text-blue-500 underline" href={doc.slug}>
              {doc.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
