import React from "react";
import Image from "next/image";
import * as Constants from "./Constants";

const Intro = () => {
  return (
    <div className="mx-auto flex my-[100px] mb-[150px] w-[84%] h-[90vh] relative">
      <div className="hidden md:block rounded-full h-14 w-14 bg-gradient-to-bl from-[#dce4ec] to-slate-100 absolute -top-20 -right-20"></div>
      <div className="flex flex-col justify-center  space-y-8 mt-12 md:block items-center">
        <h2 className="text-3xl  md:text-5xl md:flex flex-col font-bold space-x-2 md:space-x-0 md:space-y-5 ">
          <span>Lorem ipsum</span>
          <span className="text-blue-400">dolor sit amet</span>
          <span>consectetur</span>
        </h2>
        <div className="md:hidden mr-12 ">
          <Image
            src="/slide1.png"
            width={500}
            height={460}
            objectFit="contain"
          />
        </div>
        <p className="md:w-[60%] mt-10 text-gray-500 text-xl md:text-lg leading-tight">
          {Constants.DESCRIPTION}
        </p>
        <button className="md:mt-10 md:mb-5 text-blue-400 md:border-none border-[1.5px] border-blue-400 md:bg-blue-400  md:text-white mr-[16.5rem] md:mr-0  py-[8px] px-[22px] rounded-lg">
          Send Request
        </button>
      </div>
      <div className="hidden md:block mr-12">
        <Image src="/slide1.png" width={500} height={460} objectFit="contain" />
      </div>
      <div className="hidden md:block rounded-full h-14 w-14 bg-gradient-to-br from-[#dce4ec] to-slate-100 absolute bottom-40 left-[30rem]"></div>
    </div>
  );
};

export default Intro;
