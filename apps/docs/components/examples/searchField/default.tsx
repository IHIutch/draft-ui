import { Search } from 'lucide-react'

import { SearchField, SearchFieldInput } from '@/components/ui'

export function SearchFieldDefault() {
  return (
    <SearchField>
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-500"
        >
          <Search size="18" />
        </div>
        <SearchFieldInput className="pl-10" />
      </div>
    </SearchField>
  )
}
