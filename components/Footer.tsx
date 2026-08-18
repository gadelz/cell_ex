import Link from 'next/link'

const footerLinks = {
  layanan: [
    { label: 'Pengembangan Website', href: '#services' },
    { label: 'REST API / Backend', href: '#services' },
    { label: 'Aplikasi Mobile', href: '#services' },
    { label: 'UI/UX Design', href: '#services' },
    { label: 'SEO Audit', href: '#services' },
  ],
  teknis: [
    { label: 'Service Laptop / PC', href: '#services' },
    { label: 'Service HP / Smartphone', href: '#services' },
    { label: 'Setup Jaringan & Server', href: '#services' },
  ],
  company: [
    { label: 'Tentang Kami', href: '#about' },
    { label: 'Cara Kerja', href: '#about' },
    { label: 'Kontak', href: '#contact' },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-cell-surface border-t border-[rgba(243,244,246,0.06)]">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="font-mono font-bold text-xl text-cell-text hover:text-cell-emerald transition-colors mb-4 block">
              Cell'EX
            </Link>
            <p className="font-sans font-light text-sm text-[rgba(243,244,246,0.6)] leading-relaxed mb-4">
              Direktori layanan teknis & digital. Pesan langsung via WhatsApp — cepat, transparan, bergaransi.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-cell-bg border border-[rgba(243,244,246,0.1)] flex items-center justify-center text-cell-emerald hover:bg-cell-emerald hover:text-cell-bg transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378 9.86 9.86 0 01-.478-.322 10.5 10.5 0 01-.442-.504 10.74 10.74 0 011.645-2.572c.407-.227.824-.398 1.283-.534.38-.114.767-.216 1.193-.283.425-.067.92-.094 1.393-.094.332 0 .679.017.99.06.39.06.823.17 1.156.36.346.19.776.436 1.05.816.283.38.41.885.306 1.172-.088.245-.308.554-.792.965-.88.748-2.276 2.43-2.573 2.719-.298.29-1.04.785-1.32 1.016-.198.166-.435.298-.744.352-.273.05-.577.033-.817-.067" />
                </svg>
              </a>
              <a
                href="mailto:hello@cellex.dev"
                className="w-10 h-10 rounded-sm bg-cell-bg border border-[rgba(243,244,246,0.1)] flex items-center justify-center text-[rgba(243,244,246,0.7)] hover:border-cell-emerald/50 hover:text-cell-emerald transition-colors"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          <nav aria-label="Layanan Digital">
            <h4 className="font-mono font-bold text-sm text-cell-text mb-4 tracking-wider uppercase">Digital</h4>
            <ul className="space-y-3">
              {footerLinks.layanan.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans font-light text-sm text-[rgba(243,244,246,0.6)] hover:text-cell-emerald transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Layanan Teknis">
            <h4 className="font-mono font-bold text-sm text-cell-text mb-4 tracking-wider uppercase">Teknis</h4>
            <ul className="space-y-3">
              {footerLinks.teknis.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans font-light text-sm text-[rgba(243,244,246,0.6)] hover:text-cell-emerald transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Perusahaan">
            <h4 className="font-mono font-bold text-sm text-cell-text mb-4 tracking-wider uppercase">Perusahaan</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans font-light text-sm text-[rgba(243,244,246,0.6)] hover:text-cell-emerald transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="pt-8 border-t border-[rgba(243,244,246,0.06)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-sans font-light text-sm text-[rgba(243,244,246,0.4)]">
              © {currentYear} Cell'EX. Hak cipta dilindungi.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="font-sans font-light text-xs text-[rgba(243,244,246,0.4)] hover:text-cell-emerald transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="font-sans font-light text-xs text-[rgba(243,244,246,0.4)] hover:text-cell-emerald transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}