import React, { useState } from "react";

const Toggle = () => {
  const [on, setOn] = useState(false);
  return (
    <div
      className="flex items-center w-10 bg-red-50 rounded-full relative h-5"
      onClick={() => setOn(!on)}
    >
      <div
        className={`bg-red-500 h-4 w-4 rounded-full absolute ${
          on ? "right-[2px]" : "left-[2px]"
        } `}
      ></div>
    </div>
  );
};

export default Toggle;
