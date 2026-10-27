import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceGrid } from '@/components/services/ServiceGrid'
import { CTASection } from '@/components/sections/CTASection'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { taxServices } from '@/data/services'

export const metadata: Metadata = {
  title: 'Tax Services',
  description: 'Professional tax services in Kaduna, Nigeria. Tax practice, training, TIN and TCC processing, filing returns, stamp duty, and Tax Appeal Tribunal representation.',
  keywords: ['tax consultant Kaduna', 'TIN registration Kaduna', 'TCC Kaduna', 'tax filing Nigeria', 'stamp duty Kaduna'],
}

export default function TaxServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Tax Services', href: '/tax-services' },
        ]}
      />

      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 bg-glow pointer-events-none" />
        <Container className="relative">
          <SectionHeading
            title="Tax Services"
            subtitle="Comprehensive tax advisory and compliance services for individuals and businesses in Kaduna and across Nigeria."
            as="h1"
          />

          <ServiceGrid services={taxServices} columns={3} />

          <div className="mt-12 rounded-xl border border-brand-teal/30 bg-brand-teal/10 p-6">
            <h2 className="mb-2 text-lg font-semibold text-white">Need Help with Tax Matters?</h2>
            <p className="text-grey-300">
              Whether you&apos;re an individual needing your TIN or TCC, or a business requiring comprehensive tax planning and filing, our experienced team is here to assist you.
            </p>
          </div>
        </Container>
      </section>

      <CTASection
        title="Get Expert Tax Advice"
        subtitle="Contact us today to discuss your tax needs with a certified professional."
      />
    </>
  )
}
