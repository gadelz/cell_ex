'use client'

import { ButtonHTMLAttributes, forwardRef, cloneElement, ReactElement } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, disabled, children, asChild, ...props }, ref) => {
    const baseStyles = 'font-mono font-medium transition-all duration-200 ease-out rounded-sm focus:outline-none focus:ring-2 focus:ring-cell-emerald focus:ring-offset-2 focus:ring-offset-cell-bg disabled:opacity-50 disabled:cursor-not-allowed'

    const variants = {
      primary: 'bg-cell-emerald text-cell-bg hover:shadow-emerald-hover hover:scale-[1.02] active:scale-[0.98]',
      secondary: 'border border-cell-emerald text-cell-emerald hover:bg-cell-emerald hover:text-cell-bg hover:shadow-emerald',
      ghost: 'text-cell-text hover:text-cell-emerald hover:bg-cell-surface',
    }

    const sizes = {
      sm: 'px-3 py-1.5 text-xs',
      md: 'px-5 py-2.5 text-sm',
      lg: 'px-7 py-3 text-base',
    }

    const combinedClassName = cn(baseStyles, variants[variant], sizes[size], className)

    if (asChild && children) {
      const child = children as ReactElement
      return cloneElement(child, {
        className: cn(combinedClassName, child.props.className),
        ...props,
      })
    }

    return (
      <button
        ref={ref}
        className={combinedClassName}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'