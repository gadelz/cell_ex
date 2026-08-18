'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/Button'

const navLinks = [
  { href: '#services', label: 'Layanan' },
  { href: '#about', label: 'Tentang' },
  { href: '#contact', label: 'Kontak' },
]

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cell-bg/80 backdrop-blur-sm border-b border-[rgba(243,244,246,0.06)]">
      <nav className="section-container" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-mono font-bold text-xl text-cell-text hover:text-cell-emerald transition-colors" aria-label="Cell'EX Home">
            Cell'EX
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-sm font-light text-[rgba(243,244,246,0.7)] hover:text-cell-emerald transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link href="#contact">Mulai Project</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  )
}