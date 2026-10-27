import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'
import { getWhatsAppLink } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

export function ContactInfo() {
  const whatsappLink = getWhatsAppLink(
    siteConfig.whatsapp,
    'Hello, I would like to enquire about your services.'
  )

  return (
    <div className="space-y-6">
      {/* WhatsApp CTA */}
      <div className="rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 p-6">
        <h3 className="flex items-center gap-2 font-semibold text-white">
          <MessageCircle className="h-5 w-5 text-[#25D366]" />
          Quick Response via WhatsApp
        </h3>
        <p className="mt-2 text-sm text-grey-300">
          Get a faster response by messaging us directly on WhatsApp.
        </p>
        <Button
          href={whatsappLink}
          external
          className="mt-4 w-full bg-[#25D366] hover:bg-[#20BD5A]"
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Chat on WhatsApp
        </Button>
      </div>

      {/* Contact Details */}
      <div className="rounded-xl border border-navy-lighter bg-navy-light p-6">
        <h3 className="mb-4 font-semibold text-white">Contact Details</h3>
        <ul className="space-y-4">
          <li>
            <a
              href={`tel:${siteConfig.phoneInternational}`}
              className="flex items-start gap-3 text-grey-300 transition-colors hover:text-brand-teal"
            >
              <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-brand-teal" />
              <div>
                <div className="font-medium text-white">Phone</div>
                <div className="text-sm">{siteConfig.phone}</div>
              </div>
            </a>
          </li>
          <li>
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-start gap-3 text-grey-300 transition-colors hover:text-brand-teal"
            >
              <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-brand-teal" />
              <div>
                <div className="font-medium text-white">Email</div>
                <div className="text-sm">{siteConfig.email}</div>
              </div>
            </a>
          </li>
          <li className="flex items-start gap-3 text-grey-300">
            <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-brand-teal" />
            <div>
              <div className="font-medium text-white">Address</div>
              <div className="text-sm">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.area}
                <br />
                {siteConfig.address.city}, {siteConfig.address.country}
              </div>
            </div>
          </li>
        </ul>
      </div>

      {/* Opening Hours */}
      <div className="rounded-xl border border-navy-lighter bg-navy-light p-6">
        <h3 className="mb-4 flex items-center gap-2 font-semibold text-white">
          <Clock className="h-5 w-5 text-brand-teal" />
          Opening Hours
        </h3>
        {/* TODO: Confirm hours with client */}
        <ul className="space-y-2 text-sm text-grey-300">
          <li className="flex justify-between">
            <span>Monday - Friday</span>
            <span className="text-white">8:00 AM - 6:00 PM</span>
          </li>
          <li className="flex justify-between">
            <span>Saturday</span>
            <span className="text-white">9:00 AM - 4:00 PM</span>
          </li>
          <li className="flex justify-between">
            <span>Sunday</span>
            <span className="text-grey-500">Closed</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
