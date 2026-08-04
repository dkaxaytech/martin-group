import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link } from 'react-router-dom'
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react'
import { companyInfo, footerServices, navLinks } from '../../data/content'
import { Button } from '../ui/Button'
import { Logo } from '../ui/Logo'

export function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
    setEmail('')
  }

  return (
    <footer className="bg-navy-dark text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="min-w-0">
            <Logo light />
            <p className="mt-4 text-sm leading-relaxed text-white/65">
              {companyInfo.description}
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-white/80 transition hover:bg-green hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {navLinks.slice(0, 6).map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/65 transition hover:text-green-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold">Services</h3>
            <ul className="mt-4 space-y-2">
              {footerServices.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm text-white/65 transition hover:text-green-light"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <h3 className="font-display text-lg font-semibold">Newsletter</h3>
            <p className="mt-4 text-sm text-white/65">
              Stay informed on wind energy insights, project updates, and career opportunities.
            </p>
            <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="min-h-11 w-full min-w-0 rounded-full border border-white/15 bg-white/5 px-4 text-sm text-white outline-none placeholder:text-white/40 focus:border-green"
              />
              <Button type="submit" size="sm" className="shrink-0">
                Subscribe
              </Button>
            </form>
            {submitted && (
              <p className="mt-2 text-sm text-green-light">Thank you for subscribing.</p>
            )}

            <div className="mt-6 space-y-2 text-sm text-white/65">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-green" />
                <span>{companyInfo.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-green" />
                <a href={`tel:${companyInfo.phone}`} className="hover:text-green-light">
                  {companyInfo.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-green" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-green-light">
                  {companyInfo.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Windfarm. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link to="/privacy-policy" className="hover:text-green-light">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-green-light">
              Contact
            </Link>
            <Link to="/careers" className="hover:text-green-light">
              Careers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
