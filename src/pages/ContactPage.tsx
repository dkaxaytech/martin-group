import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { companyInfo } from '../data/content'
import { images } from '../data/images'
import { PageHero } from '../components/ui/PageHero'
import { SEO } from '../components/ui/SEO'
import { SectionHeading } from '../components/ui/SectionHeading'
import { ContactForm } from '../components/ui/ContactForm'

export default function ContactPage() {
  return (
    <>
      <SEO
        title="Contact"
        description="Contact Martin Group — address, phone, email, and inquiry form for partnerships."
      />
      <PageHero
        title="Contact Us"
        subtitle="Whether you need wind energy solutions, yarn supply partnerships, or group collaboration — we are ready to help."
        image={images.contactDesk}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Get in Touch"
            title="Let’s build the next partnership together"
          />

          <div className="grid gap-10 lg:grid-cols-2">
            <div className="min-w-0 space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <InfoCard
                  icon={MapPin}
                  title="Address"
                  text={companyInfo.address}
                />
                <InfoCard
                  icon={Phone}
                  title="Phone"
                  text={companyInfo.phone}
                  href={`tel:${companyInfo.phone}`}
                />
                <InfoCard
                  icon={Mail}
                  title="Email"
                  text={companyInfo.email}
                  href={`mailto:${companyInfo.email}`}
                />
                <InfoCard icon={Clock} title="Working Hours" text={companyInfo.hours} />
              </div>

              <div className="overflow-hidden rounded-3xl border border-navy/10 bg-mist">
                <div className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-navy/5 to-green/10 p-6 text-center">
                  <div>
                    <MapPin className="mx-auto mb-3 h-10 w-10 text-green" />
                    <p className="font-display text-lg font-semibold text-navy">
                      Google Map Placeholder
                    </p>
                    <p className="mt-2 text-sm text-slate-soft">
                      Embed your Google Maps iframe here for the Martin Group headquarters location.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}

function InfoCard({
  icon: Icon,
  title,
  text,
  href,
}: {
  icon: typeof MapPin
  title: string
  text: string
  href?: string
}) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-md shadow-navy/5">
      <Icon className="mb-3 h-5 w-5 text-green" />
      <h3 className="font-display text-sm font-semibold text-navy">{title}</h3>
      {href ? (
        <a href={href} className="mt-1 block text-sm text-slate-soft hover:text-green">
          {text}
        </a>
      ) : (
        <p className="mt-1 text-sm text-slate-soft">{text}</p>
      )}
    </div>
  )
}
