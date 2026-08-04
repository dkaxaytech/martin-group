import { useState } from 'react'
import { motion } from 'framer-motion'
import { galleryItems } from '../data/content'
import { images } from '../data/images'
import { PageHero } from '../components/ui/PageHero'
import { SEO } from '../components/ui/SEO'
import { SectionHeading } from '../components/ui/SectionHeading'
import { Lightbox } from '../components/ui/Lightbox'

export default function GalleryPage() {
  const [active, setActive] = useState<{ src: string; alt: string } | null>(null)

  return (
    <>
      <SEO
        title="Gallery"
        description="Explore Windfarm Group gallery — wind farms, manufacturing, and people powering industrial progress."
      />
      <PageHero
        title="Gallery"
        subtitle="Moments from wind farms, engineering sites, and landscapes transformed by clean energy."
        image={images.coastalWind}
      />

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Visual Stories"
            title="Wind energy in focus"
            description="Click any image to open a full-screen lightbox view."
          />

          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {galleryItems.map((item, i) => (
              <motion.button
                key={item.id}
                type="button"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                onClick={() => setActive({ src: item.src, alt: item.alt })}
                className="group mb-4 block w-full overflow-hidden rounded-2xl break-inside-avoid"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy/70 to-transparent opacity-0 transition group-hover:opacity-100">
                    <span className="p-4 text-sm font-medium text-white">{item.category}</span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        src={active?.src ?? null}
        alt={active?.alt}
        onClose={() => setActive(null)}
      />
    </>
  )
}
