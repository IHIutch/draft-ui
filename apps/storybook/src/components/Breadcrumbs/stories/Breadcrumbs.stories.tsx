import { type Meta, type StoryObj } from '@storybook/react'
import { ChevronRight } from 'lucide-react'
import { BreadcrumbItem, Breadcrumbs } from 'ui'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
}

export default meta

export const Default: StoryObj<typeof Breadcrumbs> = (props) => (
  <Breadcrumbs>
    <BreadcrumbItem separator={<ChevronRight size="1rem" />}>
      <a href="#">Home</a>
    </BreadcrumbItem>
    <BreadcrumbItem separator={<ChevronRight size="1rem" />}>
      <a href="#">React Aria</a>
    </BreadcrumbItem>
    <BreadcrumbItem>useBreadcrumbs</BreadcrumbItem>
  </Breadcrumbs>
)

Default.argTypes = {}

Default.args = {}
