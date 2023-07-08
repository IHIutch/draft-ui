'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { type ComponentMetadataProps } from '@/lib/server'
import { cn } from '@/lib/utils'

interface LinkListItemProps extends Partial<ComponentMetadataProps> {
  label?: string
  slug: string
}

export default function LinkList({ list }: { list: LinkListItemProps[] }) {
  const pathname = usePathname()

  return (
    <ul role="list">
      {list.map((link, idx) => (
        <li key={idx}>
          <Link
            role="link"
            aria-disabled={!!link?.frontmatter?.isComing}
            aria-current={pathname === link.slug ? 'page' : undefined}
            href={link?.frontmatter?.isComing ? '' : link.slug}
            onClick={(e) => {
              if (!!link?.frontmatter?.isComing) {
                e.preventDefault()
              }
            }}
            className={cn(
              'flex items-center justify-between gap-2 py-1 text-sm transition ',
              pathname === link.slug
                ? 'font-semibold  dark:text-white text-zinc-900'
                : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white',
              link?.frontmatter?.isComing &&
                'cursor-not-allowed text-zinc-400 hover:text-zinc-400'
            )}
          >
            <span className="truncate">
              {link.label || link?.frontmatter?.title}
            </span>

            {link?.frontmatter?.isComing ? (
              <span className="rounded bg-black px-1 text-xs font-medium text-white">
                Coming Soon
              </span>
            ) : link?.frontmatter?.isWip ? (
              <span className="rounded bg-slate-200 px-1 text-xs font-medium text-slate-700">
                WIP
              </span>
            ) : null}
          </Link>
        </li>
      ))}
    </ul>
  )
}
