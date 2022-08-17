import Image from "next/image";
import React from "react";

const Header = ({ projectRef, roadmapRef }) => {
  const executeScroll = () =>
    projectRef.current.scrollIntoView({ behavior: "smooth" });

  const executeScroll1 = () =>
    roadmapRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <header className="flex items-center h-[10vh]  z-50 w-full">
      <div className="flex justify-between items-center flex-grow ">
        <div className="flex h-20 items-center ml-20 cursor-pointer">
          <Image
            src="/assets/spotmies-logo.png"
            height={150}
            width={150}
            objectFit="contain"
          />
        </div>
        <div className="text-gray-500 h-[70px] flex items-center text-sm space-x-28 mr-20">
          <p className="cursor-pointer" onClick={executeScroll}>
            Projects
          </p>
          <p className="cursor-pointer" onClick={executeScroll1}>
            Road map
          </p>
          <p className="cursor-pointer">Contact Us</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
