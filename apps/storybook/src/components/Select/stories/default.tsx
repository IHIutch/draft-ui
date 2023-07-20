import * as React from 'react'

import { ChevronDown } from 'lucide-react'
import {
  Button,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from 'ui'

export default function Default() {
  return (
    <>
      <Select>
        <Label>Favorite Animal</Label>
        <Button
          variant="outline"
          className="flex w-full items-center justify-between font-normal"
        >
          <SelectValue>
            {({ selectedText }) => (
              <span>{selectedText || 'Select an item'}</span>
            )}
          </SelectValue>
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
    </>
  )
}
