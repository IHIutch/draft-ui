'use client'

import { type Component } from 'contentlayer/generated'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

type LinkListItemProps = Pick<
  Component,
  'title' | 'slug' | 'isWip' | 'isComing'
>

export default function LinkList({ list }: { list: LinkListItemProps[] }) {
  const pathname = usePathname()

  return (
    <ul role="list">
      {list.map((link, idx) => (
        <li key={idx}>
          <Link
            role="link"
            aria-disabled={!!link?.isComing}
            aria-current={pathname === link.slug ? 'page' : undefined}
            // @ts-ignore
            href={link?.isComing ? '' : link.slug}
            onClick={(e) => {
              if (!!link?.isComing) {
                e.preventDefault()
              }
            }}
            className={cn(
              'flex items-center justify-between gap-2 py-1 text-sm transition ',
              pathname === link.slug
                ? 'font-medium dark:text-white text-slate-900'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white',
              link?.isComing &&
                'cursor-not-allowed text-slate-400 hover:text-slate-400 dark:text-slate-600 dark:hover:text-slate-600',
            )}
          >
            <span className="truncate">{link.title}</span>

            {link?.isComing ? (
              <span className="rounded bg-black px-1 text-xs font-medium text-white dark:bg-slate-400 dark:text-slate-900">
                Coming Soon
              </span>
            ) : link?.isWip ? (
              <span className="rounded bg-slate-200 px-1 text-xs font-medium text-slate-700 dark:bg-slate-700 dark:text-white">
                WIP
              </span>
            ) : null}
          </Link>
        </li>
      ))}
    </ul>
  )
}
