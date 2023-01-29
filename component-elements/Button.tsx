import React, { useRef } from "react";

const Button = ({ children, onClick, disabled }: any) => {
  const btnRef: any = useRef(null);

  return (
    <button
      className="hover:bg-slate-700 bg-transparent transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-default mx-1 p-1 rounded-full text-lg border-none"
      ref={btnRef}
      onClick={() => {
        onClick();
        btnRef.current.blur();
      }}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
