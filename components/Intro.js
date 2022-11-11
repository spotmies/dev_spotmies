import React from "react";
import Image from "next/image";
import * as Constants from "./Constants";
import LottieHeader from "./LottieHeader";
import LottieHeaderCompact from "./LottieHeaderCompact";

const Intro = () => {
  return (
    <div className="mx-auto text flex my-[100px] w-[90%] mb-[150px] md:w-[84%] md:h-[90vh] relative">
      <div className="hidden md:block rounded-full h-14 w-14 bg-gradient-to-bl from-[#cfe1fd] to-slate-100 absolute -top-20 -right-20"></div>

      <div className="flex flex-col justify-center space-y-16 md:mt-12 md:block items-center">
        {/*Issue is with w-full*/}
        <h2 className="text-3xl md:text-5xl md:flex flex-col font-bold space-x-2 md:space-x-0 md:space-y-5  md:pl-0 w-full text-center md:text-left">
          <span>Destination to your</span>
          <span className="text-blue-400">dream project</span>
          <span>is here!!!</span>
        </h2>
        <div className="md:hidden px-20">
          {/*<Image*/}
          {/*    src="/slide1.png"*/}
          {/*    width={500}*/}
          {/*    height={460}*/}
          {/*    objectFit="contain"*/}
          {/*/>*/}

          <LottieHeaderCompact />
        </div>
        <p className="md:w-[60%] w-[100%] mt-10 text-gray-500 text-xl md:text-lg leading-tight text-center md:text-left iPhone:px-16 pl-28 md:pl-0">
          {Constants.DESCRIPTION}
        </p>
        <button className="md:mt-10  md:mb-5 text-blue-400 md:border-none border-[1.5px] border-blue-400 md:bg-blue-400  md:text-white iPhone:px-16 pl-24 md:pl-4 py-[8px] md:px-[22px] px-[50px] rounded-lg">
          Send Request
        </button>
      </div>
      <div className="hidden md:block mr-12">
        <LottieHeader />
      </div>
      <div className="hidden md:block rounded-full h-14 w-14 bg-gradient-to-br from-[#cfe1fd] to-slate-100 absolute bottom-40 left-[30rem]"></div>
    </div>
  );
};

export default Intro;
