import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'
import type { ProgressMetric } from '../../types'

export function AnimatedProgress({ metric }: { metric: ProgressMetric }) {
  const { ref, inView } = useInView(0.35)

  return (
    <div ref={ref} className="rounded-2xl bg-white p-6 shadow-lg shadow-navy/5">
      <div className="mb-3 flex items-end justify-between gap-3">
        <h3 className="font-display text-lg font-semibold text-navy">{metric.label}</h3>
        <span className="font-display text-2xl font-bold text-green">
          {inView ? metric.value : 0}%
        </span>
      </div>
      <p className="mb-4 text-sm text-slate-soft">{metric.description}</p>
      <div className="h-2.5 overflow-hidden rounded-full bg-mist">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-green-dark to-green-light"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${metric.value}%` : 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}
