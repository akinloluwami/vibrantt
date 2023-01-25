import Button from "@/component-elements/Button";
import { X } from "lucide-react";

const Drawer = () => {
  return (
    <div className="w-72 h-full shadow-2xl absolute bg-[#3e4452] right-0 z-[10000000] px-2">
      <div className="flex items-center py-1 justify-between">
        <h1 className="font-semibold text-2xl">Setting</h1>
        <Button>
          <X />
        </Button>
      </div>
    </div>
  );
};

export default Drawer;
