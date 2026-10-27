import { ArrowRight, Award } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Animate } from '@/components/ui/Animate'
import { siteConfig } from '@/data/siteConfig'

export function AboutTeaser() {
  return (
    <section className="py-16 lg:py-24 bg-grey-100">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Animate variant="scale">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-teal/10 px-4 py-2 text-sm font-medium text-brand-teal">
              <Award className="h-4 w-4" />
              {siteConfig.principal.credentials} — {siteConfig.principal.credentialsFull}
            </div>
          </Animate>

          <Animate variant="fadeUp" delay={100}>
            <h2 className="text-2xl font-bold text-navy sm:text-3xl lg:text-4xl">
              Meet {siteConfig.principal.name}
            </h2>
          </Animate>

          <Animate variant="fadeUp" delay={200}>
            <p className="mt-4 text-grey-600 sm:text-lg">
              {siteConfig.principal.title} of {siteConfig.name}, bringing professional expertise
              in taxation, finance, and business management to Kaduna and beyond.
            </p>
          </Animate>

          <Animate variant="fadeUp" delay={300}>
            <div className="mt-8">
              <Button href="/about" variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Animate>
        </div>
      </Container>
    </section>
  )
}
