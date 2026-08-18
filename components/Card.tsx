'use client'

import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { getCategoryColor, getCategoryBg } from '@/lib/utils'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  category?: string
  hoverable?: boolean
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, category, hoverable = true, children, ...props }, ref) => {
    const baseStyles = 'rounded-sm transition-all duration-300'

    const hoverStyles = hoverable
      ? 'hover:border-cell-emerald/50 hover:shadow-emerald'
      : ''

    const categoryStyles = category ? getCategoryBg(category) : 'bg-cell-surface border-[rgba(243,244,246,0.06)]'

    return (
      <div
        ref={ref}
        className={cn(baseStyles, categoryStyles, hoverStyles, className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('px-5 pt-5 pb-3', className)} {...props} />
  )
)

CardHeader.displayName = 'CardHeader'

export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('font-mono text-lg font-bold text-cell-text', className)}
      {...props}
    />
  )
)

CardTitle.displayName = 'CardTitle'

export const CardCategory = forwardRef<HTMLSpanElement, CardProps>(
  ({ className, category, ...props }, ref) => (
    <span
      ref={ref}
      className={cn('inline-block mt-1.5 px-2 py-0.5 text-[10px] font-mono font-medium uppercase tracking-wider rounded-sm', getCategoryColor(category || "Digital"), className)}
      {...props}
    >
      {category}
    </span>
  )
)

CardCategory.displayName = 'CardCategory'

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('px-5 pb-3 text-sm text-[rgba(243,244,246,0.7)] font-sans leading-relaxed', className)} {...props} />
  )
)

CardContent.displayName = 'CardContent'

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('px-5 pb-5 pt-2 border-t border-[rgba(243,244,246,0.06)]', className)} {...props} />
  )
)

CardFooter.displayName = 'CardFooter'

export const CardPrice = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('font-mono text-lg font-bold text-cell-emerald', className)} {...props} />
  )
)

CardPrice.displayName = 'CardPrice'