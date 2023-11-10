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

export default function DisabledKeys() {
  return (
    <ComboBox disabledKeys={['cat', 'kangaroo']}>
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
        <ComboBoxItem id="aardvark" textValue="Aardvark">
          Aardvark
        </ComboBoxItem>
        <ComboBoxItem id="cat" textValue="Cat">
          Cat
        </ComboBoxItem>
        <ComboBoxItem id="dog" textValue="Dog">
          Dog
        </ComboBoxItem>
        <ComboBoxItem id="kangaroo" textValue="Kangaroo">
          Kangaroo
        </ComboBoxItem>
        <ComboBoxItem id="panda" textValue="Panda">
          Panda
        </ComboBoxItem>
        <ComboBoxItem id="snake" textValue="Snake">
          Snake
        </ComboBoxItem>
      </ComboBoxContent>
    </ComboBox>
  )
}