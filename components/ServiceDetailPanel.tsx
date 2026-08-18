'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/Button'
import type { Service } from '@/lib/types'
import { generateServiceOrderMessage, generateWhatsAppLink, getCategoryBg } from '@/lib/utils'

interface ServiceDetailPanelProps {
  service: Service | null
  onClose: () => void
}

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

const panelVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
      mass: 1,
    },
  },
  exit: {
    x: '100%',
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export function ServiceDetailPanel({ service, onClose }: ServiceDetailPanelProps) {
  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!service) return null

  const whatsappLink = generateWhatsAppLink(generateServiceOrderMessage(service.name))

  return (
    <AnimatePresence>
      {/* Backdrop Overlay */}
      <motion.div
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 cursor-pointer"
        aria-hidden="true"
      />

      {/* Slide-Over Panel */}
      <motion.div
        variants={panelVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed top-0 right-0 h-full w-full md:w-[480px] bg-[#0A0A0A] border-l border-[rgba(243,244,246,0.06)] z-50 shadow-2xl flex flex-col"
        role="dialog"
        aria-label={`Detail layanan: ${service.name}`}
      >
        {/* Panel Header */}
        <div className="flex items-center justify-between p-6 border-b border-[rgba(243,244,246,0.06)]">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full bg-[#10B981] animate-pulse`} />
            <span className="font-mono text-xs text-[rgba(243,244,246,0.4)] uppercase tracking-widest">
              Service Detail
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-sm flex items-center justify-center hover:bg-white/5 transition-colors"
            aria-label="Tutup panel"
          >
            <svg
              className="w-5 h-5 text-[rgba(243,244,246,0.5)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Panel Content (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {/* Service Title */}
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1 ${getCategoryBg(service.category)} border rounded-sm text-xs font-mono mb-4`}>
              {service.category}
            </div>
            <h2 className="font-mono font-bold text-2xl md:text-3xl text-[#F3F4F6] leading-tight">
              {service.name}
            </h2>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-3xl font-bold text-[#10B981]">
              {service.price}
            </span>
            <div className="flex-1 h-px bg-[rgba(243,244,246,0.1)]" />
          </div>

          {/* Description */}
          <div>
            <h3 className="font-mono text-xs text-[rgba(243,244,246,0.4)] uppercase tracking-widest mb-3">
              // Deskripsi
            </h3>
            <p className="font-sans font-light text-[#F3F4F6]/80 leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Features List */}
          <div>
            <h3 className="font-mono text-xs text-[rgba(243,244,246,0.4)] uppercase tracking-widest mb-4">
              // Fitur Termasuk
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-3 bg-[#171717] border border-[rgba(243,244,246,0.06)] rounded-sm"
                >
                  <svg
                    className="w-4 h-4 text-[#10B981] flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="font-sans text-sm text-[#F3F4F6]/70 truncate">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Info Box */}
          <div className="p-4 bg-[#171717]/50 border border-[rgba(243,244,246,0.06)] rounded-sm">
            <div className="flex items-start gap-3">
              <svg
                className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="font-sans text-sm text-[rgba(243,244,246,0.6)] leading-relaxed">
                Pemesanan dilakukan melalui WhatsApp. Tim Cell'EX akan merespons dalam waktu kurang dari 5 menit.
              </p>
            </div>
          </div>
        </div>

        {/* Panel Footer (Sticky CTA) */}
        <div className="p-6 border-t border-[rgba(243,244,246,0.06)] bg-[#0A0A0A]">
          <Button
            variant="primary"
            size="lg"
            className="w-full flex items-center justify-center gap-2 py-4 text-base"
            asChild
          >
            <Link
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
              [ Execute Order ]
            </Link>
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}