import { Tab, TabList, TabPanel, Tabs } from 'ui'

import { type Meta, type StoryObj } from '@storybook/react'

const meta: Meta<typeof Tabs> = {
  title: 'Tabs',
  component: Tabs,
}

export default meta

export const Default: StoryObj<typeof Tabs> = {
  argTypes: {
    orientation: {
      type: 'string',
      control: 'radio',
      options: ['vertical', 'horizontal'],
    },
  },
  args: {
    orientation: 'horizontal',
  },
  render: (props) => (
    <Tabs orientation={props.orientation} disabledKeys={['Emp']}>
      <TabList aria-label="History of Ancient Rome">
        <Tab id="FoR">Founding of Rome</Tab>
        <Tab id="MaR">Monarchy and Republic</Tab>
        <Tab id="Emp">Empire</Tab>
      </TabList>
      <TabPanel id="FoR">
        Arma virumque cano, Troiae qui primus ab oris.
      </TabPanel>
      <TabPanel id="MaR">Senatus Populusque Romanus.</TabPanel>
      <TabPanel id="Emp">Alea jacta est.</TabPanel>
    </Tabs>
  ),
}
