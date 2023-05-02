'use client'

import '@/styles/globals.css'

import { SSRProvider } from 'react-aria-components'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SSRProvider>{children}</SSRProvider>
      </body>
    </html>
  )
}
