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
    <ComboBox defaultSelectedKey="1" className="w-full">
      <div className="relative">
        <ComboBoxInput />
        <ComboBoxButton size="sm" variant="subtle" className="ml-auto shrink-0">
          <ChevronDown size="16" strokeWidth="3" />
        </ComboBoxButton>
      </div>
      <ComboBoxContent>
        <ComboBoxItem id="1" textValue="Aardvark">
          Aardvark
        </ComboBoxItem>
        <ComboBoxItem id="2" textValue="Cat">
          Cat
        </ComboBoxItem>
        <ComboBoxItem id="3" textValue="Dog">
          Dog
        </ComboBoxItem>
        <ComboBoxItem id="4" textValue="Kangaroo">
          Kangaroo
        </ComboBoxItem>
        <ComboBoxItem id="5" textValue="Panda">
          Panda
        </ComboBoxItem>
        <ComboBoxItem id="6" textValue="Snake">
          Snake
        </ComboBoxItem>
      </ComboBoxContent>
    </ComboBox>
  )
}
