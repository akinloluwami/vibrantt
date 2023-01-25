import Button from "@/component-elements/Button";
import useDrawerStore, { DrawerContext } from "@/stores/useDrawerStore";
import { X } from "lucide-react";
import { useState } from "react";

const Drawer = () => {
  const { isOpen, close } = useDrawerStore();
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
    </div>
  );
};

export default Drawer;
