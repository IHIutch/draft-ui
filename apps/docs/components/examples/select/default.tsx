import { ChevronDown } from 'lucide-react'

import {
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from '@/components/ui'

export function SelectDefault() {
  return (
    <Select className="w-full">
      <Button
        variant="outline"
        className="flex w-full items-center justify-between gap-2 font-normal"
      >
        <SelectValue />
        <ChevronDown size="16" strokeWidth="3" />
      </Button>
      <SelectContent>
        <SelectItem textValue="Aardvark">Aardvark</SelectItem>
        <SelectItem textValue="Cat">Cat</SelectItem>
        <SelectItem textValue="Dog">Dog</SelectItem>
        <SelectItem textValue="Kangaroo">Kangaroo</SelectItem>
        <SelectItem textValue="Panda">Panda</SelectItem>
        <SelectItem textValue="Snake">Snake</SelectItem>
      </SelectContent>
    </Select>
  )
}
