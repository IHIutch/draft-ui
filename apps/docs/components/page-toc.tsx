'use client'

import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'
import { type Toc } from '@/types'

export default function PageToc({ headings }: { headings?: Toc[] }) {
  const activeHeading = useActiveHeading((headings || []).map((h) => h.slug))

  return (
    <div>
      <div className="mb-3">
        <span className="text-base font-semibold text-slate-900 dark:text-white">
          On This Page
        </span>
      </div>
      <ul>
        {(headings || []).map((h, idx) => (
          <li key={idx}>
            <a
              href={'#' + h.slug}
              className={cn(
                'inline-block no-underline transition text-sm py-1',
                h.slug === activeHeading
                  ? 'text-slate-900 dark:text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white',
                h.lvl === 3 && 'pl-3',
              )}
            >
              {h.content}
            </a>
          </li>
        ))}
      </ul>
    </div>
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
