'use client'

import '@/styles/globals.css'

import { SSRProvider } from 'react-aria-components'

import { ThemeProvider } from '../components/ThemeProvider'

interface DocsLayoutProps {
  children: React.ReactNode
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <html lang="en" className="h-full">
      {/*
      <head /> will contain the components returned by the nearest parent
      head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
    */}
      <head />
      <body className="h-full">
        <SSRProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </SSRProvider>
      </body>
    </html>
  )
}
