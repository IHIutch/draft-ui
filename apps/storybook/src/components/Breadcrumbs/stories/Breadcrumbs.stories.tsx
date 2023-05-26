import { ChevronRight } from 'lucide-react'
import { BreadcrumbItem, Breadcrumbs } from 'ui'

import { type Meta, type StoryObj } from '@storybook/react'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
}

export default meta

export const Default: StoryObj<typeof Breadcrumbs> = (props) => (
  <Breadcrumbs>
    <BreadcrumbItem separator={<ChevronRight size="1em" />}>
      <a href="#">Home</a>
    </BreadcrumbItem>
    <BreadcrumbItem separator={<ChevronRight size="1em" />}>
      <a href="#">React Aria</a>
    </BreadcrumbItem>
    <BreadcrumbItem>useBreadcrumbs</BreadcrumbItem>
  </Breadcrumbs>
)

Default.argTypes = {}

Default.args = {}
