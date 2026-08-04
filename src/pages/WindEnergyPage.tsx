import { motion } from 'framer-motion'
import { processSteps, windBenefits } from '../data/content'
import { images } from '../data/images'
import { PageHero } from '../components/ui/PageHero'
import { SEO } from '../components/ui/SEO'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'
import { getIcon } from '../utils/icons'

export default function WindEnergyPage() {
  return (
    <>
      <SEO
        title="Wind Energy"
        description="Discover how Martin Wind Energy farms work — technology, benefits, and the power generation process."
      />
      <PageHero
        title="Wind Energy"
        subtitle="Harnessing the power of moving air to generate clean, reliable electricity for generations."
        image={images.heroWind}
        ctaLabel="Talk to Our Experts"
        ctaTo="/contact"
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl shadow-2xl"
          >
            <img
              src={images.turbineClose}
              alt="Modern wind turbine technology"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </motion.div>
          <div className="min-w-0">
            <SectionHeading
              align="left"
              eyebrow="How Wind Farms Work"
              title="From wind resource to grid-ready power"
              description="Wind turbines convert kinetic energy into electricity. Rotor blades capture airflow, a drivetrain transfers rotation to a generator, and transformers step up voltage for grid transmission."
            />
            <ul className="space-y-3 text-slate-soft">
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-green" />
                Advanced SCADA systems monitor every turbine in real time.
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-green" />
                Optimized layouts maximize yield while respecting environmental constraints.
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-green" />
                Predictive maintenance keeps availability high across decades of operation.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-mist py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Benefits"
            title="Why wind energy matters"
            description="Wind power is one of the most cost-competitive and scalable sources of clean electricity available today."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {windBenefits.map((benefit, i) => {
              const Icon = getIcon(benefit.icon)
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="rounded-3xl bg-white p-6 shadow-md"
                >
                  <Icon className="mb-4 h-7 w-7 text-green" />
                  <h3 className="font-display text-lg font-semibold text-navy">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-slate-soft">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Power Generation Process"
            title="A proven path from concept to clean megawatts"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative rounded-3xl border border-navy/5 bg-white p-6 shadow-lg"
              >
                <span className="font-display text-4xl font-bold text-green/20">{step.step}</span>
                <h3 className="mt-2 font-display text-xl font-semibold text-navy">{step.title}</h3>
                <p className="mt-3 text-sm text-slate-soft">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 overflow-hidden rounded-3xl bg-navy">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-12">
                <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">
                  Technology that performs in real conditions
                </h3>
                <p className="mt-4 text-white/70 leading-relaxed">
                  Martin Wind Energy deploys high-capacity turbines, digital twins, and advanced foundation
                  designs tailored to onshore, coastal, and offshore environments. Our engineering
                  standards prioritize safety, availability, and lifetime energy yield.
                </p>
                <Button to="/services" className="mt-8">
                  Explore Our Services
                </Button>
              </div>
              <img
                src={images.offshoreWind}
                alt="Offshore wind technology"
                loading="lazy"
                className="h-64 w-full object-cover lg:h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
