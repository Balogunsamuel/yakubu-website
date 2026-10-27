import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceGrid } from '@/components/services/ServiceGrid'
import { CTASection } from '@/components/sections/CTASection'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { financeServices } from '@/data/services'

export const metadata: Metadata = {
  title: 'Finance Management',
  description: 'Professional finance management services in Kaduna, Nigeria. Cash flow management, investment advisory, auditing, company accounts filing, and oil & gas procurement.',
  keywords: ['finance management Kaduna', 'auditing services Kaduna', 'investment advisory Nigeria', 'company accounts filing'],
}

export default function FinanceManagementPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Finance Management', href: '/finance-management' },
        ]}
      />

      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 bg-glow pointer-events-none" />
        <Container className="relative">
          <SectionHeading
            title="Finance Management"
            subtitle="Strategic financial planning and management services to help your business thrive."
            as="h1"
          />

          <ServiceGrid services={financeServices} columns={3} />

          <div className="mt-12 rounded-xl border border-brand-teal/30 bg-brand-teal/10 p-6">
            <h2 className="mb-2 text-lg font-semibold text-white">Take Control of Your Finances</h2>
            <p className="text-grey-300">
              From cash flow optimization to regulatory compliance, we provide the financial expertise your business needs to succeed. Our services extend to specialized sectors including oil, gas, and solid minerals.
            </p>
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to Optimize Your Finances?"
        subtitle="Let us help you manage your business finances effectively."
      />
    </>
  )
}
