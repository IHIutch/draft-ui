import { BreadcrumbItem, Breadcrumbs } from '../src/Breadcrumbs'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { Link } from 'react-aria-components/src/Link'

export default {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
} as ComponentMeta<typeof Breadcrumbs>

export const Default: ComponentStory<typeof Breadcrumbs> = (props) => (
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
