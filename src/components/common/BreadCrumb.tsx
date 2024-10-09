import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

type BreadcrumbItem = {
  label: string
  href?: string
}

type BreadcrumbPage = {
  label: string
}

interface BreadcrumbProps {
  links: BreadcrumbItem[]
  page: BreadcrumbPage
}

export function CustomBreadcrumb({ links: links, page }: BreadcrumbProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList className="stroke-primary-strong text-primary-strong">
        {links.map((item, index) => (
          <div className="inline-flex items-center gap-1.5" key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </div>
        ))}

        <BreadcrumbItem>
          <BreadcrumbPage>{page.label}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
