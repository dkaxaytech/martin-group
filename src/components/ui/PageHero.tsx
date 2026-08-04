import { motion } from 'framer-motion'
import { Button } from './Button'

interface PageHeroProps {
  title: string
  subtitle: string
  image: string
  ctaLabel?: string
  ctaTo?: string
}

export function PageHero({ title, subtitle, image, ctaLabel, ctaTo }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[52vh] items-end overflow-hidden sm:min-h-[60vh]">
      <img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy/70 to-navy/30" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <h1 className="font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">{subtitle}</p>
          {ctaLabel && ctaTo && (
            <div className="mt-8">
              <Button to={ctaTo}>{ctaLabel}</Button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
