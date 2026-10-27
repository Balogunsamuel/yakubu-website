'use client'

import { Award, Building2, MapPin, MessageCircle } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Animate } from '@/components/ui/Animate'
import { useInView } from '@/lib/useInView'

const reasons = [
  {
    icon: Award,
    title: 'Professional Credentials',
    description: 'Led by a Fellow of the Chartered Institute of Taxation of Nigeria (FCTI).',
    bullet: 'bg-bullet-green',
  },
  {
    icon: Building2,
    title: 'All Services Under One Roof',
    description: 'From tax consulting to printing and registrations, get everything in one place.',
    bullet: 'bg-bullet-blue',
  },
  {
    icon: MapPin,
    title: 'Central Kaduna Location',
    description: 'Conveniently located at Nasara Plaza on Kano Road, by Ibadan Street.',
    bullet: 'bg-bullet-red',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Support',
    description: 'Quick enquiries and updates via WhatsApp for your convenience.',
    bullet: 'bg-bullet-white border border-grey-300',
  },
]

export function WhyChooseUs() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section className="py-16 lg:py-24">
      <Container>
        <Animate variant="fadeUp">
          <SectionHeading
            title="Why Choose Us"
            subtitle="Trusted by individuals and businesses in Kaduna for professional services"
          />
        </Animate>

        <div ref={ref} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`text-center transition-all duration-500 ease-out motion-reduce:transition-none ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative mx-auto mb-4 inline-flex group">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-lighter transition-transform duration-300 group-hover:scale-110">
                  <reason.icon className="h-6 w-6 text-brand-teal" />
                </div>
                <span className={`absolute -right-1 -top-1 h-4 w-4 rounded-full ${reason.bullet} transition-transform duration-300 group-hover:scale-125`} />
              </div>
              <h3 className="mb-2 font-semibold text-white">{reason.title}</h3>
              <p className="text-sm text-grey-400">{reason.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
