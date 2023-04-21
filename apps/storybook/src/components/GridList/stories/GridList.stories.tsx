import { type Meta, type StoryObj } from '@storybook/react'
import { Button, Checkbox, GridList, GridListItem } from 'ui/src'

const meta: Meta<typeof GridList> = {
  title: 'GridList',
  component: GridList,
}

export default meta

export const Default: StoryObj<typeof GridList> = (props) => (
  <GridList aria-label="Favorite pokemon" selectionMode="multiple">
    <GridListItem textValue="Charizard">
      <Checkbox />
      Charizard
      <Button aria-label="Info">ⓘ</Button>
    </GridListItem>
    <GridListItem textValue="Blastoise">
      <Checkbox />
      Blastoise
      <Button aria-label="Info">ⓘ</Button>
    </GridListItem>
    <GridListItem textValue="Venusaur">
      <Checkbox />
      Venusaur
      <Button aria-label="Info">ⓘ</Button>
    </GridListItem>
    <GridListItem textValue="Pikachu">
      <Checkbox />
      Pikachu
      <Button aria-label="Info">ⓘ</Button>
    </GridListItem>
  </GridList>
)

Default.argTypes = {
  className: { type: 'string' },
}

Default.args = {
  className: '',
}
