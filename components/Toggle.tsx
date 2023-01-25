import { useState } from "react";

const Toggle = () => {
  const [on, setOn] = useState(true);
  return (
    <div
      className="flex items-center w-10 bg-[#2a303c] rounded-full relative h-5 cursor-pointer"
      onClick={() => setOn(!on)}
    >
      <div
        className={`bg-gray-400 h-4 w-4 rounded-full absolute transition-all ${
          on ? "translate-x-[22px]" : "translate-x-[2px]"
        } `}
      ></div>
    </div>
  );
};

export default Toggle;
