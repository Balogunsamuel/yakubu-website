import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceGrid } from '@/components/services/ServiceGrid'
import { CTASection } from '@/components/sections/CTASection'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { businessServices } from '@/data/services'

export const metadata: Metadata = {
  title: 'Business Management',
  description: 'Professional business management services in Kaduna, Nigeria. Business plan writing for startups, expansions, and funding applications.',
  keywords: ['business plan writing Kaduna', 'business consultant Kaduna', 'startup business plan Nigeria'],
}

export default function BusinessManagementPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Business Management', href: '/business-management' },
        ]}
      />

      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 bg-glow pointer-events-none" />
        <Container className="relative">
          <SectionHeading
            title="Business Management"
            subtitle="Expert support for planning and growing your business."
            as="h1"
          />

          <ServiceGrid services={businessServices} columns={2} />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-navy-lighter bg-navy-light p-6">
              <h2 className="mb-2 text-lg font-semibold text-white">For Startups</h2>
              <p className="text-grey-300">
                Launch your business with a solid foundation. We create comprehensive business plans that help you secure funding and guide your early operations.
              </p>
            </div>
            <div className="rounded-xl border border-navy-lighter bg-navy-light p-6">
              <h2 className="mb-2 text-lg font-semibold text-white">For Existing Businesses</h2>
              <p className="text-grey-300">
                Expand or restructure with confidence. Our business plans support loan applications, investor pitches, and strategic planning.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Build Your Business Plan"
        subtitle="Start with a professional business plan that sets you up for success."
      />
    </>
  )
}
