import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/Card'
import { cn } from '@/lib/utils'
import { getIcon } from '@/lib/icons'
import type { Service } from '@/data/services'

interface ServiceCardProps {
  service: Service
  href?: string
  compact?: boolean
}

export function ServiceCard({ service, href, compact = false }: ServiceCardProps) {
  const IconComponent = getIcon(service.icon)

  const content = (
    <Card className={cn('h-full', href && 'cursor-pointer')}>
      <div className={cn('flex', compact ? 'items-center gap-4' : 'flex-col')}>
        <div
          className={cn(
            'flex items-center justify-center rounded-lg bg-brand-teal/10',
            compact ? 'h-12 w-12 flex-shrink-0' : 'h-14 w-14 mb-4'
          )}
        >
          <IconComponent className="h-6 w-6 text-brand-teal" />
        </div>
        <div>
          <h3 className={cn('font-semibold text-white', compact ? 'text-base' : 'text-lg mb-2')}>
            {service.title}
          </h3>
          {!compact && (
            <CardContent className="p-0">
              <p className="text-sm text-grey-400">{service.description}</p>
            </CardContent>
          )}
        </div>
      </div>
    </Card>
  )

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    )
  }

  return content
}
