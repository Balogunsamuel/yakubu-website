import { ServiceCard } from './ServiceCard'
import type { Service } from '@/data/services'

interface ServiceGridProps {
  services: Service[]
  columns?: 2 | 3 | 4
  compact?: boolean
}

export function ServiceGrid({ services, columns = 3, compact = false }: ServiceGridProps) {
  const gridCols = {
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <div className={`grid gap-6 ${gridCols[columns]}`}>
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} compact={compact} />
      ))}
    </div>
  )
}
