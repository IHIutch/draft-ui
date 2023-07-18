import { Breadcrumbs } from 'ui'

import { type Meta } from '@storybook/react'

import Base from '../examples/default'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
}

export default meta

export const Default = () => <Base />
