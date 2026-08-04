import { motion } from 'framer-motion'
import { getIcon } from '../../utils/icons'
import type { GroupCompany } from '../../types'

interface GroupCardProps {
  company: GroupCompany
  index?: number
}

export function GroupCard({ company, index = 0 }: GroupCardProps) {
  const Icon = getIcon(company.icon)

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group overflow-hidden rounded-3xl bg-white shadow-lg shadow-navy/5"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={company.image}
          alt={company.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-green text-white">
            <Icon className="h-5 w-5" />
          </span>
          <h3 className="font-display text-xl font-semibold text-white">{company.name}</h3>
        </div>
      </div>
      <p className="p-6 text-sm leading-relaxed text-slate-soft">{company.description}</p>
    </motion.article>
  )
}
