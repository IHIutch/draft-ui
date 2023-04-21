import { type Meta, type StoryObj } from '@storybook/react'
import { Label } from 'ui/src'

const meta: Meta<typeof Label> = {
  title: 'Label',
  component: Label,
}

export default meta

export const Default: StoryObj<typeof Label> = (props) => <Label {...props} />

Default.argTypes = {
  className: { type: 'string' },
  children: { type: 'string' },
}

Default.args = {
  className: '',
  children: 'Label',
}
