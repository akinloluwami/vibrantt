import randomColor from "randomcolor";
import { useContext, useEffect, useState } from "react";
import { BiCopy } from "react-icons/bi";
import copy from "copy-to-clipboard";
import { getLuminosity } from "@/utils/getLuminosity";
import nearestColor from "nearest-color";
import colorNameList from "color-name-list";
import Loading from "./loading";
import produce from "immer";
import { TiArrowBack, TiArrowForward } from "react-icons/ti";
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
import { ChevronLeft, ChevronRight, Settings2, X } from "lucide-react";

export default function Home() {
  const [palette, setPalette] = useState<string[]>([]);
  const [copyText, setCopyText] = useState<string>("Copy");
  const [prevPalettes, setPrevPalettes] = useState<string[][]>([[]]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const { colorSpace } = useColorSpaceStore();
  const { toggleValue } = useToggleStore();
  const { luminosity } = useLuminosityStore();

  const colors = colorNameList.reduce(
    (o, { name, hex }) => Object.assign(o, { [name]: hex }),
    {}
  );

  const nearest = nearestColor.from(colors);

  const generate = () => {
    // let colors = newPalette;

    // for (let i = 0; i < colors.length; i++) {
    //   console.log("%c  ", `background: ${colors[i]};`);
    // }
    const newPalette: string[] = randomColor({
      count: 5,
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
    setPalette(newPalette);
    setPrevPalettes(
      produce(prevPalettes, (draft) => {
        draft.splice(currentIndex + 1);
        draft.push(newPalette);
      })
    );
    setCurrentIndex(currentIndex + 1);
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
    generate();
  }, []);

  useKeypress(" ", () => {
    generate();
  });
  const { isOpen, open, close } = useDrawerStore();
  //#e50943 -> Cherry Velvet
  //#e5e509 -> Peridot
  // >> #56028e -> SQL Injection Purple
  return (
    <div className="w-screen overflow-x-hidden  h-screen relative">
      <DrawerContext.Provider value={{ isOpen, open, close }}>
        <Drawer />
        <div className="flex shadow-sm items-center justify-between px-5 lg:h-[10%] h-[8%] relative">
          <Header
            undo={undo}
            currentIndex={currentIndex}
            redo={redo}
            prevPalettes={prevPalettes}
          />
        </div>
      </DrawerContext.Provider>
      {palette.length < 1 ? (
        <Loading />
      ) : (
        <>
          <div className="flex items-center justify-start lg:h-[90%] h-[84%] lg:flex-row flex-col">
            {palette.map((color, i) => {
              const luminosity = getLuminosity(color);
              const rgb = hexToRgb(color);
              const { r, g, b } = rgb;
              const rgbString = `rgb(${r},${g},${b})`;
              const hsl = hexToHsl(color);
              const { h, s, l } = hsl;
              const hslString = `hsl(${h},${s},${l})`;
              const textColor = luminosity >= 128 ? "text-black" : "text-white";
              return (
                <div
                  key={i}
                  className={`lg:h-full h-[20%] flex-1  w-full flex items-center justify-center`}
                  style={{
                    backgroundColor: color,
                  }}
                >
                  <div className={`${textColor}`}>
                    <h1
                      className={`lg:text-2xl text-xl font-semibold text-center`}
                    >
                      {colorSpace === "RGB"
                        ? rgbString.toUpperCase()
                        : colorSpace === "HSL"
                        ? hslString.toUpperCase()
                        : color.toUpperCase()}
                    </h1>
                    {toggleValue && (
                      <p className="text-center">{nearest(color).name}</p>
                    )}
                    <center className="lg:mt-5 flex flex-col items-center">
                      <div className="tooltip" data-tip={copyText}>
                        <button
                          className="text-2xl"
                          onClick={() => {
                            copy(color);
                            setCopyText("Copied");
                            setTimeout(() => {
                              setCopyText("Copy");
                            }, 750);
                          }}
                        >
                          <BiCopy />
                        </button>
                      </div>
                      <div className="tooltip" data-tip={"Remove color"}>
                        <button className="text-2xl" onClick={() => {}}>
                          <X />
                        </button>
                      </div>
                    </center>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="py-4 px-3 lg:hidden flex items-center justify-between w-full h-[8%]">
            <button className="btn" onClick={generate}>
              Generate
            </button>
            <div className="flex items-center gap-2">
              <div className="flex gap-3">
                <Button onClick={undo} disabled={currentIndex === 1}>
                  <ChevronLeft />
                </Button>
                <Button
                  onClick={redo}
                  disabled={currentIndex === prevPalettes.length - 1}
                >
                  <ChevronRight />
                </Button>
              </div>
              <div className="flex items-center">
                <Button onClick={open}>
                  <Settings2 />
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
