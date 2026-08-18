'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import type { Lang } from '@/lib/i18n'
import { tFn } from '@/lib/i18n'

interface LanguageContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: ReturnType<typeof tFn>
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('id')

  // Persist language preference
  useEffect(() => {
    const saved = localStorage.getItem('cellex-lang') as Lang | null
    if (saved && (saved === 'id' || saved === 'en')) {
      setLangState(saved)
    }
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem('cellex-lang', l)
  }

  const t = tFn(lang)

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
