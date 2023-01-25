import { create } from "zustand";

interface ColorSpace {
  colorSpace: "HEX" | "RGB" | "HSL";
  setColorSpace: (colorSpace: "HEX" | "RGB" | "HSL") => void;
}

const useColorSpaceStore = create<ColorSpace>((set) => ({
  colorSpace: "HEX",
  setColorSpace: (colorSpace: "HEX" | "RGB" | "HSL") => set({ colorSpace }),
}));

export default useColorSpaceStore;
