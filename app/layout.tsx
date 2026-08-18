import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cell\'EX | Digital & Technical Services',
  description: 'Direktori layanan teknis dan digital. Pesan langsung via WhatsApp.',
  keywords: ['digital services', 'technical services', 'web development', 'whatsapp order'],
  authors: [{ name: 'Cell\'EX' }],
  openGraph: {
    title: 'Cell\'EX | Digital & Technical Services',
    description: 'Direktori layanan teknis dan digital. Pesan langsung via WhatsApp.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Cell\'EX',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-cell-bg text-cell-text antialiased min-h-screen">
        {children}
      </body>
    </html>
  )
}