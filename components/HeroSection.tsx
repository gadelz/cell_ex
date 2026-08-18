'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/Button'

// Animation variants for slow fade-in (1s+)
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const fadeIn = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-16 bg-[#0A0A0A] overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(243,244,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(243,244,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="section-container py-16 md:py-24">
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">

          {/* ===== BOX 1: Main Headline (Large) ===== */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            className="md:col-span-8 md:row-span-2 relative bg-[#171717]/40 border border-[rgba(243,244,246,0.06)] rounded-sm p-8 md:p-12 flex flex-col justify-between min-h-[400px] md:min-h-[500px] group hover:border-[rgba(16,185,129,0.15)] transition-colors duration-500"
          >
            {/* Decorative Corner Markers */}
            <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-[#10B981]/30" />
            <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-[#10B981]/30" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-[#10B981]/30" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-[#10B981]/30" />

            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#10B981]/10 border border-[#10B981]/20 rounded-sm text-xs font-mono text-[#10B981] tracking-wider uppercase mb-6">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#10B981]" />
                </span>
                System Online
              </span>

              <h1 className="font-mono font-bold text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-[#F3F4F6] mb-6">
                Cell'EX Unlimited<br />
                <span className="text-[#10B981]">Digital</span><br />
                & Technical Services.
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button size="lg" asChild>
                <Link href="#services">
                  View Services
                </Link>
              </Button>
              <Button variant="secondary" size="lg" asChild>
                <Link
                  href="https://wa.me/6281234567890?text=Halo%20Cell%27EX%2C%20saya%20ingin%20konsultasi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Chat
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* ===== BOX 2: Abstract CSS Visual (Code Pattern) ===== */}
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.3 }}
            className="md:col-span-4 relative bg-[#171717]/40 border border-[rgba(243,244,246,0.06)] rounded-sm p-6 min-h-[200px] overflow-hidden group hover:border-[rgba(16,185,129,0.1)] transition-colors duration-500"
          >
            <div className="absolute top-3 left-3 font-mono text-[10px] text-[#F3F4F6]/30 uppercase tracking-widest">
              // Pattern Matrix
            </div>
            {/* CSS Abstract Grid Animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-6 gap-2 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                {[...Array(36)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-[#10B981] rounded-[1px] animate-pulse"
                    style={{
                      animationDelay: `${i * 0.1}s`,
                      animationDuration: '3s',
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* ===== BOX 3: Polka Dot Pattern ===== */}
          <motion.div
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.5 }}
            className="md:col-span-4 relative bg-[#171717]/40 border border-[rgba(243,244,246,0.06)] rounded-sm overflow-hidden min-h-[200px] group hover:border-[rgba(16,185,129,0.1)] transition-colors duration-500"
          >
            <div className="absolute top-3 left-3 font-mono text-[10px] text-[#F3F4F6]/30 uppercase tracking-widest z-10">
              // Dot Matrix
            </div>
            {/* Polka Dot Pattern with Low Transparency */}
            <div
              className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity duration-700"
              style={{
                backgroundImage: 'radial-gradient(circle, #10B981 1px, transparent 1px)',
                backgroundSize: '20px 20px',
              }}
            />
            {/* Scanning Line Animation */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#10B981]/5 to-transparent h-[20%] w-full animate-[scan_4s_linear_infinite]" />
          </motion.div>

          {/* ===== BOX 4: Stats / Trust Indicators ===== */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.7 }}
            className="md:col-span-8 relative bg-[#171717]/40 border border-[rgba(243,244,246,0.06)] rounded-sm p-6 md:p-8 flex items-center justify-between min-h-[180px] group hover:border-[rgba(16,185,129,0.15)] transition-colors duration-500"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span className="font-mono text-sm text-[#F3F4F6]/60">Response Time</span>
              </div>
              <div className="font-mono text-3xl md:text-4xl font-bold text-[#10B981]">
                {'<'} 5 menit
              </div>
            </div>

            <div className="space-y-3 text-right">
              <div className="flex items-center gap-3 justify-end">
                <span className="font-mono text-sm text-[#F3F4F6]/60">Garansi</span>
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              </div>
              <div className="font-mono text-3xl md:text-4xl font-bold text-[#10B981]">
                100%
              </div>
            </div>

            <div className="hidden md:block absolute right-20 top-1/2 -translate-y-1/2 w-px h-16 bg-[#10B981]/20" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}