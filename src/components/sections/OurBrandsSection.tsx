import { brands } from '../../data/brands'
import { SectionHeading } from '../ui/SectionHeading'
import { BrandCard } from '../ui/BrandCard'

export function OurBrandsSection() {
  return (
    <section id="our-brands" className="relative scroll-mt-24 overflow-hidden bg-navy py-20 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(34,197,94,0.18),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="Our Brands"
          title="Our Brands"
          description="Windfarm operates diversified businesses committed to innovation, sustainability and quality across multiple industries."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {brands.map((brand, index) => (
            <BrandCard key={brand.id} brand={brand} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
