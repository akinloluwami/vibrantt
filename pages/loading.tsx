import React from "react";

const Loading = () => {
  return (
    <div
      className="flex items-center justify-start lg:h-[90%] h-[84%] lg:flex-row flex-col animate-pulse"
      role="status"
    >
      <div
        className={`lg:h-full h-[20%] lg:w-[20%]  w-full flex items-center justify-center bg-slate-300`}
      ></div>
      <div
        className={`lg:h-full h-[20%] lg:w-[20%]  w-full flex items-center justify-center bg-slate-400`}
      ></div>
      <div
        className={`lg:h-full h-[20%] lg:w-[20%]  w-full flex items-center justify-center bg-slate-500`}
      ></div>
      <div
        className={`lg:h-full h-[20%] lg:w-[20%]  w-full flex items-center justify-center bg-slate-600`}
      ></div>
      <div
        className={`lg:h-full h-[20%] lg:w-[20%]  w-full flex items-center justify-center bg-slate-700`}
      ></div>
    </div>
  );
};

export default Loading;
