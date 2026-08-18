'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { ServicesSection } from '@/components/ServicesSection'
import { HeroSection } from '@/components/HeroSection'
import { AboutSection } from '@/components/AboutSection'
import { ContactSection } from '@/components/ContactSection'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cell-bg">
      <Navbar />
      <main id="main-content" className="pt-16">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}