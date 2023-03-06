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

/********* Slices *********/
const createMenuSlice: StateCreator<MenuSlice> = (set) => ({
  menu: false,
  setMenu: () => set((state) => ({ menu: !state.menu })),
});

const createLoaderSlice: StateCreator<LoaderSlice> = (set) => ({
  loader: true,
  setLoader: () => set((state) => ({ loader: !state.loader })),
});

/******** Global store ********/
export const useGlobal = create<MenuSlice & LoaderSlice>()((...a) => ({
  ...createMenuSlice(...a),
  ...createLoaderSlice(...a),
}))