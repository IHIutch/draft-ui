import { ChevronRight } from 'lucide-react'
import { BreadcrumbItem, Breadcrumbs } from 'ui'

export default function Default() {
  return (
    <div>
      <Breadcrumbs>
        <BreadcrumbItem separator={<ChevronRight size="1em" />}>
          <a href="#">Home</a>
        </BreadcrumbItem>
        <BreadcrumbItem separator={<ChevronRight size="1em" />}>
          <a href="#">React Aria</a>
        </BreadcrumbItem>
        <BreadcrumbItem>useBreadcrumbs</BreadcrumbItem>
      </Breadcrumbs>
    </div>
  )
}
