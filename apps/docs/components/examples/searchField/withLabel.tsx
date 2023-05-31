import {
  Label,
  SearchField,
  SearchFieldClearButton,
  SearchFieldInput,
} from '@/components/ui'

export function SearchFieldWithLabel() {
  return (
    <SearchField>
      <Label>Search</Label>
      <div className="relative">
        <SearchFieldInput className="pr-10" />
        <SearchFieldClearButton variant="subtle" size="sm" />
      </div>
    </SearchField>
  )
}
