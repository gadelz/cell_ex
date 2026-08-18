'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { Service } from '@/lib/types'

interface ServiceRowProps {
  service: Service
  index: number
}

export function ServiceRow({ service, index }: ServiceRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        backgroundColor: 'rgba(23, 23, 23, 0.8)',
        transition: { duration: 0.2 },
      }}
      className="group relative flex items-center justify-between px-4 md:px-6 py-4 border-b border-[rgba(243,244,246,0.06)] cursor-pointer"
    >
      {/* Row Content */}
      <div className="flex items-center gap-4 md:gap-6 flex-1 min-w-0">
        {/* Number */}
        <span className="font-mono text-xs text-[rgba(243,244,246,0.3)] group-hover:text-[#10B981] transition-colors duration-200">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Service Name */}
        <div className="flex-1 min-w-0">
          <span className="font-mono font-bold text-sm md:text-base text-[#F3F4F6] group-hover:text-[#10B981] transition-colors duration-200 truncate block">
            {service.name}
          </span>
          {/* Category badge (visible on hover) */}
          <span className="hidden md:inline-block mt-1 text-[10px] font-sans text-[rgba(243,244,246,0.4)] uppercase tracking-wider">
            {service.category}
          </span>
        </div>
      </div>

      {/* Right Side: Price + Arrow */}
      <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
        <span className="font-mono text-xs md:text-sm text-[rgba(243,244,246,0.6)] group-hover:text-[#F3F4F6] transition-colors duration-200 text-right">
          {service.price}
        </span>

        {/* Animated Arrow */}
        <motion.span
          initial={{ opacity: 0, x: -8 }}
          whileHover={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
          className="inline-flex items-center justify-center w-6 h-6 rounded-sm bg-[#10B981]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <svg
            className="w-3.5 h-3.5 text-[#10B981]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </motion.span>
      </div>

      {/* Hover highlight line */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#10B981] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
    </motion.div>
  )
}