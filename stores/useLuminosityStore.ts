import { create } from "zustand";

interface Luminosity {
  luminosity: "Default" | "Light" | "Dark" | "Random";
  setLuminosity: (luminosity: "Default" | "Light" | "Dark" | "Random") => void;
}

const useLuminosityStore = create<Luminosity>((set) => ({
  luminosity: "Default",
  setLuminosity: (luminosity: "Default" | "Light" | "Dark" | "Random") =>
    set({ luminosity }),
}));

export default useLuminosityStore;
