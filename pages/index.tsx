import randomColor from "randomcolor";
import { useEffect, useState } from "react";

export default function Home() {
  const [colors, setColors] = useState<string[]>([]);

  const generate = () => {
    setColors(randomColor({ count: 5 }));
  };

  const getLuminosity = (hex: string) => {
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
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
      <div className="flex shadow-sm items-center justify-between px-3 h-[10%]">
        <h1>Vibrantt</h1>
        <button>Follow on Twitter</button>
      </div>
      <div className="flex items-center justify-between h-[90%] bg-gray-600">
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
              <div className="">
                <h1 className={`text-4xl font-bold ${textColor}`}>
                  {color.toUpperCase()}
                </h1>
                <center>
                  <button>Copy</button>
                </center>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
