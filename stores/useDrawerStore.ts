import { create } from "zustand";

interface DrawerState {
  isOpen: boolean;
  open: any;
  close: any;
}

const useDrawerStore = create<DrawerState>((set, get) => ({
  isOpen: false,
  open: () => set((state) => ({ ...state, isOpen: true })),
  close: () => set((state) => ({ ...state, isOpen: false })),
}));

export default useDrawerStore;
