import {
  ComboBox,
  ComboBoxContent,
  ComboBoxInput,
  ComboBoxItem,
  Label,
} from 'ui'

export default function Default() {
  return (
    <ComboBox>
      <Label>Favorite Animal</Label>
      <ComboBoxInput />
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