import { type Meta, type StoryObj } from '@storybook/react'
import { Link } from 'react-aria-components'
import { BreadcrumbItem, Breadcrumbs } from 'ui'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
}

export default meta

export const Default: StoryObj<typeof Breadcrumbs> = (props) => (
  <Breadcrumbs>
    <BreadcrumbItem>
      <Link>
        <a href="/">Home</a>
      </Link>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <Link>
        <a href="/react-aria">React Aria</a>
      </Link>
    </BreadcrumbItem>
    <BreadcrumbItem>
      <Link>useBreadcrumbs</Link>
    </BreadcrumbItem>
  </Breadcrumbs>
)

Default.argTypes = {}

Default.args = {}
