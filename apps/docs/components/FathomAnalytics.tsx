// Fathom.tsx
'use client'

import { Suspense, useEffect } from 'react'

import { load, trackPageview } from 'fathom-client'
import { usePathname, useSearchParams } from 'next/navigation'

function TrackPageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  useEffect(() => {
    load('ERIJKXRN', {
      includedDomains: ['draft-ui.vercel.app'],
      auto: false,
    })
  }, [])

  // Record a pageview when route changes
  useEffect(() => {
    trackPageview()
  }, [pathname, searchParams])

  return null
}

export default function Fathom() {
  return (
    <Suspense fallback={null}>
      <TrackPageView />
    </Suspense>
  )
}
