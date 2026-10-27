'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { mainNav } from '@/data/navigation'
import { siteConfig } from '@/data/siteConfig'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 border-b border-navy-lighter bg-navy/95 backdrop-blur supports-[backdrop-filter]:bg-navy/80">
      <Container>
        <nav className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.svg"
              alt={siteConfig.name}
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <div className="hidden sm:block">
              <div className="text-sm font-bold text-white lg:text-base">{siteConfig.name}</div>
              <div className="text-xs text-grey-400">{siteConfig.tagline}</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {mainNav.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="flex items-center gap-1 px-3 py-2 text-sm text-grey-300 transition-colors hover:text-white">
                      {item.label}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    <div
                      className={cn(
                        'absolute left-0 top-full w-48 rounded-lg border border-navy-lighter bg-navy-light py-2 shadow-xl transition-all',
                        openDropdown === item.label
                          ? 'visible opacity-100 translate-y-0'
                          : 'invisible opacity-0 -translate-y-2'
                      )}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-grey-300 transition-colors hover:bg-navy-lighter hover:text-white"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm text-grey-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-3">
            <Button href="/contact" size="sm">
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-grey-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300',
            mobileMenuOpen ? 'max-h-[500px] pb-4' : 'max-h-0'
          )}
        >
          <div className="space-y-1 pt-2">
            {mainNav.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <div>
                    <button
                      className="flex w-full items-center justify-between px-3 py-2 text-sm text-grey-300"
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 transition-transform',
                          openDropdown === item.label && 'rotate-180'
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        'overflow-hidden transition-all',
                        openDropdown === item.label ? 'max-h-40' : 'max-h-0'
                      )}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-2 pl-6 pr-3 text-sm text-grey-400 hover:text-white"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-sm text-grey-300 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 px-3">
              <Button href="/contact" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
