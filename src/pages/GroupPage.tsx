import { groupCompanies } from '../data/content'
import { images } from '../data/images'
import { PageHero } from '../components/ui/PageHero'
import { SEO } from '../components/ui/SEO'
import { SectionHeading } from '../components/ui/SectionHeading'
import { GroupCard } from '../components/ui/GroupCard'
import { Button } from '../components/ui/Button'

export default function GroupPage() {
  return (
    <>
      <SEO
        title="Group Companies"
        description="Explore Martin Group companies spanning wind, solar, infrastructure, logistics, engineering, and textiles."
      />
      <PageHero
        title="Group Companies"
        subtitle="A diversified industrial group delivering integrated energy and manufacturing solutions."
        image={images.cityInfra}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Portfolio"
            title="Specialized companies. Shared purpose."
            description="Each Martin Group company operates with focused expertise while collaborating across projects to deliver seamless industrial outcomes."
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {groupCompanies.map((company, i) => (
              <GroupCard key={company.id} company={company} index={i} />
            ))}
          </div>
          <div className="mt-14 rounded-3xl bg-mist p-8 text-center sm:p-12">
            <h3 className="font-display text-2xl font-bold text-navy sm:text-3xl">
              Looking for a group partnership?
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-slate-soft">
              Whether you need wind development, solar hybrid design, logistics, or engineering
              advisory — our group structure is built for complex renewable programs.
            </p>
            <Button to="/contact" className="mt-6">
              Contact Group Leadership
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
