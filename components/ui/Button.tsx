'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { forwardRef } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  external?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, external, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-brand-teal focus:ring-offset-2 focus:ring-offset-navy disabled:opacity-50 disabled:pointer-events-none hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-md motion-reduce:hover:translate-y-0'

    const variants = {
      primary: 'bg-brand-red text-white hover:bg-brand-red-hover hover:shadow-brand-red/30',
      secondary: 'bg-brand-teal text-white hover:bg-brand-teal-light hover:shadow-brand-teal/30',
      outline: 'border-2 border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white hover:shadow-brand-teal/20',
      ghost: 'text-grey-300 hover:text-white hover:bg-navy-lighter',
    }

    const sizes = {
      sm: 'text-sm px-3 py-1.5 rounded-md',
      md: 'text-sm px-5 py-2.5 rounded-lg',
      lg: 'text-base px-6 py-3 rounded-lg',
    }

    const classes = cn(baseStyles, variants[variant], sizes[size], className)

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
          >
            {children}
          </a>
        )
      }
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      )
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
