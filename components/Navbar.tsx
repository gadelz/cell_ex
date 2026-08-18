'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/Button'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[rgba(243,244,246,0.06)]">
      <nav className="section-container" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          {/* Logo - Monospace Bold */}
          <Link
            href="/"
            className="font-mono font-bold text-xl text-[#F3F4F6] hover:text-[#10B981] transition-colors tracking-tight"
            aria-label="Cell'EX Home"
          >
            Cell_EX
          </Link>

          {/* Right Side: Menu Toggle + Contact Button */}
          <div className="flex items-center gap-3">
            {/* Small Contact Button */}
            <Button size="sm" asChild>
              <Link
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs"
              >
                Contact Us
              </Link>
            </Button>

            {/* Double-line Menu Toggle (not hamburger) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative w-8 h-8 flex flex-col justify-center items-end gap-1.5 p-1 hover:bg-white/5 rounded-sm transition-colors"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span
                className={`block w-5 h-[2px] bg-[#F3F4F6] transition-all duration-300 ${
                  menuOpen ? 'rotate-45 translate-y-[5px]' : ''
                }`}
              />
              <span
                className={`block w-4 h-[2px] bg-[#F3F4F6] transition-all duration-300 ${
                  menuOpen ? '-rotate-45 -translate-y-[3px]' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile/Overlay Menu */}
        {menuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-[#0A0A0A] border-b border-[rgba(243,244,246,0.06)] p-6 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-4">
              <Link
                href="#services"
                className="font-mono text-sm text-[#F3F4F6]/70 hover:text-[#10B981] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                /01 — Layanan
              </Link>
              <Link
                href="#about"
                className="font-mono text-sm text-[#F3F4F6]/70 hover:text-[#10B981] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                /02 — Tentang
              </Link>
              <Link
                href="#contact"
                className="font-mono text-sm text-[#F3F4F6]/70 hover:text-[#10B981] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                /03 — Kontak
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}