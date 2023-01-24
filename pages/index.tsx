import randomColor from "randomcolor";
import { useEffect, useState } from "react";
import { BiCopy } from "react-icons/bi";
import { SiTwitter } from "react-icons/si";
import copy from "copy-to-clipboard";
import Link from "next/link";
import { getLuminosity } from "@/utils/getLuminosity";
import nearestColor from "nearest-color";
import colorNameList from "color-name-list";
import Loading from "./loading";
import produce from "immer";
import { TiArrowBack, TiArrowForward } from "react-icons/ti";
import Header from "@/components/Header";
export default function Home() {
  const [palette, setPalette] = useState<string[]>([]);
  const [copyText, setCopyText] = useState<string>("Copy");
  const [prevPalettes, setPrevPalettes] = useState<string[][]>([[]]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const colors = colorNameList.reduce(
    (o, { name, hex }) => Object.assign(o, { [name]: hex }),
    {}
  );

  const nearest = nearestColor.from(colors);

  const generate = () => {
    const newPalette: string[] = randomColor({ count: 5 });
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
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        generate();
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div
      className="w-screen h-screen"
      onKeyDown={(e) => {
        console.log(e);
      }}
    >
      <div className="flex shadow-sm items-center justify-between px-5 lg:h-[10%] h-[8%] relative">
        <Header
          undo={undo}
          currentIndex={currentIndex}
          redo={redo}
          prevPalettes={prevPalettes}
        />
      </div>

      {palette.length < 1 ? (
        <Loading />
      ) : (
        <>
          <div className="flex items-center justify-start lg:h-[90%] h-[84%] lg:flex-row flex-col">
            {palette.map((color, i) => {
              const luminosity = getLuminosity(color);
              const textColor = luminosity >= 128 ? "text-black" : "text-white";
              return (
                <div
                  key={i}
                  className={`lg:h-full h-[20%] lg:w-[20%]  w-full flex items-center justify-center`}
                  style={{
                    backgroundColor: color,
                  }}
                >
                  <div className={`${textColor}`}>
                    <h1
                      className={`lg:text-4xl text-xl font-semibold text-center`}
                    >
                      {color.toUpperCase()}
                    </h1>
                    <p className="text-center">{nearest(color).name}</p>
                    <center className="lg:mt-5">
                      <div className="tooltip" data-tip={copyText}>
                        <button
                          className="p-2 rounded-full outline-none text-2xl"
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
            <div className="flex gap-3">
              <button
                className="btn rounded-full text-lg"
                onClick={undo}
                disabled={currentIndex === 1}
              >
                <TiArrowBack />
              </button>
              <button
                className="btn rounded-full text-lg"
                onClick={redo}
                disabled={currentIndex === prevPalettes.length - 1}
              >
                <TiArrowForward />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
