'use client'

import { motion } from 'framer-motion'
import { services } from '@/data/services'
import { ServiceRow } from '@/components/ServiceRow'
import { Button } from '@/components/Button'
import Link from 'next/link'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
}

export function ServicesSection() {
  const digitalServices = services.filter(s => s.category === 'Digital')
  const technicalServices = services.filter(s => s.category === 'Teknis')

  return (
    <section id="services" className="py-20 md:py-32 bg-[#0A0A0A]">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#171717] border border-[#10B981]/20 rounded-sm text-xs font-mono text-[#10B981] tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            Direktori Layanan
          </span>

          <h2 className="font-mono font-bold text-3xl md:text-4xl lg:text-5xl leading-tight text-[#F3F4F6] mb-4">
            Daftar <span className="text-[#10B981]">Layanan</span> & Harga
          </h2>

          <p className="font-sans font-light text-lg text-[rgba(243,244,246,0.5)] max-w-2xl">
            Pilih layanan yang dibutuhkan. Klik baris untuk detail lebih lanjut via WhatsApp.
          </p>
        </motion.div>

        {/* Digital Services List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-sm bg-[#10B981]/10 border border-[#10B981]/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-[#10B981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="font-mono font-bold text-lg text-[#F3F4F6]">Layanan Digital</h3>
            <span className="font-mono text-xs text-[rgba(243,244,246,0.3)] ml-2">
              /{String(digitalServices.length).padStart(2, '0')}
            </span>
          </div>

          <div className="border border-[rgba(243,244,246,0.06)] rounded-sm overflow-hidden bg-[#0A0A0A]">
            {/* Table Header */}
            <div className="hidden md:flex items-center px-6 py-3 border-b border-[rgba(243,244,246,0.06)] bg-[#171717]/30">
              <span className="font-mono text-[10px] text-[rgba(243,244,246,0.3)] uppercase tracking-widest w-12">No.</span>
              <span className="font-mono text-[10px] text-[rgba(243,244,246,0.3)] uppercase tracking-widest flex-1">Nama Layanan</span>
              <span className="font-mono text-[10px] text-[rgba(243,244,246,0.3)] uppercase tracking-widest text-right w-32">Harga</span>
            </div>

            {/* Rows */}
            <div>
              {digitalServices.map((service, index) => (
                <ServiceRow key={service.id} service={service} index={index} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Technical Services List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-sm bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-mono font-bold text-lg text-[#F3F4F6]">Layanan Teknis</h3>
            <span className="font-mono text-xs text-[rgba(243,244,246,0.3)] ml-2">
              /{String(technicalServices.length).padStart(2, '0')}
            </span>
          </div>

          <div className="border border-[rgba(243,244,246,0.06)] rounded-sm overflow-hidden bg-[#0A0A0A]">
            {/* Table Header */}
            <div className="hidden md:flex items-center px-6 py-3 border-b border-[rgba(243,244,246,0.06)] bg-[#171717]/30">
              <span className="font-mono text-[10px] text-[rgba(243,244,246,0.3)] uppercase tracking-widest w-12">No.</span>
              <span className="font-mono text-[10px] text-[rgba(243,244,246,0.3)] uppercase tracking-widest flex-1">Nama Layanan</span>
              <span className="font-mono text-[10px] text-[rgba(243,244,246,0.3)] uppercase tracking-widest text-right w-32">Harga</span>
            </div>

            {/* Rows */}
            <div>
              {technicalServices.map((service, index) => (
                <ServiceRow key={service.id} service={service} index={digitalServices.length + index} />
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center"
        >
          <Button variant="secondary" size="lg" asChild>
            <Link
              href="https://wa.me/6281234567890?text=Halo%20Cell%27EX%2C%20saya%20butuh%20layanan%20custom"
              target="_blank"
              rel="noopener noreferrer"
            >
              Butuh Layanan Custom?
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}