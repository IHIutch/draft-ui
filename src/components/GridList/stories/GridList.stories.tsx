import { Button } from '../../Button/src/Button'
import { Checkbox } from '../../Checkbox/src/Checkbox'
import { GridList, GridListItem } from '../src/GridList'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

export default {
  title: 'GridList',
  component: GridList,
} as ComponentMeta<typeof GridList>

export const Default: ComponentStory<typeof GridList> = (props) => (
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
