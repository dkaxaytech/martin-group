import { motion } from 'framer-motion'
import { getIcon } from '../../utils/icons'
import type { ServiceItem } from '../../types'

interface ServiceCardProps {
  service: ServiceItem
  index?: number
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const Icon = getIcon(service.icon)

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      whileHover={{ y: -6 }}
      className="rounded-3xl border border-navy/5 bg-white p-7 shadow-lg shadow-navy/5 transition"
    >
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-green/10 text-green">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="font-display text-xl font-semibold text-navy">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-soft">{service.description}</p>
    </motion.article>
  )
}
