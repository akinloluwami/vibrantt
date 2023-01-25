import Button from "@/component-elements/Button";
import useColorSpaceStore from "@/stores/useColorSpaceStore";
import useDrawerStore, { DrawerContext } from "@/stores/useDrawerStore";
import useLuminosityStore from "@/stores/useLuminosityStore";
import useToggleStore from "@/stores/useToggleStore";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import Toggle from "./Toggle";

const Drawer = () => {
  const { isOpen, close } = useDrawerStore();

  const colorSpaces = ["HEX", "RGB", "HSL"];
  const luminosities = ["Default", "Light", "Dark", "Random"];
  const [selectedColorSpace, setSelectedColorSpace] = useState<string>("HEX");
  const [selectedLuminosity, setSelectedLuminosity] =
    useState<string>("Default");

  const { setColorSpace } = useColorSpaceStore();
  const { setLuminosity } = useLuminosityStore();

  useEffect(() => {
    switch (selectedColorSpace) {
      case "HEX":
        setColorSpace("HEX");
        break;
      case "RGB":
        setColorSpace("RGB");
        break;
      case "HSL":
        setColorSpace("HSL");
        break;
    }
  }, [selectedColorSpace]);

  useEffect(() => {
    switch (selectedLuminosity) {
      case "Default":
        setLuminosity("Default");
        break;
      case "Light":
        setLuminosity("Light");
        break;
      case "Dark":
        setLuminosity("Dark");
        break;
      case "Random":
        setLuminosity("Random");
        break;
    }
  }, [selectedLuminosity]);

  const { toggleValue, toggle } = useToggleStore();
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
          <select
            name=""
            id=""
            className="flex-1 py-0 bg-[#2a303c]"
            value={selectedColorSpace}
            onChange={(e) => setSelectedColorSpace(e.target.value)}
          >
            {colorSpaces.map((colorSpace, i) => (
              <option value={colorSpace} key={i}>
                {colorSpace}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2 w-full mb-7">
          <p className="font-semibold">Color names</p>
          <Toggle isOn={toggleValue} onClick={toggle} />
        </div>
        <div className="flex items-center gap-2 w-full mb-7">
          <p className="font-semibold">Luminosity</p>
          <select
            name=""
            id=""
            className="flex-1 py-0 bg-[#2a303c]"
            onChange={(e) => setSelectedLuminosity(e.target.value)}
          >
            {luminosities.map((luminosity, i) => (
              <option value={luminosity} key={i}>
                {luminosity}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
