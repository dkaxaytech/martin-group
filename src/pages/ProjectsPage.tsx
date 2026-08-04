import { useMemo, useState } from 'react'
import { projects } from '../data/content'
import { images } from '../data/images'
import { PageHero } from '../components/ui/PageHero'
import { SEO } from '../components/ui/SEO'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ProjectCard } from '../components/ui/ProjectCard'
import { cn } from '../utils/cn'
import type { ProjectItem } from '../types'

const filters: Array<'All' | ProjectItem['status']> = [
  'All',
  'Completed',
  'Running',
  'Upcoming',
]

export default function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')

  const filtered = useMemo(
    () => (filter === 'All' ? projects : projects.filter((p) => p.status === filter)),
    [filter],
  )

  return (
    <>
      <SEO
        title="Projects"
        description="Browse Windfarm projects — completed, running, and upcoming developments worldwide."
      />
      <PageHero
        title="Projects"
        subtitle="A growing portfolio of onshore, coastal, and offshore wind assets delivering clean megawatts."
        image={images.turbineClose}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Portfolio"
            title="Projects that power communities"
            description="Filter by status to explore completed assets, operating farms, and developments in our pipeline."
          />

          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={cn(
                  'min-h-11 rounded-full px-5 text-sm font-semibold transition',
                  filter === item
                    ? 'bg-green text-white shadow-lg shadow-green/25'
                    : 'bg-mist text-navy hover:bg-navy/5',
                )}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-16 text-center text-slate-soft">No projects match this filter.</p>
          )}
        </div>
      </section>
    </>
  )
}
