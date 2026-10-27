import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  centered?: boolean
  as?: 'h1' | 'h2' | 'h3'
}

export function SectionHeading({
  title,
  subtitle,
  className,
  centered = true,
  as: Component = 'h2',
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-10', centered && 'text-center', className)}>
      <Component className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
        {title}
      </Component>
      {subtitle && (
        <p className="mt-3 text-grey-300 sm:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
