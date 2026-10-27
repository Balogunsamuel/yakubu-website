import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { CTASection } from '@/components/sections/CTASection'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { registrations } from '@/data/registrations'
import { getIcon } from '@/lib/icons'

export const metadata: Metadata = {
  title: 'Online Registration Assistance',
  description: 'Help with online applications for Kaduna Polytechnic, KASU, Police Academy, NDA, DSSC, NPower, Airforce, and Navy in Kaduna, Nigeria.',
  keywords: ['online registration Kaduna', 'Kaduna Poly registration', 'KASU registration', 'NDA application help', 'DSSC registration Kaduna'],
}

export default function OnlineRegistrationsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Online Registrations', href: '/online-registrations' },
        ]}
      />

      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 bg-glow pointer-events-none" />
        <Container className="relative">
          <SectionHeading
            title="Online Registration Assistance"
            subtitle="We help you navigate complex online application portals. Bring your documents, we handle the rest."
            as="h1"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {registrations.map((registration) => {
              const IconComponent = getIcon(registration.icon)
              return (
                <Card key={registration.id}>
                  <div className="mb-4 inline-flex rounded-lg bg-brand-teal/10 p-3">
                    <IconComponent className="h-6 w-6 text-brand-teal" />
                  </div>
                  <h3 className="mb-2 font-semibold text-white">{registration.shortName}</h3>
                  <p className="text-sm text-grey-400">{registration.description}</p>
                </Card>
              )
            })}
          </div>

          <div className="mt-12 rounded-xl border border-brand-teal/30 bg-brand-teal/10 p-6">
            <h2 className="mb-2 text-lg font-semibold text-white">How It Works</h2>
            <ol className="mt-4 space-y-3 text-grey-300">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-red text-sm font-semibold text-white">1</span>
                <span>Visit our office with your documents and credentials</span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-red text-sm font-semibold text-white">2</span>
                <span>We complete the online application form accurately on your behalf</span>
              </li>
              <li className="flex gap-3">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-red text-sm font-semibold text-white">3</span>
                <span>You receive printed confirmation and any required receipts</span>
              </li>
            </ol>
          </div>
        </Container>
      </section>

      <CTASection
        title="Need Registration Help?"
        subtitle="Bring your documents to our office or call ahead to confirm requirements."
      />
    </>
  )
}
