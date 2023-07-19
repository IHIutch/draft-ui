import { Search } from 'lucide-react'
import { SearchFieldInput } from 'ui'

export default function Default() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-500"
      >
        <Search size="18" />
      </div>
      <SearchFieldInput className="px-10" />
    </div>
  )
}
