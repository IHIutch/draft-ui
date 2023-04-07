import { Label } from '../src/Label'
import { type StoryObj, type Meta } from '@storybook/react'

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
