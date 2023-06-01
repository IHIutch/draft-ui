'use client'

import '@/styles/globals.css'

import Script from 'next/script'
import { SSRProvider } from 'react-aria-components'

import Fathom from '@/components/FathomAnalytics'
import ThemeProvider from '@/components/ThemeProvider'

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      {/*
      <head /> will contain the components returned by the nearest parent
      head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
    */}
      <head />
      <body className="h-full">
        <SSRProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </SSRProvider>
        <Script
          src="https://cdn.usefathom.com/script.js"
          data-site="ERIJKXRN"
          data-included-domains="draft-ui.vercel.app"
          defer
        />
      </body>
    </html>
  )
}
