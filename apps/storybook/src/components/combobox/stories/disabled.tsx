import { ChevronDown } from 'lucide-react'
import {
  ComboBox,
  ComboBoxButton,
  ComboBoxContent,
  ComboBoxInput,
  ComboBoxItem,
  iconButtonVariants,
  Label,
} from 'ui'

export default function Disabled() {
  return (
    <ComboBox isDisabled>
      <Label>Favorite Animal</Label>
      <div className="relative">
        <ComboBoxInput />
        <div className="absolute inset-y-0 right-0 flex items-center p-1">
          <ComboBoxButton
            className={iconButtonVariants({
              variant: 'subtle',
              size: 'sm',
              className: 'ml-auto shrink-0',
            })}
          >
            <ChevronDown size="16" strokeWidth="3" />
          </ComboBoxButton>
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
