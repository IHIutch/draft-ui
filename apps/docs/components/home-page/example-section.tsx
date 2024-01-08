'use client'

import * as React from 'react'

import BreadcrumbsDefault from '@/registry/breadcrumbs/default'
import CheckboxGroupDefault from '@/registry/checkbox-group/default'
import ComboBoxWithButton from '@/registry/combobox/with-button'
import DatePickerDefault from '@/registry/date-picker/default'
import ModalDefault from '@/registry/modal/default'
import NumberInputMobile from '@/registry/number-field/with-mobile-stepper'
import SelectDefault from '@/registry/select/default'
import SliderDefault from '@/registry/slider/default'
import SwitchDefault from '@/registry/switch/default'
import TabsDefault from '@/registry/tabs/default'

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
        <ComboBoxWithButton />
      </div>
      <div className="flex items-center justify-center rounded-md border bg-white p-4 dark:border-slate-700 dark:bg-slate-800 md:col-span-1">
        <NumberInputMobile />
      </div>
    </div>
  )
}
