import { services } from '../data/content'
import { images } from '../data/images'
import { PageHero } from '../components/ui/PageHero'
import { SEO } from '../components/ui/SEO'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ServiceCard } from '../components/ui/ServiceCard'
import { Button } from '../components/ui/Button'

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Services"
        description="Martin Wind Energy services include wind farm development, EPC, O&M, consulting, site assessment, and monitoring."
      />
      <PageHero
        title="Services"
        subtitle="Comprehensive wind energy services from early development through decades of optimized operations."
        image={images.engineering}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Deliver"
            title="Capabilities built for complex renewable programs"
            description="Our multidisciplinary teams combine engineering depth, project discipline, and digital insight to de-risk every phase of your wind investment."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-gradient-to-br from-navy to-navy-light p-8 text-center text-white sm:p-12">
            <h3 className="font-display text-2xl font-bold sm:text-3xl">
              Need a tailored service package?
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-white/70">
              From single-site advisory to multi-country EPC portfolios, we design engagement models
              that match your risk profile and timeline.
            </p>
            <Button to="/contact" className="mt-6">
              Request a Proposal
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
