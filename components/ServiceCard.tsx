'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardCategory, CardContent, CardFooter, CardPrice } from '@/components/Card'
import { Button } from '@/components/Button'
import { generateWhatsAppLink } from '@/lib/utils'
import type { Service } from '@/lib/types'

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const whatsappLink = generateWhatsAppLink(service.whatsappMessage)

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Card category={service.category} hoverable>
        <CardHeader>
          <CardCategory category={service.category}>{service.category}</CardCategory>
          <CardTitle className="mt-2">{service.name}</CardTitle>
        </CardHeader>
        
        <CardContent>
          <p className="line-clamp-3">{service.description}</p>
        </CardContent>

        <CardFooter className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <CardPrice>{service.price}</CardPrice>
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Button variant="ghost" size="sm" asChild className="flex-1 sm:flex-none">
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Pesan
              </Link>
            </Button>
            <Button size="sm" asChild className="flex-1 sm:flex-none">
              <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Detail
              </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}