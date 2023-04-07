import { type StoryObj, type Meta } from '@storybook/react'
import { Link } from 'react-aria-components'
import { BreadcrumbItem, Breadcrumbs } from 'ui/src'

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

Default.argTypes = {
  className: { type: 'string' },
}

Default.args = {
  className: '',
}
