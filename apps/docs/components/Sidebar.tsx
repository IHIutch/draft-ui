'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { type ComponentMetadataProps } from '@/lib/server'
import { cn } from '@/lib/utils'

export default function Sidebar({
  componentList,
}: {
  componentList: ComponentMetadataProps[]
}) {
  const pathname = usePathname()

  return (
    <ul role="list">
      {componentList.map((comp, idx) => (
        <li key={idx}>
          <Link
            href={comp.slug}
            aria-current={pathname === comp.slug ? 'page' : undefined}
            className={cn(
              'flex justify-between gap-2 py-1 pr-3 text-sm transition',
              pathname === comp.slug
                ? 'font-semibold text-zinc-900 dark:text-white'
                : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
            )}
          >
            <span className="truncate">{comp.frontmatter.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
