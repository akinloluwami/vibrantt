import { create } from "zustand";

interface showColorNamesState {
  isOpen: boolean;
  open: any;
  close: any;
}

const useShowColorNamesStore = create<showColorNamesState>((set, get) => ({
  isOpen: false,
  open: () => set((state) => ({ ...state, isOpen: true })),
  close: () => set((state) => ({ ...state, isOpen: false })),
}));

export default useShowColorNamesStore;
