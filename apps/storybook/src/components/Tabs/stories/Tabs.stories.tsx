import { type Meta, type StoryObj } from '@storybook/react'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from 'ui/src'

const meta: Meta<typeof Tabs> = {
  title: 'Tabs',
  component: Tabs,
}

export default meta

export const Default: StoryObj<typeof Tabs> = (props) => (
  <Tabs>
    <TabList aria-label="History of Ancient Rome">
      <Tab id="FoR">Founding of Rome</Tab>
      <Tab id="MaR">Monarchy and Republic</Tab>
      <Tab id="Emp">Empire</Tab>
    </TabList>
    <TabPanels>
      <TabPanel id="FoR">
        Arma virumque cano, Troiae qui primus ab oris.
      </TabPanel>
      <TabPanel id="MaR">Senatus Populusque Romanus.</TabPanel>
      <TabPanel id="Emp">Alea jacta est.</TabPanel>
    </TabPanels>
  </Tabs>
)

Default.argTypes = {}

Default.args = {}
