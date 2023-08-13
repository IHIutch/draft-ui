import { Search } from 'lucide-react'
import {
  Label,
  SearchField,
  SearchFieldClearButton,
  SearchFieldInput,
} from 'ui'

export default function WithClearButton() {
  return (
    <SearchField>
      <Label>Search</Label>
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-500 dark:text-slate-400"
        >
          <Search size="18" />
        </div>
        <SearchFieldInput className="px-10" />
        <div className="absolute inset-y-0 right-0 flex items-center p-1">
          <SearchFieldClearButton variant="subtle" size="sm" />
        </div>
      </div>
    </SearchField>
  )
}
