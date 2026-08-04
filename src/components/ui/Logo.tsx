import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'

interface LogoProps {
  className?: string
  light?: boolean
}

/** Windfarm wordmark with turbine mark */
export function Logo({ className, light = false }: LogoProps) {
  const stroke = light ? '#FFFFFF' : '#22C55E'

  return (
    <Link
      to="/"
      className={cn('flex items-center gap-2.5 min-w-0', className)}
      aria-label="Windfarm home"
    >
      <span
        className={cn(
          'flex h-10 w-10 shrink-0 items-center justify-center rounded-xl',
          light ? 'bg-white/10' : 'bg-navy',
        )}
        aria-hidden
      >
        <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none">
          {/* Tower */}
          <path
            d="M16 14v12"
            stroke={stroke}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Base */}
          <path
            d="M11 26h10"
            stroke={stroke}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Hub */}
          <circle cx="16" cy="13" r="1.8" fill={stroke} />
          {/* Blades */}
          <path
            d="M16 13 L16 4.5"
            stroke={stroke}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M16 13 L23.5 17.5"
            stroke={stroke}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M16 13 L8.5 17.5"
            stroke={stroke}
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span
        className={cn(
          'block font-display text-lg font-bold leading-none tracking-wide sm:text-xl',
          light ? 'text-white' : 'text-navy',
        )}
      >
        WINDFARM
      </span>
    </Link>
  )
}
