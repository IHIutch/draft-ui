'use client'

import React from 'react'

import { BreadcrumbsDefault } from '../examples/breadcrumbs/default'
import { CheckboxGroupDefault } from '../examples/checkboxGroup/default'
import { ComboBoxDefault } from '../examples/comboBox/default'
import { DatePickerDefault } from '../examples/datePicker/default'
import { ModalDefault } from '../examples/modal/default'
import { NumberInputDefault } from '../examples/numberInput/default'
import { SelectDefault } from '../examples/select/default'
import { SliderDefault } from '../examples/slider/default'
import { SwitchDefault } from '../examples/switch/default'
import { TabsDefault } from '../examples/tabs/default'

export default function ExampleSection() {
  return (
    <div className="g-4 grid grid-flow-dense grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <div className="flex items-center justify-center rounded-md border bg-white p-4 md:col-span-2">
        <BreadcrumbsDefault />
      </div>
      <div className="flex items-center justify-center rounded-md border bg-white p-4 md:col-span-1">
        <DatePickerDefault />
      </div>
      <div className="flex items-center justify-center rounded-md border bg-white p-4 md:col-span-1">
        <SelectDefault />
      </div>
      <div className="flex items-center justify-center rounded-md border bg-white p-4 md:col-span-1">
        <CheckboxGroupDefault />
      </div>
      <div className="flex items-center justify-center rounded-md border bg-white p-4 md:col-span-2">
        <TabsDefault />
      </div>
      <div className="flex items-center justify-center rounded-md border bg-white p-4 md:col-span-1">
        <ModalDefault />
      </div>
      <div className="flex items-center justify-center rounded-md border bg-white p-4 md:col-span-1">
        <SwitchDefault />
      </div>
      <div className="flex items-center justify-center rounded-md border bg-white p-4 md:col-span-1">
        <SliderDefault />
      </div>
      <div className="flex items-center justify-center rounded-md border bg-white p-4 md:col-span-1">
        <ComboBoxDefault />
      </div>
      <div className="flex items-center justify-center rounded-md border bg-white p-4 md:col-span-1">
        <NumberInputDefault />
      </div>
    </div>
  )
}
