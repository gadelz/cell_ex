'use client'

import { motion } from 'framer-motion'
import { services } from '@/data/services'
import { ServiceCard } from '@/components/ServiceCard'
import { Button } from '@/components/Button'
import Link from 'next/link'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } }
}

export function ServicesSection() {
  const digitalServices = services.filter(s => s.category === 'Digital')
  const technicalServices = services.filter(s => s.category === 'Teknis')

  return (
    <section id="services" className="py-20 md:py-32 bg-cell-bg">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-cell-surface border border-cell-emerald/20 rounded-sm text-xs font-mono text-cell-emerald tracking-wider uppercase mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cell-emerald" />
            Layanan Kami
          </motion.span>
          
          <motion.h2 variants={itemVariants} className="font-mono font-bold text-3xl md:text-4xl lg:text-5xl leading-tight text-cell-text mb-4">
            Solusi <span className="text-cell-emerald">Digital</span> & <span className="text-cell-emerald">Teknis</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="font-sans font-light text-lg text-[rgba(243,244,246,0.6)] max-w-2xl mx-auto">
            Dari kode hingga hardware — kami handle semuanya. Pilih kategori di bawah untuk melihat detail & harga.
          </motion.p>
        </motion.div>

        <div className="space-y-20">
          {/* Digital Services */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-sm bg-cell-emerald/10 border border-cell-emerald/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-cell-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="font-mono font-bold text-xl text-cell-text">Layanan Digital</h3>
                <p className="font-sans font-light text-sm text-[rgba(243,244,246,0.5)]">Website, API, Mobile App, UI/UX, SEO</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {digitalServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </motion.div>

          {/* Technical Services */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-sm bg-amber-400/10 border border-amber-400/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-mono font-bold text-xl text-cell-text">Layanan Teknis</h3>
                <p className="font-sans font-light text-sm text-[rgba(243,244,246,0.5)]">Service Laptop/HP, Jaringan, Server</p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technicalServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button variant="secondary" size="lg" asChild>
            <Link href="https://wa.me/6281234567890?text=Halo%20Cell%27EX%2C%20saya%20butuh%20layanan%20custom" target="_blank" rel="noopener noreferrer">
              Butuh Layanan Custom?
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}