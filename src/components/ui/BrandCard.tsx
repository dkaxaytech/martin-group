import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import type { BrandItem } from '../../types/brands'

interface BrandCardProps {
  brand: BrandItem
  index?: number
}

function BrandLink({
  to,
  className,
  children,
}: {
  to: string
  className: string
  children: React.ReactNode
}) {
  const external = /^https?:\/\//i.test(to)
  if (external) {
    return (
      <a href={to} className={className} target="_blank" rel="noreferrer">
        {children}
      </a>
    )
  }
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  )
}

export function BrandCard({ brand, index = 0 }: BrandCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-3xl bg-navy shadow-2xl shadow-navy/20"
    >
      <div className="relative aspect-[16/11] overflow-hidden sm:aspect-[16/10]">
        <img
          src={brand.image}
          alt={brand.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy/55 to-navy/20" />
        <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 bg-green/10" />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <div className="rounded-2xl glass p-5 sm:p-6">
          <h3 className="font-display text-2xl font-bold text-white sm:text-3xl">{brand.name}</h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
            {brand.description}
          </p>
          <BrandLink
            to={brand.link}
            className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-green px-6 text-sm font-semibold text-white transition hover:bg-green-dark"
          >
            {brand.buttonText}
            <ArrowUpRight className="h-4 w-4" />
          </BrandLink>
        </div>
      </div>
    </motion.article>
  )
}
