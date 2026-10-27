'use client'

import { useEffect, useState } from 'react'
import { Container } from '@/components/ui/Container'
import { useInView } from '@/lib/useInView'

const stats = [
  { value: 500, suffix: '+', label: 'Clients Served' },
  { value: 15, suffix: '+', label: 'Years Experience' },
  { value: 1000, suffix: '+', label: 'Tax Returns Filed' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
]

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value, inView])

  return (
    <span className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export function Statistics() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.3 })

  return (
    <section className="py-12 bg-brand-red">
      <Container>
        <div
          ref={ref}
          className="grid grid-cols-2 gap-8 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ease-out ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={isInView} />
              </div>
              <div className="mt-2 text-sm text-white/80 sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
