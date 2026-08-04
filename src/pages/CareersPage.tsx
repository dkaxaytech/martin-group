import { motion } from 'framer-motion'
import { Briefcase, MapPin } from 'lucide-react'
import { careerBenefits, jobOpenings } from '../data/content'
import { images } from '../data/images'
import { PageHero } from '../components/ui/PageHero'
import { SEO } from '../components/ui/SEO'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Button } from '../components/ui/Button'

export default function CareersPage() {
  return (
    <>
      <SEO
        title="Careers"
        description="Join Windfarm Group — explore open roles across wind energy, textiles, and industrial operations."
      />
      <PageHero
        title="Careers"
        subtitle="Build your career at the frontier of clean energy and industrial manufacturing."
        image={images.teamWork}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Windfarm"
            title="Benefits that support ambitious careers"
            description="We invest in people who share our passion for renewable energy and operational excellence."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {careerBenefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="rounded-3xl bg-mist p-6"
              >
                <h3 className="font-display text-lg font-semibold text-navy">{benefit.title}</h3>
                <p className="mt-2 text-sm text-slate-soft">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Open Roles"
            title="Current openings"
            description="Find a role that matches your expertise — and help power the clean energy transition."
          />
          <div className="space-y-4">
            {jobOpenings.map((job, i) => (
              <motion.article
                key={job.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex flex-col gap-4 rounded-3xl bg-white p-6 shadow-md sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0">
                  <h3 className="font-display text-xl font-semibold text-navy">{job.title}</h3>
                  <p className="mt-2 text-sm text-slate-soft">{job.description}</p>
                  <div className="mt-3 flex flex-wrap gap-3 text-xs font-medium text-navy/70">
                    <span className="inline-flex items-center gap-1 rounded-full bg-mist px-3 py-1">
                      <Briefcase className="h-3.5 w-3.5 text-green" />
                      {job.department}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-mist px-3 py-1">
                      <MapPin className="h-3.5 w-3.5 text-green" />
                      {job.location}
                    </span>
                    <span className="rounded-full bg-mist px-3 py-1">{job.type}</span>
                  </div>
                </div>
                <Button to="/contact" className="shrink-0">
                  Apply Now
                </Button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
