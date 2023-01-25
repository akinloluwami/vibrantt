import create from "zustand";

interface State {
  toggleValue: boolean;
}

const useToggleStore = create<State>((set, get) => ({
  toggleValue: false,
  toggle: () => set((state) => ({ toggleValue: !state.toggleValue })),
}));

export default useToggleStore;
