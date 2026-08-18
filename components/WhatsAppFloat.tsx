'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import { generateWhatsAppLink } from '@/lib/utils'

export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  const handleClick = () => {
    window.open(generateWhatsAppLink('Halo Cell\'EX, saya ingin konsultasi layanan'), '_blank')
  }

  return (
    <motion.a
      href={generateWhatsAppLink('Halo Cell\'EX, saya ingin konsultasi layanan')}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0.8, 
        y: isVisible ? 0 : 20 
      }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      style={{ opacity: y }}
      className="fixed bottom-6 right-6 z-50"
      onClick={handleClick}
      aria-label="Chat WhatsApp Cell'EX"
    >
      <motion.div
        animate={{ 
          boxShadow: [
            '0 0 0 0 rgba(16, 185, 129, 0.4)',
            '0 0 0 15px rgba(16, 185, 129, 0)',
          ]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        className="w-14 h-14 md:w-16 md:h-16 rounded-sm bg-cell-emerald flex items-center justify-center shadow-emerald-hover hover:shadow-emerald-hover hover:scale-105 transition-all duration-200"
      >
        <svg className="w-7 h-7 md:w-8 md:h-8 text-cell-bg" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378 9.86 9.86 0 01-.478-.322 10.5 10.5 0 01-.442-.504 10.74 10.74 0 011.645-2.572c.407-.227.824-.398 1.283-.534.38-.114.767-.216 1.193-.283.425-.067.92-.094 1.393-.094.332 0 .679.017.99.06.39.06.823.17 1.156.36.346.19.776.436 1.05.816.283.38.41.885.306 1.172-.088.245-.308.554-.792.965-.88.748-2.276 2.43-2.573 2.719-.298.29-1.04.785-1.32 1.016-.198.166-.435.298-.744.352-.273.05-.577.033-.817-.067" />
        </svg>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 10 }}
        className="absolute right-full top-1/2 -translate-y-1/2 mr-3 whitespace-nowrap bg-cell-bg border border-[rgba(243,244,246,0.1)] px-3 py-1.5 rounded-sm text-sm font-mono text-cell-text shadow-lg opacity-0 pointer-events-none group-hover:opacity-100"
        style={{ opacity: y }}
      >
        Chat WhatsApp
      </motion.div>
    </motion.a>
  )
}