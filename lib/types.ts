export interface Service {
  id: string
  name: string
  category: 'Digital' | 'Teknis'
  description: string
  price: string
  features: string[]
  whatsappMessage: string
}