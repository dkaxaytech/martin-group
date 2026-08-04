import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { heroStats, projects, services, groupCompanies, coreValues } from '../data/content'
import { images } from '../data/images'
import { Button } from '../components/ui/Button'
import { SEO } from '../components/ui/SEO'
import { SectionHeading } from '../components/ui/SectionHeading'
import { StatCounter } from '../components/ui/StatCounter'
import { ProjectCard } from '../components/ui/ProjectCard'
import { ServiceCard } from '../components/ui/ServiceCard'
import { GroupCard } from '../components/ui/GroupCard'
import { OurBrandsSection } from '../components/sections/OurBrandsSection'
import { getIcon } from '../utils/icons'

export default function HomePage() {
  return (
    <>
      <SEO
        title="Home"
        description="Example Group — diversified excellence in wind energy, textile manufacturing, and industrial innovation across India and beyond."
      />

      <section className="relative flex min-h-screen items-center overflow-hidden">
        <img
          src={images.heroWind}
          alt="Example Group renewable energy and industrial leadership"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/75 to-navy/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,197,94,0.18),transparent_50%)]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-light">
              Example Group
            </p>
            <h1 className="font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-7xl">
              Building Industries That Power Progress
            </h1>
            <p className="mt-6 max-w-xl text-base text-white/80 sm:text-lg">
              From clean wind energy to precision textile manufacturing — Example Group delivers
              innovation, sustainability, and quality across diversified businesses.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#our-brands" size="lg">
                Explore Our Brands <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/contact" variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-16 grid grid-cols-2 gap-6 rounded-3xl glass p-6 sm:grid-cols-4 lg:mt-24 lg:p-8"
          >
            {heroStats.map((stat) => (
              <StatCounter key={stat.label} stat={stat} light />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-mist py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="min-w-0"
          >
            <SectionHeading
              align="left"
              eyebrow="About Example Group"
              title="A diversified group built on trust and industrial excellence"
              description="Example Group brings together complementary businesses — including Example Windfarm and Example Spinning Mills — to create lasting value for customers, communities, and partners."
            />
            <div className="mt-2 grid gap-4 sm:grid-cols-2">
              {coreValues.slice(0, 2).map((value) => {
                const Icon = getIcon(value.icon)
                return (
                  <div key={value.title} className="rounded-2xl bg-white p-5 shadow-sm">
                    <Icon className="mb-3 h-6 w-6 text-green" />
                    <h3 className="font-display font-semibold text-navy">{value.title}</h3>
                    <p className="mt-1 text-sm text-slate-soft">{value.description}</p>
                  </div>
                )
              })}
            </div>
            <Button to="/about" className="mt-8" variant="secondary">
              Read More <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl shadow-2xl shadow-navy/20">
              <img
                src={images.turbineClose}
                alt="Example Group industrial and energy operations"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 rounded-2xl bg-green px-6 py-4 text-white shadow-xl sm:left-6">
              <p className="font-display text-2xl font-bold">Multi-Industry</p>
              <p className="text-sm text-white/90">leadership & growth</p>
            </div>
          </motion.div>
        </div>
      </section>

      <OurBrandsSection />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Group Companies"
            title="One group. Five complementary capabilities."
            description="Example Group unites specialized businesses that cover energy, manufacturing, infrastructure, and engineering excellence."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {groupCompanies.slice(0, 3).map((company, i) => (
              <GroupCard key={company.id} company={company} index={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/group" variant="ghost">
              View All Companies <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            light
            eyebrow="Services"
            title="End-to-end wind energy expertise"
            description="From first wind measurement to decades of optimized operations, Example Windfarm supports every stage of your project."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <div key={service.id} className="rounded-3xl bg-white/5 p-1">
                <ServiceCard service={service} index={i} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Featured Projects"
            title="Clean power delivered at scale"
            description="Explore a selection of Example Windfarm farms shaping energy landscapes across continents."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button to="/projects">
              View All Projects <Play className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 lg:py-24">
        <img
          src={images.offshoreWind}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Ready to partner with Example Group?
          </h2>
          <p className="mt-4 text-white/75">
            Whether you need renewable energy solutions or premium yarn manufacturing, our teams are
            ready to collaborate.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/contact" size="lg">
              Start a Conversation
            </Button>
            <Button href="#our-brands" variant="outline" size="lg">
              Discover Our Brands
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
