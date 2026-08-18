'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '50+', label: 'Project Selesai' },
  { value: '30+', label: 'Klien Puas' },
  { value: '< 5 min', label: 'Respon Rata-rata' },
  { value: '24/7', label: 'Support WhatsApp' },
]

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Proses Cepat',
    desc: 'Dari konsultasi hingga selesai — alur kerja streamlined tanpa birokrasi bertele-tele.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Harga Transparan',
    desc: 'Tidak ada biaya tersembunyi. Harga yang tertera = harga yang Anda bayar. Estimasi di awal.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Garansi Kerja',
    desc: 'Semua layanan teknis bergaransi 3 bulan. Digital support 30 hari pasca-delivery.'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Konsultasi Gratis',
    desc: 'Diskusi kebutuhan tanpa komitmen. Kami jelaskan opsi terbaik, bukan yang termahal.'
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-cell-surface/50 border-y border-[rgba(243,244,246,0.06)]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-cell-emerald/10 border border-cell-emerald/20 rounded-sm text-xs font-mono text-cell-emerald tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cell-emerald" />
            Tentang Cell'EX
          </span>
          <h2 className="font-mono font-bold text-3xl md:text-4xl lg:text-5xl leading-tight text-cell-text mb-4">
            Mengapa <span className="text-cell-emerald">Cell'EX</span>?
          </h2>
          <p className="font-sans font-light text-lg text-[rgba(243,244,246,0.6)] max-w-2xl mx-auto">
            Kami percaya layanan teknis & digital harus mudah diakses, transparan, dan berkualitas — tanpa bikin pusing.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-cell-bg border border-[rgba(243,244,246,0.06)] rounded-sm hover:border-cell-emerald/50 transition-colors"
            >
              <div className="font-mono font-bold text-3xl md:text-4xl text-cell-emerald mb-1">{stat.value}</div>
              <div className="font-sans font-light text-sm text-[rgba(243,244,246,0.6)]">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h3 className="font-mono font-bold text-2xl md:text-3xl text-cell-text text-center mb-12">
            Cara Kami <span className="text-cell-emerald">Bekerja</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-6 bg-cell-bg border border-[rgba(243,244,246,0.06)] rounded-sm hover:border-cell-emerald/50 hover:shadow-emerald transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-sm bg-cell-emerald/10 border border-cell-emerald/20 flex items-center justify-center text-cell-emerald mb-4 group-hover:bg-cell-emerald group-hover:text-cell-bg transition-colors">
                  {feature.icon}
                </div>
                <h4 className="font-mono font-bold text-lg text-cell-text mb-2">{feature.title}</h4>
                <p className="font-sans font-light text-sm text-[rgba(243,244,246,0.6)] leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}