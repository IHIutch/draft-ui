import { ChevronRight } from 'lucide-react'
import { BreadcrumbItem, BreadcrumbLink, Breadcrumbs } from 'ui'

export default function Default() {
  return (
    <Breadcrumbs>
      <BreadcrumbItem separator={<ChevronRight size="1em" />}>
        <BreadcrumbLink href="#">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem separator={<ChevronRight size="1em" />}>
        <BreadcrumbLink href="#">React Aria</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink>useBreadcrumbs</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumbs>
  )
}