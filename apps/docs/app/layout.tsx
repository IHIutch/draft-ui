import '@/styles/globals.css'

import { Inter } from 'next/font/google'

import Analytics from '@/components/Analytics'
import Fathom from '@/components/FathomAnalytics'
import ThemeProvider from '@/components/ThemeProvider'

interface DocsLayoutProps {
  children: React.ReactNode
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      {/*
      <head /> will contain the components returned by the nearest parent
      head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
    */}
      <head />
      <body className={`h-full ${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
        <Fathom />
      </body>
    </html>
  )
}
