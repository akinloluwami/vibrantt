import React from "react";

const PaletteImage = ({ palette }: any) => {
  return (
    <div className="absolute w-96 z-[999999999999999999] py-3 h-96 bg-[#1a1a1a] flex items-center justify-between flex-col">
      <div className="">
        <img
          src="https://res.cloudinary.com/xing0x/image/upload/v1674131509/VIBRANTwbgggw_w6j7m9.png"
          className="w-32"
          alt=""
        />
      </div>
      <div className="flex-2 flex">
        {palette.slice(0, 5).map((color) => (
          <div className="flex flex-col items-center">
            <div
              className="h-14 w-14 rounded-full mx-2"
              style={{ backgroundColor: color }}
            ></div>
            <h1 className="font-semibold text-sm mt-2">
              {color.toUpperCase()}
            </h1>
          </div>
        ))}
      </div>
      <div className="">
        <h1>Generate by vibrantt.co</h1>
      </div>
    </div>
  );
};

export default PaletteImage;
