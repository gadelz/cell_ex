import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateWhatsAppLink(message: string, phoneNumber: string = '6283863017186'): string {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
}

export function generateServiceOrderMessage(serviceName: string): string {
  return `System Log: Permintaan layanan baru untuk Cell'EX.
Layanan: ${serviceName}
Mohon informasi lebih lanjut terkait instalasi dan estimasi pengerjaan.`
}

export function formatPrice(price: string): string {
  return price
}

export function getCategoryColor(category: string): string {
  switch (category) {
    case 'Digital':
      return 'text-cell-emerald'
    case 'Teknis':
      return 'text-amber-400'
    default:
      return 'text-cell-text'
  }
}

export function getCategoryBg(category: string): string {
  switch (category) {
    case 'Digital':
      return 'bg-cell-emerald/10 border-cell-emerald/20'
    case 'Teknis':
      return 'bg-amber-400/10 border-amber-400/20'
    default:
      return 'bg-cell-surface border-[rgba(243,244,246,0.06)]'
  }
}