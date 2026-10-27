import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { ServiceGrid } from '@/components/services/ServiceGrid'
import { CTASection } from '@/components/sections/CTASection'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { centreServices } from '@/data/services'
import { siteConfig } from '@/data/siteConfig'

export const metadata: Metadata = {
  title: `Business Centre | ${siteConfig.businessCentre}`,
  description: 'Printing, photocopying, typing, scanning, binding, laminating, POS services, and internet café in Kaduna. Fast and affordable document services at Jango Computer Academy.',
  keywords: ['printing Kaduna', 'photocopying Kaduna', 'business centre Kaduna', 'cyber café Kaduna', 'typing services Kaduna'],
}

export default function BusinessCentrePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Business Centre', href: '/business-centre' },
        ]}
      />

      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 bg-glow pointer-events-none" />
        <Container className="relative">
          <div className="mb-4 inline-flex items-center rounded-full bg-brand-teal/10 px-4 py-2 text-sm font-medium text-brand-teal">
            {siteConfig.businessCentre}
          </div>

          <SectionHeading
            title="Business Centre Services"
            subtitle="All your document and printing needs in one convenient location. Fast, affordable, and professional."
            as="h1"
            centered={false}
          />

          <ServiceGrid services={centreServices} columns={4} />

          {/* Online Registrations Link */}
          <div className="mt-12 rounded-xl border border-navy-lighter bg-navy-light p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold text-white">Need Help with Online Applications?</h2>
                <p className="mt-1 text-grey-300">
                  We assist with registrations for schools, government portals, and recruitment programmes.
                </p>
              </div>
              <Link href="/online-registrations" className="flex-shrink-0">
                <Button variant="outline">
                  View All Registrations <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Pricing Link */}
          <div className="mt-6 text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-1 text-brand-teal hover:text-brand-teal-light transition-colors"
            >
              View our pricing <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>

      <CTASection
        title="Need Document Services?"
        subtitle="Walk in or send us a WhatsApp message. We're ready to help."
      />
    </>
  )
}
