import { create } from "zustand";

interface ColorSpace {
  colorSpace: "hex" | "rgb" | "hsl";
}

const useColorSpaceStore = create<ColorSpace>((set) => ({
  colorSpace: "hex",
  setColorSpace: (colorSpace: "hex" | "rgb" | "hsl") => set({ colorSpace }),
}));

export default useColorSpaceStore;
