import { create } from 'zustand'

interface globalState {
    menu: boolean;
    setMenu: () => void;
    loader: boolean;
    setLoader: () => void
}

export const useGlobal = create<globalState>((set) => ({
  menu: false,
  setMenu: () => set((state) => ({ menu: !state.menu })),
  loader: false,
  setLoader: () => set((state) => ({ loader: !state.loader })),
}))