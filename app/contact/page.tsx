import type { Metadata } from 'next'
import { MapPin } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ContactForm } from '@/components/contact/ContactForm'
import { ContactInfo } from '@/components/contact/ContactInfo'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { siteConfig } from '@/data/siteConfig'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Contact ${siteConfig.name} in Kaduna, Nigeria. Phone: ${siteConfig.phone}. Email: ${siteConfig.email}. Visit us at ${siteConfig.address.full}.`,
}

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'Contact', href: '/contact' },
        ]}
      />

      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 bg-glow pointer-events-none" />
        <Container className="relative">
          <SectionHeading
            title="Contact Us"
            subtitle="Get in touch with us for tax, finance, business, or document services."
            as="h1"
          />

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="rounded-xl border border-navy-lighter bg-navy-light p-6 lg:p-8">
              <h2 className="mb-6 text-xl font-semibold text-white">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <ContactInfo />
            </div>
          </div>

          {/* Map */}
          <div className="mt-12">
            <h2 className="mb-4 text-xl font-semibold text-white">Find Us</h2>
            <div className="aspect-video overflow-hidden rounded-xl border border-navy-lighter bg-navy">
              {/* TODO: Replace with actual Google Maps embed */}
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto h-12 w-12 text-grey-500" />
                  <p className="mt-2 text-sm text-grey-500">Map embed placeholder</p>
                  <p className="mt-1 text-xs text-grey-600">{siteConfig.address.full}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
