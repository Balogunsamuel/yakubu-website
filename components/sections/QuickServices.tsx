import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { quickServices } from '@/data/services'
import { getIcon } from '@/lib/icons'

export function QuickServices() {
  return (
    <section className="border-y border-navy-lighter bg-navy-light py-6">
      <Container>
        <div className="flex items-center justify-between gap-4 overflow-x-auto pb-2 scrollbar-hide">
          <span className="flex-shrink-0 text-sm font-medium text-grey-400">Quick Services:</span>
          <div className="flex gap-2 sm:gap-4">
            {quickServices.map((service) => {
              const IconComponent = getIcon(service.icon)
              return (
                <Link
                  key={service.id}
                  href="/business-centre"
                  className="flex flex-shrink-0 items-center gap-2 rounded-full border border-navy-lighter bg-navy px-3 py-1.5 text-sm text-grey-300 transition-colors hover:border-brand-teal/50 hover:text-white sm:px-4 sm:py-2"
                >
                  <IconComponent className="h-4 w-4 text-brand-teal" />
                  <span className="hidden sm:inline">{service.title}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
