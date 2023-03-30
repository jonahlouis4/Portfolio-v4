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

interface ProjectSlice {
  projectOpen: boolean;
  setProjectOpen: (state: boolean) => void;
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

const createProjectSlice: StateCreator<ProjectSlice> = (set) => ({
  projectOpen: false,
  setProjectOpen: (newVal: boolean) => set((state) => ({ projectOpen: newVal })),
});

/******** Global store ********/
export const useGlobal = create<MenuSlice & LoaderSlice & ProjectSlice>()((...a) => ({
  ...createMenuSlice(...a),
  ...createLoaderSlice(...a),
  ...createProjectSlice(...a),
}))