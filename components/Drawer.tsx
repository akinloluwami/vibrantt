import Button from "@/component-elements/Button";
import useDrawerStore, { DrawerContext } from "@/stores/useDrawerStore";
import { X } from "lucide-react";
import { useState } from "react";
import Toggle from "./Toggle";

const Drawer = () => {
  const { isOpen, close } = useDrawerStore();

  const colorSpaces = ["HEX", "RGB", "HSL"];
  return (
    <div
      className={`w-72 h-full shadow-2xl absolute bg-[#3e4452] right-0 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } z-[10000000] px-2 transition-all`}
    >
      <div className="flex items-center justify-between h-[10%]">
        <h1 className="font-semibold text-xl">Setting</h1>
        <Button onClick={close}>
          <X />
        </Button>
      </div>
      <div className="w-full mt-5">
        <div className="flex items-center gap-2 w-full mb-7">
          <p className="font-semibold">Color space</p>
          <select name="" id="" className="flex-1 py-0 bg-[#2a303c]">
            {colorSpaces.map((colorSpace, i) => (
              <option value={colorSpace} key={i}>
                {colorSpace}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2 w-full">
          <p className="font-semibold">Color names</p>
          <Toggle />
        </div>
      </div>
    </div>
  );
};

export default Drawer;
