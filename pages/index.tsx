import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import randomColor from "randomcolor";
import { useEffect, useState } from "react";
import { BiCopy } from "react-icons/bi";
import { SiTwitter } from "react-icons/si";
import copy from "copy-to-clipboard";

export default function Home() {
  const [colors, setColors] = useState<string[]>([]);
  const [copyText, setCopyText] = useState<string>("Copy");

  const generate = () => {
    setColors(randomColor({ count: 5 }));
  };

  function hexToRgb(hex: string) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  }

  function getLuminosity(hexCode: string) {
    const rgb = hexToRgb(hexCode);
    return 0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b;
  }

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
      <div className="flex shadow-sm items-center justify-between px-5 h-[10%]">
        <img
          src="https://res.cloudinary.com/xing0x/image/upload/v1674131509/VIBRANTwbgggw_w6j7m9.png"
          className="w-32"
          alt=""
        />

        <p className="text-xl text-center lg:block hidden">
          Press the space bar to generate a new palette!
        </p>

        <a
          href="https://twitter.com/vibranttdotco/"
          target={"_blank"}
          className="flex items-center gap-2"
        >
          <SiTwitter />
          Follow on Twitter
        </a>
      </div>
      <div className="flex items-center justify-between h-[90%]">
        {colors.map((color, i) => {
          const luminosity = getLuminosity(color);
          console.log(luminosity);
          const textColor = luminosity >= 128 ? "text-black" : "text-white";
          return (
            <div
              key={i}
              className={`h-full w-[20%] flex items-center justify-center`}
              style={{
                backgroundColor: color,
              }}
            >
              <div className={`${textColor}`}>
                <h1 className={`text-4xl font-semibold`}>
                  {color.toUpperCase()}
                </h1>
                <center className="mt-5">
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
    </div>
  );
}
