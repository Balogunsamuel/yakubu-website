import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'
import { footerNav } from '@/data/navigation'
import { Container } from '@/components/ui/Container'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-navy-lighter bg-navy-light">
      <Container>
        <div className="py-12 lg:py-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/logo.svg"
                  alt={siteConfig.name}
                  width={40}
                  height={40}
                  className="h-10 w-10"
                />
                <div>
                  <div className="font-bold text-white">{siteConfig.name}</div>
                  <div className="text-xs text-grey-400">{siteConfig.tagline}</div>
                </div>
              </Link>
              <p className="mt-4 text-sm text-grey-400">
                Professional tax consultancy, finance management, and business services in Kaduna, Nigeria.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="mb-4 font-semibold text-white">Services</h3>
              <ul className="space-y-2">
                {footerNav.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-grey-400 transition-colors hover:text-brand-teal"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Centre */}
            <div>
              <h3 className="mb-4 font-semibold text-white">{siteConfig.businessCentre}</h3>
              <ul className="space-y-2">
                {footerNav.businessCentre.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-grey-400 transition-colors hover:text-brand-teal"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-4 font-semibold text-white">Contact</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={`tel:${siteConfig.phoneInternational}`}
                    className="flex items-start gap-2 text-sm text-grey-400 transition-colors hover:text-brand-teal"
                  >
                    <Phone className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    {siteConfig.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-start gap-2 text-sm text-grey-400 transition-colors hover:text-brand-teal"
                  >
                    <Mail className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-2 text-sm text-grey-400">
                    <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>{siteConfig.address.full}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-lighter py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-grey-500">
              &copy; {currentYear} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-grey-500">
              {footerNav.company.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-brand-teal"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
