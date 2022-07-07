import React from "react";
import Image from "next/image";
import * as Constants from "./Constants";

const Intro = () => {
  return (
    <div className="mx-auto flex my-[100px] w-[84%]">
      <div>
        <h2 className="text-5xl flex flex-col font-bold space-y-2">
          <span>Lorem ipsum</span>
          <span className="text-blue-400">dolor sit amet</span>
          <span>consectetur</span>
        </h2>
        <p className="w-[60%] mt-10 text-gray-500 text-lg leading-tight">
          {Constants.DESCRIPTION}
        </p>
        <button className="mt-10 mb-8 bg-blue-400  text-white  py-[8px] px-[22px] rounded-lg">
          Send Request
        </button>
      </div>
      <div className="mr-12">
        <Image src="/slide1.png" width={500} height={460} objectFit="conatin" />
      </div>
    </div>
  );
};

export default Intro;
