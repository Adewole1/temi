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
      className={`relative px-2 overflow-hidden rounded-md font-medium text-nowrap cursor-pointer ${
        bg ?? "bg-[#FD5D00]"
      } ${text ?? "text-white"} ${width ?? "w-40"} ${height ?? "h-6"} ${
        hoverBg && hoverBg
      } ${hoverText && hoverText}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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

export default HoverButton;
