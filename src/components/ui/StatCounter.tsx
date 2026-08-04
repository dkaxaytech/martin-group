import { motion } from 'framer-motion'
import { useCountUp } from '../../hooks/useCountUp'
import { useInView } from '../../hooks/useInView'
import type { StatItem } from '../../types'

interface StatCounterProps {
  stat: StatItem
  light?: boolean
}

export function StatCounter({ stat, light = false }: StatCounterProps) {
  const { ref, inView } = useInView(0.4)
  const value = useCountUp(stat.value, 1800, inView)

  return (
    <div ref={ref} className="text-center">
      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className={`font-display text-3xl font-bold sm:text-4xl ${light ? 'text-white' : 'text-navy'}`}
      >
        {value}
        {stat.suffix}
      </motion.p>
      <p className={`mt-1 text-sm ${light ? 'text-white/70' : 'text-slate-soft'}`}>
        {stat.label}
      </p>
    </div>
  )
}
