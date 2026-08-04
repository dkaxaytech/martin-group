import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import type { ProjectItem } from '../../types'
import { Button } from './Button'

interface ProjectCardProps {
  project: ProjectItem
  index?: number
}

const statusColor = {
  Completed: 'bg-green/15 text-green-dark',
  Running: 'bg-sky-100 text-sky-700',
  Upcoming: 'bg-amber-100 text-amber-700',
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group overflow-hidden rounded-3xl bg-white shadow-lg shadow-navy/5 transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${statusColor[project.status]}`}
        >
          {project.status}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-navy">{project.title}</h3>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-soft">
          <MapPin className="h-4 w-4 text-green" />
          {project.location}
        </p>
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <span className="rounded-full bg-mist px-3 py-1 font-medium text-navy">
            {project.capacity}
          </span>
          <span className="rounded-full bg-mist px-3 py-1 font-medium text-navy">
            {project.year}
          </span>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-slate-soft">{project.description}</p>
        <Button to="/contact" variant="ghost" size="sm" className="mt-5">
          Read More <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </motion.article>
  )
}
