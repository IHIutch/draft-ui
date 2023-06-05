'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { type ComponentMetadataProps } from '@/lib/server'
import { cn } from '@/lib/utils'

export default function NavItems({
  componentList,
}: {
  componentList: ComponentMetadataProps[]
}) {
  const pathname = usePathname()

  return (
    <ul role="list">
      {componentList.map((comp, idx) => (
        <li key={idx}>
          {comp.frontmatter.isComing ? (
            <div
              className={cn(
                'flex items-center justify-between gap-2 py-1 text-sm transition cursor-not-allowed text-zinc-400 dark:text-zinc-400 dark:hover:text-white'
              )}
            >
              <span className="truncate">{comp.frontmatter.title}</span>
              <span className="rounded bg-black px-1 text-xs font-medium text-white">
                Coming Soon
              </span>
            </div>
          ) : (
            <Link
              href={comp.slug}
              aria-current={pathname === comp.slug ? 'page' : undefined}
              className={cn(
                'flex items-center justify-between gap-2 py-1 text-sm transition',
                pathname === comp.slug
                  ? 'font-semibold text-zinc-900 dark:text-white'
                  : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
              )}
            >
              <span className="truncate">{comp.frontmatter.title}</span>
              {comp.frontmatter.isWip ? (
                <span className="rounded bg-slate-200 px-1 text-xs font-medium text-slate-700">
                  WIP
                </span>
              ) : null}
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}
