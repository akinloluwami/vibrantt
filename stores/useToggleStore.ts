import create from "zustand";

interface State {
  toggleValue: boolean;
  toggle: () => void;
}

const useToggleStore = create<State>((set, get) => ({
  toggleValue: true,
  toggle: () => set((state) => ({ toggleValue: !state.toggleValue })),
}));

export default useToggleStore;
