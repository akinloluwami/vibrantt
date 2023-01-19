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

export default function Home() {
  const [colors, setColors] = useState<string[]>([]);
  const [copyText, setCopyText] = useState<string>("Copy");
  const colorsr = colorNameList.reduce(
    (o, { name, hex }) => Object.assign(o, { [name]: hex }),
    {}
  );

  const nearest = nearestColor.from(colorsr);
  const generate = () => {
    setColors(randomColor({ count: 5 }));
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
    <div className="w-screen h-screen">
      <div className="flex shadow-sm items-center justify-between px-5 lg:h-[10%] h-[8%] relative">
        <img
          src="https://res.cloudinary.com/xing0x/image/upload/v1674131509/VIBRANTwbgggw_w6j7m9.png"
          className="w-32"
          alt=""
        />

        <p className="text-xl text-center lg:block hidden">
          Press the space bar to generate a new palette!
        </p>

        <Link
          href="https://twitter.com/vibranttdotco/"
          target={"_blank"}
          className="flex items-center gap-2"
        >
          <SiTwitter />
          Follow on Twitter
        </Link>
      </div>

      {colors.length < 1 ? (
        <Loading />
      ) : (
        <>
          <div className="flex items-center justify-start lg:h-[90%] h-[84%] lg:flex-row flex-col">
            {colors.map((color, i) => {
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
          <div className="py-4 px-3 lg:hidden flex items-center w-full h-[8%]">
            <button className="btn" onClick={generate}>
              Generate
            </button>
          </div>
        </>
      )}
    </div>
  );
}
