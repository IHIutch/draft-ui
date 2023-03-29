import { Checkbox } from '../../Checkbox/src/Checkbox'
import { Label } from '../../Label/src/Label'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'
import { CheckboxGroup } from 'react-aria-components/src/Checkbox'

export default {
  title: 'CheckboxGroup',
  component: CheckboxGroup,
} as ComponentMeta<typeof CheckboxGroup>

export const Default: ComponentStory<typeof CheckboxGroup> = (props) => (
  <CheckboxGroup>
    <Label>Favorite sports</Label>
    <Checkbox value="soccer">
      <div className="checkbox" aria-hidden="true">
        <svg viewBox="0 0 18 18">
          <polyline points="1 9 7 14 15 4" />
        </svg>
      </div>
      Soccer
    </Checkbox>
    <Checkbox value="baseball">
      <div className="checkbox" aria-hidden="true">
        <svg viewBox="0 0 18 18">
          <polyline points="1 9 7 14 15 4" />
        </svg>
      </div>
      Baseball
    </Checkbox>
    <Checkbox value="basketball">
      <div className="checkbox" aria-hidden="true">
        <svg viewBox="0 0 18 18">
          <polyline points="1 9 7 14 15 4" />
        </svg>
      </div>
      Basketball
    </Checkbox>
  </CheckboxGroup>
)

Default.argTypes = {
  className: { type: 'string' },
}

Default.args = {
  className: '',
}
