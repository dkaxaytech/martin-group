import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import {
  spinningAbout,
  spinningAchievements,
  spinningCompany,
  spinningGallery,
  spinningInfrastructure,
  spinningJourney,
  spinningProducts,
  spinningQuality,
  spinningStats,
  spinningTechnology,
  spinningWhyChoose,
} from '../data/spinningMills'
import { images } from '../data/images'
import { Button } from '../components/ui/Button'
import { Lightbox } from '../components/ui/Lightbox'
import { SEO } from '../components/ui/SEO'
import { SectionHeading } from '../components/ui/SectionHeading'
import { StatCounter } from '../components/ui/StatCounter'
import { getIcon } from '../utils/icons'

export default function SpinningMillsPage() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  return (
    <>
      <SEO
        title="Example Spinning Mills"
        description="Example Spinning Mills — premium yarn manufacturing near Coimbatore with 80,000+ spindles, ISO quality practices, and nationwide supply across India."
      />

      {/* Hero Banner */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden">
        <img
          src={images.textileFactory}
          alt="Example Spinning Mills yarn production floor"
          className="absolute inset-0 h-full w-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/80 via-navy/65 to-navy-dark/90" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 pb-28 pt-36 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap items-start justify-between gap-6">
            <div className="rounded-2xl glass px-4 py-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-green-light">
                Symbol of Trust
              </p>
              <p className="font-display text-sm font-bold text-white sm:text-base">
                Example Spinning Mills Private Ltd
              </p>
            </div>
            <div className="rounded-2xl glass px-4 py-3 text-right">
              <p className="font-display text-lg font-bold tracking-wide text-white">EXAMPLE GROUP</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">Group Company</p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h1 className="font-display text-3xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {spinningCompany.heroHeadline}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-white/75 sm:text-lg">
              Premium yarn manufacturing from Coimbatore — quality, scale, and sustainability for
              India’s textile industry.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="#products" size="lg">
                View Products
              </Button>
              <Button to="/contact" variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>

        <div
          className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-white"
          style={{ clipPath: 'polygon(0 70%, 100% 0, 100% 100%, 0 100%)' }}
        />
        <div className="absolute bottom-0 right-0 h-1 w-1/3 bg-green" />
      </section>

      {/* About */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="min-w-0"
          >
            <SectionHeading
              align="left"
              eyebrow={spinningAbout.eyebrow}
              title={spinningAbout.title}
            />
            <div className="space-y-4 text-slate-soft leading-relaxed">
              {spinningAbout.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl shadow-2xl"
          >
            <img
              src={images.textileFactory}
              alt="Example Spinning Mills manufacturing floor"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-mist py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:grid-cols-4 sm:px-6 lg:px-8">
          {spinningStats.map((stat) =>
            'display' in stat ? (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl font-bold text-navy sm:text-4xl">{stat.display}</p>
                <p className="mt-1 text-sm text-slate-soft">{stat.label}</p>
              </div>
            ) : (
              <StatCounter
                key={stat.label}
                stat={{ value: stat.value, suffix: stat.suffix, label: stat.label }}
              />
            ),
          )}
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Journey"
            title="A decade-plus of deliberate growth"
            description="From a focused start near Coimbatore to a nationwide yarn partner — and a future built for greater capacity."
          />
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-4 top-0 h-full w-px bg-green/30 sm:left-1/2" />
            <div className="space-y-10">
              {spinningJourney.map((item, i) => (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col gap-2 pl-12 sm:pl-0 ${
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

      {/* Manufacturing Capacity */}
      <section className="bg-navy py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            light
            eyebrow="Manufacturing Capacity"
            title="Industrial scale with precision at every spindle"
            description="Our Coimbatore facility combines high spindle count with disciplined process control to deliver consistent yarn quality at volume."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: '80,000+ Spindles',
                text: 'Significant installed capacity supporting large and recurring production programs.',
              },
              {
                title: 'Multi-Fibre Capability',
                text: 'Cotton, viscose, polyester, and blended yarns manufactured under one quality system.',
              },
              {
                title: 'Path to 100,000+',
                text: 'Expansion plans target over 100,000 spindles without compromising ISO standards.',
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur"
              >
                <h3 className="font-display text-xl font-semibold">{card.title}</h3>
                <p className="mt-3 text-sm text-white/70">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="scroll-mt-24 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Products"
            title="Yarn and fabric solutions for modern textile demand"
            description="A carefully curated portfolio designed for apparel, home textiles, and industrial applications."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {spinningProducts.map((product, i) => {
              const Icon = getIcon(product.icon)
              return (
                <motion.article
                  key={product.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="overflow-hidden rounded-3xl border border-navy/5 bg-white shadow-lg shadow-navy/5"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-mist">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-green shadow">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-navy">{product.name}</h3>
                    <p className="mt-2 text-sm text-slate-soft">{product.description}</p>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Technology"
            title="Modern spinning technology, measured results"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {spinningTechnology.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="rounded-3xl bg-white p-7 shadow-md"
              >
                <h3 className="font-display text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-soft">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Quality Standards"
            title="ISO-aligned practices that protect every delivery"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {spinningQuality.map((item) => (
              <div key={item.title} className="rounded-3xl border border-navy/5 p-7">
                <CheckCircle2 className="mb-4 h-7 w-7 text-green" />
                <h3 className="font-display text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-soft">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="bg-mist py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Infrastructure"
            title="Built for reliability near India’s textile heartland"
          />
          <div className="grid gap-6 md:grid-cols-3">
            {spinningInfrastructure.map((item) => (
              <div key={item.title} className="rounded-3xl bg-white p-7 shadow-md">
                <h3 className="font-display text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-soft">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Why leading buyers choose Example Spinning Mills"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {spinningWhyChoose.map((item, i) => {
              const Icon = getIcon(item.icon)
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-3xl bg-navy p-6 text-white"
                >
                  <Icon className="mb-4 h-7 w-7 text-green-light" />
                  <h3 className="font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="bg-mist py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Achievements"
            title="Milestones that define our reputation"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {spinningAchievements.map((item, i) => {
              const Icon = getIcon(item.icon)
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-3xl bg-white p-6 shadow-md"
                >
                  <Icon className="mb-4 h-7 w-7 text-green" />
                  <h3 className="font-display text-lg font-semibold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-soft">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Gallery"
            title="Inside Example Spinning Mills"
            description="A glimpse of our plant, products, and people-powered production culture."
          />
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {spinningGallery.map((item, i) => (
              <motion.button
                key={item.id}
                type="button"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                onClick={() => setLightbox({ src: item.src, alt: item.alt })}
                className="group mb-4 block w-full overflow-hidden rounded-2xl break-inside-avoid"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy/70 to-transparent opacity-0 transition group-hover:opacity-100">
                    <span className="p-4 text-sm font-medium text-white">{item.category}</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20">
        <img
          src={images.yarnCotton}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy/85" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Ready to Partner With Example Spinning Mills?
          </h2>
          <p className="mt-4 text-white/75">
            Let’s discuss yarn specifications, volume programs, and long-term supply partnerships.
          </p>
          <Button to="/contact" size="lg" className="mt-8">
            Contact Us <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Contact"
            title="Connect with Example Spinning Mills"
            description="Reach our commercial team for enquiries, samples, and partnership discussions."
          />
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-mist p-5">
              <MapPin className="mb-3 h-5 w-5 text-green" />
              <h3 className="font-display text-sm font-semibold text-navy">Address</h3>
              <p className="mt-1 text-sm text-slate-soft">{spinningCompany.address}</p>
            </div>
            <div className="rounded-2xl bg-mist p-5">
              <Phone className="mb-3 h-5 w-5 text-green" />
              <h3 className="font-display text-sm font-semibold text-navy">Phone</h3>
              <a
                href={`tel:${spinningCompany.phone}`}
                className="mt-1 block text-sm text-slate-soft hover:text-green"
              >
                {spinningCompany.phone}
              </a>
            </div>
            <div className="rounded-2xl bg-mist p-5">
              <Mail className="mb-3 h-5 w-5 text-green" />
              <h3 className="font-display text-sm font-semibold text-navy">Email</h3>
              <a
                href={`mailto:${spinningCompany.email}`}
                className="mt-1 block text-sm text-slate-soft hover:text-green"
              >
                {spinningCompany.email}
              </a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link to="/contact" className="text-sm font-semibold text-green hover:text-green-dark">
              Or use the Example Group contact form →
            </Link>
          </div>
        </div>
      </section>

      <Lightbox
        src={lightbox?.src ?? null}
        alt={lightbox?.alt}
        onClose={() => setLightbox(null)}
      />
    </>
  )
}
