import { motion } from 'framer-motion'
import { coreValues, heroStats } from '../data/content'
import { images } from '../data/images'
import { PageHero } from '../components/ui/PageHero'
import { SEO } from '../components/ui/SEO'
import { SectionHeading } from '../components/ui/SectionHeading'
import { StatCounter } from '../components/ui/StatCounter'
import { Button } from '../components/ui/Button'
import { getIcon } from '../utils/icons'

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About"
        description="Learn about Windfarm Group — our mission, vision, and values driving diversified industrial excellence."
      />
      <PageHero
        title="About Windfarm Group"
        subtitle="We are builders of clean power and industrial excellence, committed to a sustainable future."
        image={images.natureHills}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="min-w-0"
          >
            <SectionHeading
              align="left"
              eyebrow="Who We Are"
              title="Engineering the future across energy and industry"
              description="Windfarm Group is a diversified enterprise with businesses in renewable wind energy and textile manufacturing. As a group platform spanning complementary industries, we bring deep technical expertise and a long-term ownership mindset to every venture."
            />
            <p className="text-slate-soft leading-relaxed">
              Our teams collaborate across wind power and spinning operations — partnering with
              utilities, manufacturers, and industrial customers to unlock high-performing assets
              that strengthen energy security and manufacturing excellence.
            </p>
            <Button to="/contact" className="mt-8">
              Partner With Us
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl shadow-2xl"
          >
            <img
              src={images.coastalWind}
              alt="Windfarm landscape"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-mist py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-white p-8 shadow-lg shadow-navy/5">
              <p className="text-sm font-semibold uppercase tracking-widest text-green">Mission</p>
              <h3 className="mt-3 font-display text-2xl font-bold text-navy">
                Accelerate the world’s transition to clean wind energy
              </h3>
              <p className="mt-4 text-slate-soft leading-relaxed">
                We develop and operate wind projects that deliver affordable, reliable renewable
                electricity while creating lasting value for communities and investors.
              </p>
            </div>
            <div className="rounded-3xl bg-navy p-8 text-white shadow-lg">
              <p className="text-sm font-semibold uppercase tracking-widest text-green-light">
                Vision
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold">
                A world powered by sustainable wind
              </h3>
              <p className="mt-4 text-white/75 leading-relaxed">
                To be the partner of choice for transformative wind energy infrastructure —
                recognized for technical excellence, integrity, and measurable climate impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Core Values"
            title="Principles that guide every turbine we build"
            description="Our culture is rooted in responsibility — to people, planet, and performance."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, i) => {
              const Icon = getIcon(value.icon)
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-3xl border border-navy/5 bg-white p-6 shadow-md"
                >
                  <Icon className="mb-4 h-8 w-8 text-green" />
                  <h3 className="font-display text-lg font-semibold text-navy">{value.title}</h3>
                  <p className="mt-2 text-sm text-slate-soft">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-navy/5 bg-white py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
          {heroStats.map((stat) => (
            <StatCounter key={stat.label} stat={stat} />
          ))}
        </div>
      </section>
    </>
  )
}
