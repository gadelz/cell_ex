'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/Button'

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-cell-gradient">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.03)_0%,_transparent_70%)]" />
      
      <div className="section-container relative z-10 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-cell-surface border border-cell-emerald/20 rounded-sm text-xs font-mono text-cell-emerald tracking-wider uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cell-emerald opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cell-emerald" />
              </span>
              Cell'EX \u2014 Digital & Technical Services
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-mono font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-cell-text mb-6"
          >
            Layanan Teknis & Digital
            <br />
            <span className="text-cell-emerald">Tanpa Ribet</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-sans font-light text-lg md:text-xl text-[rgba(243,244,246,0.7)] max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Website, API, mobile app, service laptop/HP, setup jaringan \u2014 pesan langsung lewat WhatsApp, proses cepat, harga transparan.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" asChild>
              <Link href="#services">Lihat Semua Layanan</Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="https://wa.me/6281234567890?text=Halo%20Cell%27EX%2C%20saya%20ingin%20konsultasi%20layanan" target="_blank" rel="noopener noreferrer">
                Chat WhatsApp
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm font-sans font-light text-[rgba(243,244,246,0.5)]"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cell-emerald" />
              <span>{'<'} 5 menit</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cell-emerald" />
              <span>Harga transparan</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cell-emerald" />
              <span>Garansi kerja</span>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <svg className="w-6 h-6 text-[rgba(243,244,246,0.3)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  )
}