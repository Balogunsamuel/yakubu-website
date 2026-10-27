import { MapPin, Clock, Phone, Mail } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { siteConfig } from '@/data/siteConfig'

export function LocationHours() {
  return (
    <section className="py-16 lg:py-24 bg-navy-light">
      <Container>
        <SectionHeading
          title="Visit Us"
          subtitle="Located in the heart of Kaduna, we're easy to find"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Map Placeholder */}
          <div className="aspect-video overflow-hidden rounded-xl border border-navy-lighter bg-navy">
            {/* TODO: Replace with actual Google Maps embed */}
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto h-12 w-12 text-grey-500" />
                <p className="mt-2 text-sm text-grey-500">Map embed placeholder</p>
                <p className="text-xs text-grey-600">Add Google Maps embed code here</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="rounded-xl border border-navy-lighter bg-navy p-6">
              <h3 className="mb-4 flex items-center gap-2 font-semibold text-white">
                <MapPin className="h-5 w-5 text-brand-teal" />
                Address
              </h3>
              <p className="text-grey-300">{siteConfig.address.street}</p>
              <p className="text-grey-300">{siteConfig.address.area}</p>
              <p className="text-grey-300">{siteConfig.address.city}, {siteConfig.address.country}</p>
            </div>

            <div className="rounded-xl border border-navy-lighter bg-navy p-6">
              <h3 className="mb-4 flex items-center gap-2 font-semibold text-white">
                <Clock className="h-5 w-5 text-brand-teal" />
                Opening Hours
              </h3>
              {/* TODO: Confirm hours with client */}
              <div className="space-y-1 text-grey-300">
                <p>{siteConfig.hours.weekdays}</p>
                <p>{siteConfig.hours.saturday}</p>
                <p>{siteConfig.hours.sunday}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href={`tel:${siteConfig.phoneInternational}`}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-navy-lighter bg-navy p-4 text-grey-300 transition-colors hover:border-brand-teal/50 hover:text-white"
              >
                <Phone className="h-5 w-5 text-brand-teal" />
                <span className="text-sm">{siteConfig.phone}</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-navy-lighter bg-navy p-4 text-grey-300 transition-colors hover:border-brand-teal/50 hover:text-white"
              >
                <Mail className="h-5 w-5 text-brand-teal" />
                <span className="text-sm truncate">Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
