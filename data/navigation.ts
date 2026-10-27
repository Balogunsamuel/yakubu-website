export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '#',
    children: [
      { label: 'Tax Services', href: '/tax-services' },
      { label: 'Finance Management', href: '/finance-management' },
      { label: 'Business Management', href: '/business-management' },
    ],
  },
  { label: 'Business Centre', href: '/business-centre' },
  { label: 'Online Registrations', href: '/online-registrations' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const footerNav = {
  services: [
    { label: 'Tax Services', href: '/tax-services' },
    { label: 'Finance Management', href: '/finance-management' },
    { label: 'Business Management', href: '/business-management' },
  ],
  businessCentre: [
    { label: 'Printing & Typing', href: '/business-centre' },
    { label: 'Online Registrations', href: '/online-registrations' },
    { label: 'Pricing', href: '/pricing' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
}
