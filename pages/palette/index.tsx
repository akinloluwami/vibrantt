import randomColor from "randomcolor";
import { useContext, useEffect, useState } from "react";
import { BiCopy } from "react-icons/bi";
import copy from "copy-to-clipboard";
import { getLuminosity } from "@/utils/getLuminosity";
import nearestColor from "nearest-color";
import colorNameList from "color-name-list";
import Loading from "../loading";
import produce from "immer";
import Header from "@/components/Header";
import useKeypress from "react-use-keypress";
import Drawer from "@/components/Drawer";
import useDrawerStore, { DrawerContext } from "@/stores/useDrawerStore";
import useColorSpaceStore from "@/stores/useColorSpaceStore";
import hexToRgb from "@/utils/hexToRgb";
import hexToHsl from "@/utils/hexToHsl";
import useToggleStore from "@/stores/useToggleStore";
import useLuminosityStore from "@/stores/useLuminosityStore";
import Button from "@/component-elements/Button";
import { ChevronLeft, ChevronRight, Plus, Settings2, X } from "lucide-react";
import { useRouter } from "next/router";

export default function Home() {
  const [palette, setPalette] = useState<string[]>([]);
  const [copyText, setCopyText] = useState<string>("Copy");
  const [prevPalettes, setPrevPalettes] = useState<string[][]>([[]]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [colorCount, setColorCount] = useState<number>(5);
  const { colorSpace } = useColorSpaceStore();
  const { toggleValue } = useToggleStore();
  const { luminosity } = useLuminosityStore();
  // const [showTools, setShowTools] = useState(Array(colorCount).fill(false));
  const [showToolsArray, setShowToolsArray] = useState(
    Array(colorCount).fill(false)
  );

  const colors = colorNameList.reduce(
    (o, { name, hex }) => Object.assign(o, { [name]: hex }),
    {}
  );

  const nearest = nearestColor.from(colors);
  const router = useRouter();

  const generate = () => {
    // console.log(router.query?.palette);
    const newPalette: string[] = randomColor({
      count: colorCount,
      luminosity:
        luminosity === "Default"
          ? "bright"
          : luminosity === "Dark"
          ? "dark"
          : luminosity === "Light"
          ? "light"
          : luminosity === "Random"
          ? "random"
          : "bright",
    });
    const newPaletteWithoutHash = newPalette.map((color) => color.substr(1));
    setPalette(newPalette);
    router.push(`/palette/${newPaletteWithoutHash.join("-")}`);
  };

  const undo = () => {
    if (currentIndex > 0 && currentIndex > 1) {
      setCurrentIndex(currentIndex - 1);
      setPalette(prevPalettes[currentIndex - 1]);
    }
  };

  const redo = () => {
    if (currentIndex < prevPalettes.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setPalette(prevPalettes[currentIndex + 1]);
    }
  };

  useEffect(() => {
    const urlPalette: string = router.query?.palette as string;
    const pA = urlPalette?.split("-");
    const newPA = pA?.map((color) => "#" + color);
    console.log(urlPalette);

    if (urlPalette && newPA) {
      setPalette(newPA);
    } else {
      {
        !router.query?.palette && generate();
      }
    }
  }, [router]);

  useKeypress(" ", () => {
    generate();
  });
  const { isOpen, open, close } = useDrawerStore();
  //#e50943 -> Cherry Velvet
  //#e5e509 -> Peridot
  // >> #56028e -> SQL Injection Purple

  const removeColor = (color: string) => {
    const updatedPalette = palette.filter((col) => col !== color);
    setPalette(updatedPalette);
    setColorCount(updatedPalette.length);
  };

  const addNewColor = () => {
    setColorCount(colorCount + 1);
    const newColor = randomColor({
      count: 1,
      luminosity:
        luminosity === "Default"
          ? "bright"
          : luminosity === "Dark"
          ? "dark"
          : luminosity === "Light"
          ? "light"
          : luminosity === "Random"
          ? "random"
          : "bright",
    });
    setPalette([...palette, newColor[0]]);
  };

  return <>Loading...</>;
}
