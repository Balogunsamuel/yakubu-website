'use client'

import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Animate } from '@/components/ui/Animate'
import { TypedText } from '@/components/ui/TypedText'

const typedWords = [
  'Tax Consultancy',
  'Business Planning',
  'Finance Management',
  'Document Services',
]

const highlights = [
  'Professional FCTI-certified expertise',
  'All services under one roof',
  'Fast, reliable document services',
]

export function Hero() {
  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-glow pointer-events-none" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <div>
            <Animate variant="fadeRight" duration={600}>
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-brand-teal">
                Welcome to Yakubu Jisambo & Co
              </p>
            </Animate>

            <Animate variant="fadeRight" delay={100} duration={600}>
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Expert Solutions for{' '}
                <span className="text-brand-teal">
                  <TypedText words={typedWords} />
                </span>
              </h1>
            </Animate>

            <Animate variant="fadeRight" delay={200} duration={600}>
              <p className="mt-6 text-lg text-grey-300">
                Professional tax consultancy and finance management for businesses,
                plus all your printing and document needs at our business centre in Kaduna.
              </p>
            </Animate>

            <Animate variant="fadeRight" delay={300} duration={600}>
              <ul className="mt-6 space-y-3">
                {highlights.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-grey-300">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-bullet-green" />
                    {item}
                  </li>
                ))}
              </ul>
            </Animate>

            <Animate variant="fadeUp" delay={400} duration={600}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="/contact" size="lg">
                  Book a Consultation
                </Button>
                <Button href="/business-centre" variant="outline" size="lg">
                  Business Centre
                </Button>
              </div>
            </Animate>
          </div>

          {/* Image */}
          <Animate variant="fadeLeft" delay={200} duration={800}>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-navy-lighter bg-navy-light shadow-2xl">
                <Image
                  src="/images/hero-consulting.svg"
                  alt="Professional tax consultation"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-navy/60 via-transparent to-transparent" />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 rounded-xl border border-navy-lighter bg-navy-light p-4 shadow-xl sm:-bottom-8 sm:-left-8 sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red">
                    <span className="text-lg font-bold text-white">15+</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Years</p>
                    <p className="text-sm text-grey-400">Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </Animate>
        </div>
      </Container>
    </section>
  )
}
