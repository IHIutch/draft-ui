import '@/styles/globals.css'

import { type Metadata } from 'next'
import { Inter } from 'next/font/google'

import Analytics from '@/components/analytics'
import ThemeProvider from '@/components/theme-provider'

interface DocsLayoutProps {
  children: React.ReactNode
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export function generateMetadata(): Metadata {
  const siteName = 'Draft UI'
  const siteUrl = 'https://draft-ui.com'
  const description =
    'A collection of simply designed React components focused on making web accessibility as easy as copy & paste'
  const imageUrl = '/meta.jpg'
  const imageAlt =
    'Draft UI is a collection of simply designed React components focused on making web accessibility as easy as copy & paste'
  return {
    metadataBase: new URL(siteUrl),
    title: {
      template: `%s · ${siteName}`,
      default: siteName,
    },
    description,
    openGraph: {
      siteName,
      title: {
        template: `%s · ${siteName}`,
        default: siteName,
      },
      description,
      url: '/',
      images: {
        url: imageUrl,
        alt: imageAlt,
      },
      type: 'website',
      locale: 'US_en',
    },
    twitter: {
      title: {
        template: `%s · ${siteName}`,
        default: siteName,
      },
      description,
      images: {
        url: imageUrl,
        alt: imageAlt,
      },
      card: 'summary_large_image',
    },
    verification: {
      google: 'hsAvKsU0gaaI6wN1wUtrHAEMVQORMU08rUqYQHMj1x0',
    },
    alternates: {
      canonical: '/',
    },
  }
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      {/*
      <head /> will contain the components returned by the nearest parent
      head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
    */}
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <head />
      <body className={`h-full dark:bg-slate-900 ${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
