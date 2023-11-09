'use client'

import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'
import { type TocItemProps } from '@/types'

export default function PageToc({
  headings,
}: {
  headings?: Array<TocItemProps>
}) {
  const activeHeading = useActiveHeading((headings || []).map((h) => h.slug))

  return (
    <nav id="page-navigation" tabIndex={-1}>
      <div className="mb-3">
        <span className="text-base font-semibold text-slate-900 dark:text-white">
          On This Page
        </span>
      </div>
      <ul>
        {(headings || []).map((h, idx) => (
          <li key={idx} className={cn(h.lvl === 3 && 'pl-3')}>
            <a
              href={'#' + h.slug}
              className={cn(
                'block rounded-sm py-1 text-sm no-underline transition',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 dark:focus-visible:ring-slate-400 dark:focus-visible:ring-offset-slate-900',
                h.slug === activeHeading
                  ? 'text-slate-900 dark:text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white',
              )}
            >
              {h.content}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

function useActiveHeading(itemIds: string[]) {
  const [activeId, setActiveId] = useState<null | string>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: `0% 0% -80% 0%` },
    )

    itemIds?.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      itemIds?.forEach((id) => {
        const element = document.getElementById(id)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [itemIds])

  return activeId
}
