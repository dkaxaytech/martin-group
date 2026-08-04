import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'

interface LogoProps {
  className?: string
  light?: boolean
  /** Brand mark — wind turbine (default) or spinning bobbin */
  variant?: 'windfarm' | 'spinning'
  /** Render mark without a link (e.g. hero badge) */
  decorative?: boolean
}

function WindTurbineIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" aria-hidden>
      {/* Ground */}
      <path d="M8 28h16" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      {/* Tower */}
      <path d="M15.2 28 L16 12.5 L16.8 28 Z" fill={color} opacity="0.95" />
      {/* Nacelle */}
      <rect x="14.2" y="11.2" width="5.2" height="2.4" rx="0.8" fill={color} />
      {/* Hub */}
      <circle cx="16" cy="12.4" r="1.4" fill={color} />
      {/* Blade 1 — up */}
      <path
        d="M16 12.4 C15.2 9.2 14.6 5.8 16 3.5 C17.4 5.8 16.8 9.2 16 12.4 Z"
        fill={color}
      />
      {/* Blade 2 — lower right */}
      <path
        d="M16 12.4 C18.8 13.6 22.2 15.2 24.2 13.6 C22 15.8 18.6 14.8 16 12.4 Z"
        fill={color}
      />
      {/* Blade 3 — lower left */}
      <path
        d="M16 12.4 C14.8 15.2 12.2 18.4 9.8 17.2 C11.8 15.2 14.2 14.2 16 12.4 Z"
        fill={color}
      />
    </svg>
  )
}

function SpinningBobbinIcon({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" aria-hidden>
      {/* Spindle rod */}
      <path d="M16 4v24" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      {/* Top flange */}
      <path d="M10 7h12" stroke={color} strokeWidth="2" strokeLinecap="round" />
      {/* Bottom flange */}
      <path d="M10 25h12" stroke={color} strokeWidth="2" strokeLinecap="round" />
      {/* Yarn wraps */}
      <ellipse cx="16" cy="12" rx="6" ry="2.2" stroke={color} strokeWidth="1.6" />
      <ellipse cx="16" cy="16" rx="7" ry="2.4" stroke={color} strokeWidth="1.6" />
      <ellipse cx="16" cy="20" rx="6" ry="2.2" stroke={color} strokeWidth="1.6" />
    </svg>
  )
}

/** Windfarm / Spinning Mills wordmark */
export function Logo({
  className,
  light = false,
  variant = 'windfarm',
  decorative = false,
}: LogoProps) {
  const color = light ? '#FFFFFF' : '#22C55E'
  const isSpinning = variant === 'spinning'
  const label = isSpinning ? 'Windfarm Spinning Mills home' : 'Windfarm home'
  const title = isSpinning ? 'SPINNING' : 'WINDFARM'
  const subtitle = isSpinning ? 'MILLS' : null

  const mark = (
    <>
      <span
        className={cn(
          'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl',
          light ? 'bg-white/10' : 'bg-navy',
        )}
        aria-hidden
      >
        {isSpinning ? <SpinningBobbinIcon color={color} /> : <WindTurbineIcon color={color} />}
      </span>
      <span className="min-w-0">
        <span
          className={cn(
            'block font-display text-lg font-bold leading-none tracking-wide sm:text-xl',
            light ? 'text-white' : 'text-navy',
          )}
        >
          {title}
        </span>
        {subtitle ? (
          <span
            className={cn(
              'mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.2em]',
              light ? 'text-white/70' : 'text-slate-soft',
            )}
          >
            {subtitle}
          </span>
        ) : null}
      </span>
    </>
  )

  if (decorative) {
    return (
      <span className={cn('flex items-center gap-2.5 min-w-0', className)} aria-hidden>
        {mark}
      </span>
    )
  }

  return (
    <Link
      to={isSpinning ? '/brands/spinning-mills' : '/'}
      className={cn('flex items-center gap-2.5 min-w-0', className)}
      aria-label={label}
    >
      {mark}
    </Link>
  )
}
