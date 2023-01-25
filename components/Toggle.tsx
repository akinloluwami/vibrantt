import { useState } from "react";

const Toggle = () => {
  const [on, setOn] = useState(true);
  return (
    <div
      className="flex items-center w-10 bg-red-50 rounded-full relative h-5 cursor-pointer"
      onClick={() => setOn(!on)}
    >
      <div
        className={`bg-red-500 h-4 w-4 rounded-full absolute transition-all ${
          on ? "translate-x-[22px]" : "translate-x-[2px]"
        } `}
      ></div>
    </div>
  );
};

export default Toggle;
