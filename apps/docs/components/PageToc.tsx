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
    <ul>
      {headings.map((h, idx) => (
        <li key={idx} className={cn('mt-0 pt-2')}>
          <a
            href={'#' + h.id}
            className={cn(
              'inline-block no-underline transition-colors hover:text-foreground',
              h.id === activeHeading
                ? 'font-medium text-foreground'
                : 'text-muted-foreground',
              h.level === 3 && 'pl-3'
            )}
          >
            {h.title}
          </a>
        </li>
      ))}
    </ul>
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
