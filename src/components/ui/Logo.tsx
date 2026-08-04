import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'

interface LogoProps {
  className?: string
  light?: boolean
}

/** Martin Group wordmark — geometric M mark */
export function Logo({ className, light = false }: LogoProps) {
  return (
    <Link
      to="/"
      className={cn('flex items-center gap-2.5 min-w-0', className)}
      aria-label="Martin Group home"
    >
      <span
        className={cn(
          'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl',
          light ? 'bg-white/10' : 'bg-navy',
        )}
        aria-hidden
      >
        <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none">
          <path
            d="M6 26V8l6 10 4-7 4 7 6-10v18"
            stroke={light ? '#FFFFFF' : '#22C55E'}
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="min-w-0">
        <span
          className={cn(
            'block font-display text-lg font-bold leading-tight tracking-wide sm:text-xl',
            light ? 'text-white' : 'text-navy',
          )}
        >
          MARTIN
        </span>
        <span
          className={cn(
            'block text-[10px] font-medium uppercase tracking-[0.22em]',
            light ? 'text-white/70' : 'text-slate-soft',
          )}
        >
          Group
        </span>
      </span>
    </Link>
  )
}
