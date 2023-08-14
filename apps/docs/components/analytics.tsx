'use client'

import { Analytics as VercelAnalytics } from '@vercel/analytics/react'

import Fathom from './fathom-analytics'

export default function Analytics() {
  return (
    <>
      <Fathom />
      <VercelAnalytics />
    </>
  )
}
