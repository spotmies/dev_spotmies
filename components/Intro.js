import React from "react";
import Image from "next/image";
import * as Constants from "./Constants";
import LottieHeader from "./LottieHeader";
import LottieHeaderCompact from "./LottieHeaderCompact";
import { FiSend } from 'react-icons/fi';

const Intro = () => {
  return (
    <div className="mx-auto text flex my-[80px] w-[90%] mb-[150px] md:w-[89%] md:h-[90vh] relative">
      <div className="hidden md:block rounded-full h-14 w-14 bg-gradient-to-bl from-[#cfe1fd] to-slate-100 absolute -top-20 -right-20"></div>

      <div className="flex flex-col justify-center md:mt-12 md:block items-center">
        {/*Issue is with w-full*/}
        <h2 className="text-3xl md:text-5xl md:flex flex-col font-bold space-x-2 md:space-x-0 md:space-y-5  md:pl-0 w-full text-center md:text-left">
          <span>Destination to your</span>
          <span className="text-blue-400">dream project</span>
          <span>is here!!!</span>
        </h2>
        <div className="md:hidden">
          {/*<Image*/}
          {/*    src="/slide1.png"*/}
          {/*    width={500}*/}
          {/*    height={460}*/}
          {/*    objectFit="contain"*/}
          {/*/>*/}

          <LottieHeaderCompact />
        </div>
        <p className="md:w-[80%] w-[100%] md:mt-6 mb-6 md:mb-0 text-gray-400 text-sm md:text-sm md:leading-6 tracking-widest md:text-left text-justify iPhone:px-8 pl-28 md:pl-0">
          {Constants.DESCRIPTION}
        </p>
        <button className="md:mt-10 md:mb-5 text-blue-400 md:border-none border-[1.5px] border-blue-400 md:bg-blue-400  md:text-white  py-[8px] px-8 rounded-lg flex flex-row items-center ">
            <FiSend />
            <p className="pl-4">Send Request</p>
        </button>
      </div>
      <div className="hidden md:block">
        <LottieHeader />
      </div>
      <div className="hidden md:block rounded-full h-14 w-14 bg-gradient-to-br from-[#cfe1fd] to-slate-100 absolute bottom-40 left-[30rem]"></div>
    </div>
  );
};

export default Intro;
