import { ChevronDown } from 'lucide-react'
import {
  ComboBox,
  ComboBoxContent,
  ComboBoxInput,
  ComboBoxItem,
  IconButton,
  Label,
} from 'ui'

export default function WithButton() {
  return (
    <ComboBox>
      <Label>Favorite Animal</Label>
      <div className="relative">
        <ComboBoxInput />
        <div className="absolute inset-y-0 right-0 flex items-center p-1">
          <IconButton size="sm" variant="subtle" className="ml-auto shrink-0">
            <ChevronDown size="16" strokeWidth="3" />
          </IconButton>
        </div>
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
