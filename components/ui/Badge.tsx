import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'red' | 'teal' | 'green'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-navy-lighter text-grey-300',
    red: 'bg-brand-red/20 text-brand-red-light',
    teal: 'bg-brand-teal/20 text-brand-teal-light',
    green: 'bg-bullet-green/20 text-bullet-green',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
