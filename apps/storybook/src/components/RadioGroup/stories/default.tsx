import React from 'react'

import { Label, Radio, RadioGroup, RadioGroupContent } from 'ui'

export default function Default() {
  return (
    <RadioGroup>
      <Label>Favorite sports</Label>
      <RadioGroupContent>
        <Radio value="dogs">Dog</Radio>
        <Radio value="cats">Cat</Radio>
        <Radio value="dragon">Dragon</Radio>
      </RadioGroupContent>
    </RadioGroup>
  )
}
