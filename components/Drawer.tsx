import Button from "@/component-elements/Button";
import { X } from "lucide-react";
import { useState } from "react";

const Drawer = ({ isOpen }: any) => {
  const [open, setOpen] = useState(isOpen);

  return (
    <div
      className={`w-72 h-full shadow-2xl absolute bg-[#3e4452] right-0 ${
        open ? "translate-x-0" : "translate-x-full"
      } z-[10000000] px-2`}
    >
      <div className="flex items-center py-1 justify-between">
        <h1 className="font-semibold text-2xl">Setting</h1>
        <Button
          onClick={() => {
            console.log("x");
            setOpen(!isOpen);
          }}
        >
          <X />
        </Button>
      </div>
    </div>
  );
};

export default Drawer;
