import { type Meta, type StoryObj } from '@storybook/react'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from 'ui'

const meta: Meta<typeof Tabs> = {
  title: 'Tabs',
  component: Tabs,
}

export default meta

export const Default: StoryObj<typeof Tabs> = (props) => (
  <Tabs orientation={props.orientation}>
    <TabList aria-label="History of Ancient Rome" disabledKeys={['Emp']}>
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

Default.argTypes = {
  orientation: {
    type: 'string',
    control: 'radio',
    options: ['vertical', 'horizontal'],
  },
}

Default.args = {
  orientation: 'horizontal',
}
