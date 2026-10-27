import type { Metadata } from 'next'
import { Phone } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/sections/CTASection'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { pricing } from '@/data/pricing'
import { siteConfig } from '@/data/siteConfig'

export const metadata: Metadata = {
  title: 'Pricing',
  description: `Pricing for printing, photocopying, scanning, binding, and other business centre services at ${siteConfig.businessCentre} in Kaduna.`,
}

export default function PricingPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Pricing', href: '/pricing' },
        ]}
      />

      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 bg-glow pointer-events-none" />
        <Container className="relative">
          <SectionHeading
            title="Pricing"
            subtitle={`Affordable rates for all your document needs at ${siteConfig.businessCentre}.`}
            as="h1"
          />

          {/* Call for prices notice */}
          <div className="mb-8 flex items-center justify-center gap-3 rounded-xl border border-brand-teal/30 bg-brand-teal/10 p-4 text-center">
            <Phone className="h-5 w-5 text-brand-teal" />
            <p className="text-grey-300">
              For current prices, please call <a href={`tel:${siteConfig.phoneInternational}`} className="font-semibold text-white hover:text-brand-teal">{siteConfig.phone}</a> or visit our office.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {pricing.map((category) => (
              <div
                key={category.id}
                className="rounded-xl border border-navy-lighter bg-navy-light overflow-hidden"
              >
                <div className="border-b border-navy-lighter bg-navy px-6 py-4">
                  <h2 className="font-semibold text-white">{category.name}</h2>
                </div>
                <div className="p-6">
                  <table className="w-full">
                    <tbody className="divide-y divide-navy-lighter">
                      {category.items.map((item) => (
                        <tr key={item.id}>
                          <td className="py-3 text-grey-300">
                            {item.service}
                            {item.unit && (
                              <span className="ml-1 text-xs text-grey-500">({item.unit})</span>
                            )}
                            {item.note && (
                              <span className="block text-xs text-grey-500">{item.note}</span>
                            )}
                          </td>
                          <td className="py-3 text-right font-medium text-brand-teal">
                            {item.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          {/* TODO Notice */}
          <div className="mt-8 rounded-xl border border-brand-red/30 bg-brand-red/10 p-6 text-center">
            <p className="text-sm text-grey-300">
              <strong className="text-white">Note:</strong> Prices are subject to change. Please confirm current rates when you visit or call.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Button href={`tel:${siteConfig.phoneInternational}`}>
              <Phone className="mr-2 h-4 w-4" />
              Call for Current Prices
            </Button>
          </div>
        </Container>
      </section>

      <CTASection
        title="Visit Our Business Centre"
        subtitle="Walk in for fast, affordable document services."
      />
    </>
  )
}
