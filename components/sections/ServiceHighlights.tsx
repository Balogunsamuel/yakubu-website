'use client'

import Link from 'next/link'
import { FileText, TrendingUp, Briefcase, Printer, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Animate } from '@/components/ui/Animate'
import { useInView } from '@/lib/useInView'

const highlights = [
  {
    title: 'Tax Services',
    description: 'Tax practice, training, filing returns, obtaining TIN and TCC, and stamp duty processing.',
    icon: FileText,
    href: '/tax-services',
    color: 'text-brand-red',
    bgColor: 'bg-brand-red/10',
  },
  {
    title: 'Finance Management',
    description: 'Cash flow management, investment advisory, auditing, and company accounts filing.',
    icon: TrendingUp,
    href: '/finance-management',
    color: 'text-brand-teal',
    bgColor: 'bg-brand-teal/10',
  },
  {
    title: 'Business Management',
    description: 'Professional business plan development for startups, expansions, and funding.',
    icon: Briefcase,
    href: '/business-management',
    color: 'text-bullet-green',
    bgColor: 'bg-bullet-green/10',
  },
  {
    title: 'Business Centre',
    description: 'Printing, typing, scanning, binding, POS services, and online registration assistance.',
    icon: Printer,
    href: '/business-centre',
    color: 'text-bullet-blue',
    bgColor: 'bg-bullet-blue/10',
  },
]

export function ServiceHighlights() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section className="py-16 lg:py-24">
      <Container>
        <Animate variant="fadeUp">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive professional services for individuals and businesses in Kaduna"
          />
        </Animate>

        <div ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group block h-full transition-all duration-500 ease-out motion-reduce:transition-none ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Card className="h-full">
                <div className={`mb-4 inline-flex rounded-lg p-3 ${item.bgColor} transition-transform duration-300 group-hover:scale-110`}>
                  <item.icon className={`h-6 w-6 ${item.color}`} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mb-4 text-sm text-grey-400">{item.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-teal group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
