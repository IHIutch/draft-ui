import React from 'react'

import { ChevronRight } from 'lucide-react'

import { BreadcrumbItem, Breadcrumbs } from '@/components/ui'

export function BreadcrumbsDefault() {
  return (
    <Breadcrumbs>
      <BreadcrumbItem separator={<ChevronRight size="1em" />}>
        <a href="#">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem separator={<ChevronRight size="1em" />}>
        <a href="#">React Aria</a>
      </BreadcrumbItem>
      <BreadcrumbItem>useBreadcrumbs</BreadcrumbItem>
    </Breadcrumbs>
  )
}
