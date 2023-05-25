'use client'

import { useState } from 'react'

import clsx from 'clsx'
import { Search } from 'lucide-react'
import Link from 'next/link'

import { DocSearchModal } from '@docsearch/react'

import '@docsearch/css/dist/style.css'

export default function SearchComponent() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="h-full w-full">
      <button
        className="h-full w-full rounded-lg border bg-gray-100 px-4 py-2 text-left text-gray-500 transition-colors"
        onClick={() => setIsOpen(true)}
      >
        <div className="flex items-center">
          <Search className="h-4 w-4" />
          <span className="ml-2">Search the docs...</span>
        </div>
      </button>
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
              // console.log({ item })
              const a = document.createElement('a')
              a.href = item.url

              if (item.hierarchy?.lvl0) {
                item.hierarchy.lvl0 = item.hierarchy.lvl0.replace(/&amp;/g, '&')
              }

              if (item._highlightResult?.hierarchy?.lvl0?.value) {
                item._highlightResult.hierarchy.lvl0.value =
                  item._highlightResult.hierarchy.lvl0.value.replace(
                    /&amp;/g,
                    '&'
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
    </div>
  )
}

const Hit = ({ hit, children }) => {
  return (
    <Link
      href={hit.url}
      className={clsx({
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
