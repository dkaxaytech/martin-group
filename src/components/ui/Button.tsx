import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'

interface ButtonProps {
  children: React.ReactNode
  to?: string
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  type?: 'button' | 'submit'
}

const variants = {
  primary:
    'bg-green text-white hover:bg-green-dark shadow-lg shadow-green/25',
  secondary: 'bg-navy text-white hover:bg-navy-light',
  outline:
    'border-2 border-white text-white hover:bg-white hover:text-navy',
  ghost:
    'border-2 border-navy/15 text-navy hover:border-green hover:text-green',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
}

export function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className,
  type = 'button',
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold transition-all duration-300 min-h-11',
    variants[variant],
    sizes[size],
    className,
  )

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
