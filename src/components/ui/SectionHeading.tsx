import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
  children?: ReactNode
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center mx-auto max-w-3xl' : 'text-left max-w-2xl'}`}
    >
      {eyebrow && (
        <p
          className={`mb-3 text-sm font-semibold uppercase tracking-[0.2em] ${light ? 'text-green-light' : 'text-green'}`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${light ? 'text-white' : 'text-navy'}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? 'text-white/75' : 'text-slate-soft'}`}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
