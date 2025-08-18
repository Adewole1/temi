import React, { useState } from "react";

const HoverButton = ({
  bg,
  text,
  hoverBg,
  hoverText,
  width,
  height,
  link,
  oldContent,
  newContent,
  target,
}) => {
  const [hovered, setHovered] = useState(false);
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <a
      href={link && link}
      className={`relative flex items-center justify-center px-2 overflow-hidden rounded-md text-nowrap cursor-pointer ${
        bg ?? "bg-primary"
      } ${text ?? "text-white"} ${width ?? "w-40"} ${height ?? "h-6"} ${
        hoverBg && hoverBg
      } ${hoverText && hoverText}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      target={target && target}
    >
      <div
        className={`absolute inset-0 flex items-center justify-center transition-transform hover-button animate__animated ${
          hovered ? "animate__slideOutUp" : "animate__slideInDown"
        }`}
      >
        {oldContent}
      </div>
      <div
        className={`absolute inset-0 flex items-center justify-center transition-transform hover-button animate__animated ${
          hovered ? "animate__slideInUp" : "animate__slideOutDown"
        }`}
      >
        {newContent}
      </div>
    </a>
    // <button
    //   onMouseEnter={handleMouseEnter}
    //   onMouseLeave={handleMouseLeave}
    //   className={`flex items-center py-2.5 md:py-3 px-4 md:px-5 rounded-md font-medium transition duration-300 ease-in-out transform hover:scale-105 ${
    //     bg ?? "bg-white"
    //   } ${text ?? "text-gray-700"}`}
    // >
    //   {buttonText}
    // </button>
  );
};

const PrimaryButton = ({ link, buttonText, target = "_blank" }) => {
  return (
    <div className="relative inline-block">
      {/* Moving gradient background */}
      <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-fuchsia-400 via-purple-500 to-orange-500 bg-[length:300%_300%] animate-moveGradient blur-sm opacity-90"></div>
      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-orange-500 via-fuchsia-400 to-purple-500 bg-[length:300%_300%] animate-moveGradient-reverse blur-[2px] opacity-70"></div>
      
      {/* Button content */}
      <a
        href={link && link}
        target={target && target}
        className="relative px-3 py-1.5 lg:px-4 lg:py-2 xl:py-2.5 xl:px-5 rounded-full bg-white text-gray-900 hover:bg-transparent hover:text-white transition-all duration-300 shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex justify-center items-center font-medium"
      >
        {buttonText}
      </a>
    </div>
  );
};

export { PrimaryButton, HoverButton };
