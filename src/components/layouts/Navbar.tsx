import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../../data/content'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import { cn } from '../../utils/cn'
import { Button } from '../ui/Button'
import { Logo } from '../ui/Logo'

export function Navbar() {
  const scrolled = useScrollPosition(40)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || open
          ? 'bg-white/95 shadow-lg shadow-navy/5 backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Logo light={!scrolled && !open} />

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'rounded-full px-3 py-2 text-sm font-medium transition-colors min-h-11 inline-flex items-center',
                  scrolled
                    ? isActive
                      ? 'text-green'
                      : 'text-navy/80 hover:text-green'
                    : isActive
                      ? 'text-green-light'
                      : 'text-white/90 hover:text-white',
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button to="/contact" size="sm" variant={scrolled ? 'primary' : 'outline'}>
            Get in Touch
          </Button>
        </div>

        <button
          type="button"
          className={cn(
            'inline-flex min-h-11 min-w-11 items-center justify-center rounded-full lg:hidden',
            scrolled || open ? 'text-navy' : 'text-white',
          )}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-navy/5 bg-white lg:hidden"
          >
            <div className="flex max-h-[80vh] flex-col gap-1 overflow-y-auto px-4 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-navy hover:bg-mist min-h-11"
                >
                  {link.label}
                </Link>
              ))}
              <Button to="/contact" className="mt-2 w-full" onClick={() => setOpen(false)}>
                Get in Touch
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
