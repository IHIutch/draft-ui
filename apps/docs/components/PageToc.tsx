'use client'

import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils'

export default function PageToc({
  headings,
}: {
  headings: { title: string; id: string; level: number }[]
}) {
  const activeHeading = useActiveHeading(headings.map((h) => h.id))

  return (
    <div>
      <div className="mb-3">
        <span className="text-base font-semibold text-slate-900 dark:text-white">
          On This Page
        </span>
      </div>
      <ul>
        {headings.map((h, idx) => (
          <li key={idx}>
            <a
              href={'#' + h.id}
              className={cn(
                'inline-block no-underline transition text-sm py-1',
                h.id === activeHeading
                  ? 'text-slate-900 dark:text-white'
                  : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white',
                h.level === 3 && 'pl-3'
              )}
            >
              {h.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function useActiveHeading(itemIds: string[]) {
  const [activeId, setActiveId] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: `0% 0% -80% 0%` }
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
