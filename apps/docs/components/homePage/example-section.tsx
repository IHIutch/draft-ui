'use client'

import React from 'react'

import BreadcrumbsDefault from '@/registry/Breadcrumbs/default'
import CheckboxGroupDefault from '@/registry/CheckboxGroup/default'
import ComboBoxDefault from '@/registry/Combobox/default'
import DatePickerDefault from '@/registry/DatePicker/default'
import ModalDefault from '@/registry/Modal/default'
import NumberInputMobile from '@/registry/NumberField/with-mobile-stepper'
import SelectDefault from '@/registry/Select/default'
import SliderDefault from '@/registry/Slider/default'
import SwitchDefault from '@/registry/Switch/default'
import TabsDefault from '@/registry/Tabs/default'

export default function ExampleSection() {
  return (
    <div className="g-4 grid grid-flow-dense grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <div className="flex items-center justify-center rounded-md border bg-white p-4 dark:border-slate-700 dark:bg-slate-800 md:col-span-2">
        <BreadcrumbsDefault />
      </div>
      <div className="flex items-center justify-center rounded-md border bg-white p-4 dark:border-slate-700 dark:bg-slate-800 md:col-span-1">
        <DatePickerDefault />
      </div>
      <div className="flex items-center justify-center rounded-md border bg-white p-4 dark:border-slate-700 dark:bg-slate-800 md:col-span-1">
        <SelectDefault />
      </div>
      <div className="flex items-center justify-center rounded-md border bg-white p-4 dark:border-slate-700 dark:bg-slate-800 md:col-span-1">
        <CheckboxGroupDefault />
      </div>
      <div className="flex items-center justify-center overflow-x-auto rounded-md border bg-white p-4 dark:border-slate-700 dark:bg-slate-800 md:col-span-2">
        <TabsDefault />
      </div>
      <div className="flex items-center justify-center rounded-md border bg-white p-4 dark:border-slate-700 dark:bg-slate-800 md:col-span-1">
        <ModalDefault />
      </div>
      <div className="flex items-center justify-center rounded-md border bg-white p-4 dark:border-slate-700 dark:bg-slate-800 md:col-span-1">
        <SwitchDefault />
      </div>
      <div className="flex items-center justify-center rounded-md border bg-white p-4 dark:border-slate-700 dark:bg-slate-800 md:col-span-1">
        <SliderDefault />
      </div>
      <div className="flex items-center justify-center rounded-md border bg-white p-4 dark:border-slate-700 dark:bg-slate-800 md:col-span-1">
        <ComboBoxDefault />
      </div>
      <div className="flex items-center justify-center rounded-md border bg-white p-4 dark:border-slate-700 dark:bg-slate-800 md:col-span-1">
        <NumberInputMobile />
      </div>
    </div>
  )
}
