import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface modeState {
  mode: 'light' | 'dark';
  setMode: (newMode: 'light' | 'dark') => void
}

// Stores in localstorage
export const useGlobalsPersist = create<modeState>()(
  devtools(
    persist(
      (set) => ({
        mode: 'dark',
        setMode: (newMode) => set(({ mode: newMode })),
      }),
      {
        name: 'global-storage',
      }
    )
  )
)