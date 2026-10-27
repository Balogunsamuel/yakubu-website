import type { Metadata } from 'next'
import { Award, Building, Users, Target } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { CTASection } from '@/components/sections/CTASection'
import { BreadcrumbJsonLd } from '@/components/JsonLd'
import { siteConfig } from '@/data/siteConfig'

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${siteConfig.name} and ${siteConfig.principal.name}, ${siteConfig.principal.credentials}. Professional tax and business services in Kaduna, Nigeria.`,
}

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', href: '/' },
          { name: 'About', href: '/about' },
        ]}
      />

      <section className="relative py-16 lg:py-24">
        <div className="absolute inset-0 bg-glow pointer-events-none" />
        <Container className="relative">
          <SectionHeading
            title={`About ${siteConfig.name}`}
            subtitle="Professional tax, finance, and business services in Kaduna, Nigeria."
            as="h1"
          />

          {/* Principal Profile */}
          <div className="mx-auto max-w-3xl">
            <Card className="text-center">
              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-brand-teal/20">
                <Award className="h-12 w-12 text-brand-teal" />
              </div>
              <h2 className="text-2xl font-bold text-white">{siteConfig.principal.name}</h2>
              <p className="mt-1 text-brand-teal">{siteConfig.principal.title}</p>
              <div className="mt-4 inline-flex items-center rounded-full bg-brand-red/10 px-4 py-2 text-sm font-medium text-brand-red-light">
                {siteConfig.principal.credentials} — {siteConfig.principal.credentialsFull}
              </div>
              <p className="mt-6 text-grey-300">
                {/* TODO: Add detailed bio from client */}
                Leading {siteConfig.name} with professional expertise in taxation, finance management, and business advisory services. Committed to helping individuals and businesses in Kaduna navigate their financial and regulatory obligations with confidence.
              </p>
            </Card>
          </div>

          {/* Values / What We Do */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <div className="mb-4 inline-flex rounded-lg bg-brand-teal/10 p-3">
                <Building className="h-6 w-6 text-brand-teal" />
              </div>
              <h3 className="mb-2 font-semibold text-white">Professional Services</h3>
              <p className="text-sm text-grey-400">
                Tax consultancy, finance management, and business planning services delivered with professional expertise and integrity.
              </p>
            </Card>

            <Card>
              <div className="mb-4 inline-flex rounded-lg bg-brand-red/10 p-3">
                <Users className="h-6 w-6 text-brand-red" />
              </div>
              <h3 className="mb-2 font-semibold text-white">Community Focus</h3>
              <p className="text-sm text-grey-400">
                Through {siteConfig.businessCentre}, we serve the everyday document and registration needs of students, job seekers, and small businesses.
              </p>
            </Card>

            <Card>
              <div className="mb-4 inline-flex rounded-lg bg-bullet-green/10 p-3">
                <Target className="h-6 w-6 text-bullet-green" />
              </div>
              <h3 className="mb-2 font-semibold text-white">Our Commitment</h3>
              <p className="text-sm text-grey-400">
                We are committed to providing accessible, reliable, and professional services to all our clients, regardless of the size of their needs.
              </p>
            </Card>
          </div>

          {/* Location */}
          <div className="mt-16 text-center">
            <h2 className="text-xl font-semibold text-white">Visit Us</h2>
            <p className="mt-2 text-grey-300">
              {siteConfig.address.full}
            </p>
          </div>
        </Container>
      </section>

      <CTASection
        title="Work With Us"
        subtitle="Contact us to discuss how we can support your tax, finance, or business needs."
      />
    </>
  )
}
