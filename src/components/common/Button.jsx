import React from "react";

const Button = ({ text, className, icon, type, variant, onClick }) => {
  const variants = {
    primary:
      "bg-green text-whity border border-transparent hover:border-green hover:text-green hover:bg-whity duration-300 ease-in-out",
  };
  return (
    <button
      onClick={onClick}
      type={type}
      className={`flex cursor-pointer ${variants[variant] || ""}  ${className} ${icon && "gap-2.5"} leading-160 font-semibold rounded-full`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
