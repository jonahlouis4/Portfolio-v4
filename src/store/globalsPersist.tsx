import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface modeState {
  mode: 'light' | 'dark';
  setMode: (newMode: 'light' | 'dark') => void
  language: 'en' | 'fr',
  setLanguage: (newLang: 'en' | 'fr') => void
}

// Stores in localstorage
export const useGlobalsPersist = create<modeState>()(
  devtools(
    persist(
      (set) => ({
        mode: 'dark',
        setMode: (newMode) => set(({ mode: newMode })),
        language: 'en',
        setLanguage: (newLang) => set(({ language: newLang }))
      }),
      {
        name: 'global-storage',
      }
    )
  )
)