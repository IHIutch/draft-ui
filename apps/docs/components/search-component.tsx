'use client'

import { useState } from 'react'

import { Search } from 'lucide-react'
import Link from 'next/link'

import { DocSearchModal } from '@docsearch/react'

import '@docsearch/css/dist/style.css'

import { Button, IconButton } from 'ui'

import { cx } from '../lib/cva.config'

export default function SearchComponent() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button
        size="sm"
        variant="outline"
        onPress={() => setIsOpen(true)}
        className="hidden items-center justify-start text-slate-600 md:flex md:w-72"
      >
        <Search className="h-4 w-4" />
        <span className="ml-2 font-normal">Search the docs...</span>
      </Button>
      <IconButton
        onPress={() => setIsOpen(true)}
        aria-label="Search"
        className="md:hidden"
        size="sm"
        variant="ghost"
      >
        <Search size="20" />
      </IconButton>
      {isOpen ? (
        <DocSearchModal
          initialScrollY={window.scrollY}
          appId="PEODP0LKUU"
          indexName="draft-ui"
          apiKey="10b79ceff1a745560608f23d0fcca54a"
          onClose={() => setIsOpen(false)}
          placeholder="Search the docs..."
          hitComponent={Hit}
          transformItems={(items) => {
            return items.map((item, index) => {
              const a = document.createElement('a')
              a.href = item.url

              if (item.hierarchy?.lvl0) {
                item.hierarchy.lvl0 = item.hierarchy.lvl0.replace(/&amp;/g, '&')
              }

              if (item._highlightResult?.hierarchy?.lvl0?.value) {
                item._highlightResult.hierarchy.lvl0.value =
                  item._highlightResult.hierarchy.lvl0.value.replace(
                    /&amp;/g,
                    '&',
                  )
              }

              return {
                ...item,
                url: `${a.pathname}${a.hash}`,
                __is_result: () => true,
                // __is_parent: () =>
                //   item.type === 'lvl1' && items.length > 1 && index === 0,
                // __is_child: () =>
                //   item.type !== 'lvl1' &&
                //   items.length > 1 &&
                //   items[0].type === 'lvl1' &&
                //   index !== 0,
                __is_first: () => index === 1,
                __is_last: () => index === items.length - 1 && index !== 0,
              }
            })
          }}
        />
      ) : null}
    </>
  )
}

const Hit = ({ hit, children }) => {
  return (
    <Link
      href={hit.url}
      className={cx({
        'DocSearch-Hit--Result': hit.__is_result?.(),
        // 'DocSearch-Hit--Parent': hit.__is_parent?.(),
        // 'DocSearch-Hit--Child': hit.__is_child?.(),
        'DocSearch-Hit--FirstChild': hit.__is_first?.(),
        'DocSearch-Hit--LastChild': hit.__is_last?.(),
      })}
    >
      {children}
    </Link>
  )
}
