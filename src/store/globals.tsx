import { create, StateCreator } from 'zustand';

/********* Interfaces *********/
interface MenuSlice {
  menu: boolean;
  setMenu: () => void;
}

interface LoaderSlice {
  loader: boolean;
  setLoader: () => void;
}

interface LanguageSlice {
  language: 'en' | 'fr';
  setLanguage: (newLang: 'en' | 'fr') => void;
}

interface MouseSlice {
  mouseEvent: 'hover' | 'default';
  setMouse: (newMouseEvent: 'hover' | 'default') => void;
}

/********* Slices *********/
const createMenuSlice: StateCreator<MenuSlice> = (set) => ({
  menu: false,
  setMenu: () => set((state) => ({ menu: !state.menu })),
});

const createLoaderSlice: StateCreator<LoaderSlice> = (set) => ({
  loader: true,
  setLoader: () => set((state) => ({ loader: !state.loader })),
});

const createLanguageSlice: StateCreator<LanguageSlice> = (set) => ({
  language: 'en',
  setLanguage: (newLang) => set(({ language: newLang }))
});

const createMouseSlice: StateCreator<MouseSlice> = (set) => ({
  mouseEvent: 'default',
  setMouse: (newMouseEvent) => set(({ mouseEvent: newMouseEvent }))
});

/******** Global store ********/
export const useGlobal = create<MenuSlice & LoaderSlice & LanguageSlice & MouseSlice>()((...a) => ({
  ...createMenuSlice(...a),
  ...createLoaderSlice(...a),
  ...createLanguageSlice(...a),
  ...createMouseSlice(...a),
}))