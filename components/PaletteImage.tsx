import React from "react";

const PaletteImage = ({ palette, ref }: any) => {
  return (
    <div
      className="absolute w-96 z-[999999999999999999] h-96 bg-[#1a1a1a] flex items-center  flex-col translate-x-[-1100px]"
      ref={ref}
    >
      <div className="h-[10%] flex items-center justify-center">
        <img
          src="https://res.cloudinary.com/xing0x/image/upload/v1674131509/VIBRANTwbgggw_w6j7m9.png"
          className="w-24"
          alt=""
        />
      </div>
      <div className="h-[83%] flex w-full flex-col bg-red-400">
        {palette.map((color: string, i: number) => (
          <div className="w-full flex h-full" key={i}>
            <div
              className="w-full flex items-center "
              style={{ backgroundColor: color }}
            >
              <h1 className="font-semibold  ml-4">{color.toUpperCase()}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center h-[7%]">
        <h1 className="text-xs">Generate by vibrantt.co</h1>
      </div>
    </div>
  );
};

export default PaletteImage;
