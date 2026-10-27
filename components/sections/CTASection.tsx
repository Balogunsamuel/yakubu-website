import { MessageCircle, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Animate } from '@/components/ui/Animate'
import { siteConfig } from '@/data/siteConfig'
import { getWhatsAppLink } from '@/lib/utils'

interface CTASectionProps {
  title?: string
  subtitle?: string
  showWhatsApp?: boolean
}

export function CTASection({
  title = 'Ready to Get Started?',
  subtitle = 'Contact us today to discuss your tax, finance, or business needs.',
  showWhatsApp = true,
}: CTASectionProps) {
  const whatsappLink = getWhatsAppLink(
    siteConfig.whatsapp,
    'Hello, I would like to enquire about your services.'
  )

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-glow-center pointer-events-none" />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <Animate variant="fadeUp">
            <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              {title}
            </h2>
          </Animate>
          <Animate variant="fadeUp" delay={100}>
            <p className="mt-4 text-grey-300 sm:text-lg">
              {subtitle}
            </p>
          </Animate>
          <Animate variant="fadeUp" delay={200}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button href="/contact" size="lg">
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              {showWhatsApp && (
                <Button href={whatsappLink} variant="outline" size="lg" external>
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat on WhatsApp
                </Button>
              )}
            </div>
          </Animate>
        </div>
      </Container>
    </section>
  )
}
