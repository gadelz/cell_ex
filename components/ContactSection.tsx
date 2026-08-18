'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/Button'
import Link from 'next/link'
import { generateWhatsAppLink } from '@/lib/utils'

const contactMethods = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Email',
    value: 'hello@cellex.dev',
    href: 'mailto:hello@cellex.dev',
    desc: 'Untuk proposal formal & dokumen'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378 9.86 9.86 0 01-.478-.322 10.5 10.5 0 01-.442-.504 10.74 10.74 0 011.645-2.572c.407-.227.824-.398 1.283-.534.38-.114.767-.216 1.193-.283.425-.067.92-.094 1.393-.094.332 0 .679.017.99.06.39.06.823.17 1.156.36.346.19.776.436 1.05.816.283.38.41.885.306 1.172-.088.245-.308.554-.792.965-.88.748-2.276 2.43-2.573 2.719-.298.29-1.04.785-1.32 1.016-.198.166-.435.298-.744.352-.273.05-.577.033-.817-.067" />
      </svg>
    ),
    title: 'WhatsApp',
    value: '+62 812-3456-7890',
    href: generateWhatsAppLink("Halo Cell'EX, saya ingin konsultasi layanan"),
    desc: 'Respon cepat &lt; 5 menit (jam kerja)',
    isPrimary: true
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Lokasi',
    value: 'Jakarta, Indonesia',
    href: '#',
    desc: 'Remote-first, onboard area Jakarta'
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-cell-bg">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-cell-surface border border-cell-emerald/20 rounded-sm text-xs font-mono text-cell-emerald tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cell-emerald" />
            Mulai Project
          </span>
          <h2 className="font-mono font-bold text-3xl md:text-4xl lg:text-5xl leading-tight text-cell-text mb-4">
            Siap <span className="text-cell-emerald">Bekerja Sama</span>?
          </h2>
          <p className="font-sans font-light text-lg text-[rgba(243,244,246,0.6)] max-w-2xl mx-auto">
            Kirim detail project Anda lewat WhatsApp. Kami balas cepat, jelasin opsi, dan kasih estimasi harga &amp; timeline.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="space-y-6"
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group p-6 rounded-sm border transition-all duration-300 ${
                  method.isPrimary
                    ? 'bg-cell-emerald/5 border-cell-emerald/30 shadow-emerald'
                    : 'bg-cell-surface border-[rgba(243,244,246,0.06)] hover:border-cell-emerald/50'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0 transition-colors ${
                    method.isPrimary
                      ? 'bg-cell-bg text-cell-emerald group-hover:bg-cell-emerald group-hover:text-cell-bg'
                      : 'bg-cell-bg border border-[rgba(243,244,246,0.1)] text-cell-text group-hover:border-cell-emerald/50 group-hover:text-cell-emerald'
                  }`}>
                    {method.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-mono font-bold text-lg text-cell-text mb-1">{method.title}</h3>
                    <a
                      href={method.href}
                      target={method.href.startsWith('http') || method.href.startsWith('mailto') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="font-sans font-medium text-cell-emerald hover:underline break-all mb-2 inline-block"
                    >
                      {method.value}
                    </a>
                    <p className="font-sans font-light text-sm text-[rgba(243,244,246,0.6)]">{method.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="bg-cell-surface border border-[rgba(243,244,246,0.06)] rounded-sm p-8 md:p-10 sticky top-24">
              <h3 className="font-mono font-bold text-2xl text-cell-text mb-6 text-center">
                Kirim Brief Singkat
              </h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label htmlFor="project-type" className="block font-sans font-light text-sm text-[rgba(243,244,246,0.7)] mb-2">
                    Jenis Project
                  </label>
                  <select
                    id="project-type"
                    className="input-field"
                    defaultValue="digital"
                  >
                    <option value="digital">Layanan Digital (Web, API, App, UI/UX, SEO)</option>
                    <option value="teknis">Layanan Teknis (Service Laptop/HP, Jaringan, Server)</option>
                    <option value="custom">Custom / Kombinasi</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="budget" className="block font-sans font-light text-sm text-[rgba(243,244,246,0.7)] mb-2">
                    Budget Perkiraan
                  </label>
                  <select
                    id="budget"
                    className="input-field"
                    defaultValue="belum-tentu"
                  >
                    <option value="belum-tentu">Belum tentu &mdash; butuh konsultasi dulu</option>
                    <option value="lt-1jt">&lt; Rp 1.000.000</option>
                    <option value="1-5jt">Rp 1.000.000 - 5.000.000</option>
                    <option value="5-15jt">Rp 5.000.000 - 15.000.000</option>
                    <option value="gt-15jt">&gt; Rp 15.000.000</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="timeline" className="block font-sans font-light text-sm text-[rgba(243,244,246,0.7)] mb-2">
                    Timeline Diinginkan
                  </label>
                  <select
                    id="timeline"
                    className="input-field"
                    defaultValue="fleksibel"
                  >
                    <option value="fleksibel">Fleksibel</option>
                    <option value="1minggu">&lt; 1 Minggu (Urgent)</option>
                    <option value="1bulan">1 - 4 Minggu</option>
                    <option value="1-3bulan">1 - 3 Bulan</option>
                    <option value="gt-3bulan">&gt; 3 Bulan</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="notes" className="block font-sans font-light text-sm text-[rgba(243,244,246,0.7)] mb-2">
                    Catatan Singkat (opsional)
                  </label>
                  <textarea
                    id="notes"
                    rows={4}
                    className="input-field resize-none"
                    placeholder="Jelaskan kebutuhan Anda singkat &mdash; fitur utama, target user, tech stack preference, dll."
                  />
                </div>
              </div>

              <Button 
                className="w-full" 
                size="lg"
                onClick={() => {
                  const type = (document.getElementById('project-type') as HTMLSelectElement).value
                  const budget = (document.getElementById('budget') as HTMLSelectElement).value
                  const timeline = (document.getElementById('timeline') as HTMLSelectElement).value
                  const notes = (document.getElementById('notes') as HTMLTextAreaElement).value
                  
                  const message = `Halo Cell'EX, saya ingin request project:
                  
Jenis: ${type}
Budget: ${budget}
Timeline: ${timeline}
Catatan: ${notes || '-'}

Mohon info lanjutnya. Terima kasih!`
                  
                  window.open(generateWhatsAppLink(message), '_blank')
                }}
              >
                Kirim ke WhatsApp
              </Button>
              
              <p className="text-center mt-4 font-sans font-light text-xs text-[rgba(243,244,246,0.4)]">
                Form ini hanya membuka WhatsApp dengan pesan terisi otomatis &mdash; tidak ada data yang disimpan di server kami.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}