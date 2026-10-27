'use client'

import { useInView } from '@/lib/useInView'
import { cn } from '@/lib/utils'

type AnimationVariant = 'fadeIn' | 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scale' | 'none'

interface AnimateProps {
  children: React.ReactNode
  className?: string
  variant?: AnimationVariant
  delay?: number
  duration?: number
}

const variants: Record<AnimationVariant, { initial: string; animate: string }> = {
  fadeIn: {
    initial: 'opacity-0',
    animate: 'opacity-100',
  },
  fadeUp: {
    initial: 'opacity-0 translate-y-8',
    animate: 'opacity-100 translate-y-0',
  },
  fadeDown: {
    initial: 'opacity-0 -translate-y-8',
    animate: 'opacity-100 translate-y-0',
  },
  fadeLeft: {
    initial: 'opacity-0 translate-x-8',
    animate: 'opacity-100 translate-x-0',
  },
  fadeRight: {
    initial: 'opacity-0 -translate-x-8',
    animate: 'opacity-100 translate-x-0',
  },
  scale: {
    initial: 'opacity-0 scale-95',
    animate: 'opacity-100 scale-100',
  },
  none: {
    initial: '',
    animate: '',
  },
}

export function Animate({
  children,
  className,
  variant = 'fadeUp',
  delay = 0,
  duration = 500,
}: AnimateProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all ease-out motion-reduce:transition-none motion-reduce:transform-none',
        isInView ? variants[variant].animate : variants[variant].initial,
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  )
}

interface StaggerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  variant?: AnimationVariant
}

export function Stagger({
  children,
  className,
  staggerDelay = 100,
  variant = 'fadeUp',
}: StaggerProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div
              key={index}
              className={cn(
                'transition-all duration-500 ease-out motion-reduce:transition-none motion-reduce:transform-none',
                isInView ? variants[variant].animate : variants[variant].initial
              )}
              style={{ transitionDelay: `${index * staggerDelay}ms` }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  )
}
