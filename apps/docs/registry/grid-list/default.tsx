import { Info } from 'lucide-react'
import { Checkbox, GridList, GridListItem, IconButton } from 'ui'

export default function Default() {
  return (
    <GridList aria-label="Favorite pokemon" selectionMode="multiple">
      <GridListItem
        className="[&_[role=gridcell]]:flex [&_[role=gridcell]]:items-center"
        textValue="Charizard"
      >
        <Checkbox />
        Charizard
        <IconButton
          className="ml-2"
          size="sm"
          variant="subtle"
          aria-label="Info"
        >
          <Info size="1em" />
        </IconButton>
      </GridListItem>
      <GridListItem
        className="[&_[role=gridcell]]:flex [&_[role=gridcell]]:items-center"
        textValue="Blastoise"
      >
        <Checkbox />
        Blastoise
        <IconButton
          className="ml-2"
          size="sm"
          variant="subtle"
          aria-label="Info"
        >
          <Info size="1em" />
        </IconButton>
      </GridListItem>
      <GridListItem
        className="[&_[role=gridcell]]:flex [&_[role=gridcell]]:items-center"
        textValue="Venusaur"
      >
        <Checkbox />
        Venusaur
        <IconButton
          className="ml-2"
          size="sm"
          variant="subtle"
          aria-label="Info"
        >
          <Info size="1em" />
        </IconButton>
      </GridListItem>
      <GridListItem
        className="[&_[role=gridcell]]:flex [&_[role=gridcell]]:items-center"
        textValue="Pikachu"
      >
        <Checkbox />
        Pikachu
        <IconButton
          className="ml-2"
          size="sm"
          variant="subtle"
          aria-label="Info"
        >
          <Info size="1em" />
        </IconButton>
      </GridListItem>
    </GridList>
  )
}