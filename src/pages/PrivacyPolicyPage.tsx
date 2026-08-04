import { images } from '../data/images'
import { PageHero } from '../components/ui/PageHero'
import { SEO } from '../components/ui/SEO'

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Example Group privacy policy — how we collect, use, and protect personal information."
      />
      <PageHero
        title="Privacy Policy"
        subtitle="Your privacy matters. This policy explains how Example Group handles personal data."
        image={images.officeDesk}
      />

      <section className="py-20">
        <div className="prose prose-slate mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-sm text-slate-soft">Last updated: August 4, 2026</p>

          <div className="mt-8 space-y-8 text-slate-soft leading-relaxed">
            <section>
              <h2 className="font-display text-2xl font-bold text-navy">1. Introduction</h2>
              <p className="mt-3">
                Example Group (“we”, “us”, or “our”) respects your privacy and is committed to
                protecting personal information collected through our website and business
                communications. This Privacy Policy describes how we collect, use, store, and share
                information when you visit www.example.com or contact us.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-navy">2. Information We Collect</h2>
              <p className="mt-3">
                We may collect information you provide voluntarily, including name, email address,
                phone number, company name, and message content submitted through our contact or
                career inquiry forms. We may also collect technical data such as browser type, device
                information, and anonymized usage metrics to improve website performance.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-navy">3. How We Use Information</h2>
              <p className="mt-3">
                Personal information is used to respond to inquiries, process partnership or career
                requests, improve our digital services, and communicate relevant updates when you
                have opted in. We do not sell personal data to third parties.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-navy">4. Data Retention & Security</h2>
              <p className="mt-3">
                We retain personal information only as long as necessary for the purposes described
                in this policy or as required by applicable law. Appropriate technical and
                organizational measures are applied to protect data against unauthorized access,
                loss, or misuse.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-navy">5. Cookies</h2>
              <p className="mt-3">
                Our website may use essential and analytics cookies to support functionality and
                understand aggregate visitor behavior. You can control cookie preferences through
                your browser settings.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-navy">6. Your Rights</h2>
              <p className="mt-3">
                Depending on your jurisdiction, you may have rights to access, correct, delete, or
                restrict processing of your personal data. To exercise these rights, contact us at
                hello@example.com.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold text-navy">7. Contact</h2>
              <p className="mt-3">
                For privacy-related questions, write to Example Group, Coimbatore, Tamil Nadu, India,
                or email hello@example.com.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}
