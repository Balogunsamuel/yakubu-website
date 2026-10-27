import {
  Hero,
  QuickServices,
  ServiceHighlights,
  AboutTeaser,
  WhyChooseUs,
  LocationHours,
  CTASection,
} from '@/components/sections'

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickServices />
      <ServiceHighlights />
      <AboutTeaser />
      <WhyChooseUs />
      <LocationHours />
      <CTASection />
    </>
  )
}
