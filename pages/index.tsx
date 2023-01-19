import randomColor from "randomcolor";
import { useEffect, useState } from "react";

export default function Home() {
  const [colors, setColors] = useState<string[]>([]);

  const generate = () => {
    setColors(randomColor({ count: 5 }));
  };

  useEffect(() => {
    generate();
  }, []);

  return (
    <div className="w-screen h-screen">
      <div className="flex shadow-sm items-center justify-between px-3 h-[10%]">
        <h1>Vibrantt</h1>
        <button>Follow on Twitter</button>
      </div>
      <div className="flex items-center justify-between h-[90%] bg-gray-600">
        {colors.map((color, i) => (
          <div
            key={i}
            className={`h-full w-[20%]`}
            style={{
              backgroundColor: color,
            }}
          >
            {color}
          </div>
        ))}
      </div>
      {/* <div className="h-[10%]"></div> */}
    </div>
  );
}
