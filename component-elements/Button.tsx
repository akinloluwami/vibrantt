import React from "react";

const Button = ({ children, onClick, disabled }: any) => {
  return (
    <button
      className="hover:bg-slate-700 bg-transparent transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-default mx-1 p-1 rounded-full text-lg outline-none border-none"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
