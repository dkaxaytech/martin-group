import { motion } from 'framer-motion'
import { progressMetrics, sustainabilityMilestones } from '../data/content'
import { images } from '../data/images'
import { PageHero } from '../components/ui/PageHero'
import { SEO } from '../components/ui/SEO'
import { SectionHeading } from '../components/ui/SectionHeading'
import { AnimatedProgress } from '../components/ui/AnimatedProgress'
import { Button } from '../components/ui/Button'

export default function SustainabilityPage() {
  return (
    <>
      <SEO
        title="Sustainability"
        description="Martin Group sustainability commitments — carbon reduction, green energy, environment, and community impact."
      />
      <PageHero
        title="Sustainability"
        subtitle="Clean energy is our product — and responsible stewardship is how we deliver it."
        image={images.greenEnergy}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Impact Metrics"
            title="Progress you can measure"
            description="We track carbon reduction, renewable share, environmental performance, and community outcomes across our portfolio."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {progressMetrics.map((metric) => (
              <AnimatedProgress key={metric.label} metric={metric} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Timeline"
            title="Our sustainability journey"
            description="From founding ambitions to a science-aligned net-zero pathway."
          />
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-4 top-0 h-full w-px bg-green/30 sm:left-1/2" />
            <div className="space-y-10">
              {sustainabilityMilestones.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col gap-3 pl-12 sm:pl-0 ${
                    i % 2 === 0 ? 'sm:pr-[52%] sm:text-right' : 'sm:pl-[52%]'
                  }`}
                >
                  <span className="absolute left-2 top-1 h-4 w-4 rounded-full border-4 border-white bg-green shadow sm:left-1/2 sm:-translate-x-1/2" />
                  <span className="font-display text-sm font-bold text-green">{item.year}</span>
                  <h3 className="font-display text-xl font-semibold text-navy">{item.title}</h3>
                  <p className="text-sm text-slate-soft">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Environment',
                text: 'Biodiversity assessments, responsible land use, and wildlife protection protocols guide every development.',
              },
              {
                title: 'Green Energy',
                text: 'We expand renewable capacity that displaces fossil generation and strengthens resilient grids.',
              },
              {
                title: 'Community',
                text: 'Local hiring, skills training, and community benefit funds ensure host regions share in project success.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-navy/5 bg-white p-7 shadow-md"
              >
                <h3 className="font-display text-xl font-semibold text-navy">{card.title}</h3>
                <p className="mt-3 text-sm text-slate-soft">{card.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button to="/contact">Discuss Sustainability Partnerships</Button>
          </div>
        </div>
      </section>
    </>
  )
}
