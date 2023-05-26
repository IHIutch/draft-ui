import React from 'react'

import { ChevronDown } from 'lucide-react'

import {
  ComboBox,
  ComboBoxButton,
  ComboBoxContent,
  ComboBoxInput,
  ComboBoxItem,
} from '@/components/ui'

export function ComboBoxDefault() {
  return (
    <ComboBox>
      <div className="relative">
        <ComboBoxInput />
        <ComboBoxButton size="sm" variant="subtle" className="ml-auto shrink-0">
          <ChevronDown size="1em" strokeWidth="3" />
        </ComboBoxButton>
      </div>
      <ComboBoxContent>
        <ComboBoxItem textValue="Aardvark">Aardvark</ComboBoxItem>
        <ComboBoxItem textValue="Cat">Cat</ComboBoxItem>
        <ComboBoxItem textValue="Dog">Dog</ComboBoxItem>
        <ComboBoxItem textValue="Kangaroo">Kangaroo</ComboBoxItem>
        <ComboBoxItem textValue="Panda">Panda</ComboBoxItem>
        <ComboBoxItem textValue="Snake">Snake</ComboBoxItem>
      </ComboBoxContent>
    </ComboBox>
  )
}
