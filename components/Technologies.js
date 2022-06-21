import React from "react";
import Image from "next/image";

import * as Constants from "./Constants";

const Technologies = () => {
  return (
    <div className="mx-auto justify-between flex my-[100px] w-[87%]">
      <div>
        <h2 className="text-5xl flex flex-col font-bold space-y-2">
          <span className="text-blue-400">Technologies</span>
          <span>we used</span>
        </h2>
        <p className="w-[60%] mt-10 text-gray-500 text-lg leading-tight">
          {Constants.DESCRIPTION}
        </p>
      </div>
      <div className="flex flex-col space-y-6 mr-24">
        <div className="flex space-x-6">
          <div className="cursor-pointer scale-125 max-w-sm py-5 px-3 w-32 bg-slate-100 rounded-lg overflow-hidden shadow-lg flex flex-col justify-center items-center">
            <Image
              className="border rounded-full bg-white"
              src="/assets/spotmies_logo1.png"
              height={80}
              width={80}
              ObjectFit="contain"
            />
            <div className="text-md text-blue-500 font-semibold mt-5">
              React js
            </div>
          </div>
          <div className="cursor-pointer transition hover:text-blue-500 hover:scale-125 duration-500 ease-in-out max-w-sm py-5 px-3 w-32 h-40 bg-slate-100 rounded-lg overflow-hidden shadow-lg flex flex-col justify-center items-center">
            <Image
              className="border rounded-full bg-white"
              src="/assets/spotmies_logo1.png"
              height={80}
              width={80}
              ObjectFit="contain"
            />
            <div className="text-md font-semibold mt-5">React js</div>
          </div>
        </div>

        <div className="flex space-x-6">
          <div className="cursor-pointer mt-6 transition hover:text-blue-500 hover:scale-125 duration-500 ease-in-out max-w-sm py-5 px-3 w-32 bg-slate-100 rounded-lg overflow-hidden shadow-lg flex flex-col justify-center items-center">
            <Image
              className="border rounded-full bg-white"
              src="/assets/spotmies_logo1.png"
              height={80}
              width={80}
              ObjectFit="contain"
            />
            <div className="text-md font-semibold mt-5">React js</div>
          </div>
          <div className="cursor-pointer transition hover:text-blue-500 hover:scale-125 duration-500 ease-in-out max-w-sm py-5 px-3 w-32 h-40 bg-slate-100 rounded-lg overflow-hidden shadow-lg flex flex-col justify-center items-center">
            <Image
              className="border rounded-full bg-white"
              src="/assets/spotmies_logo1.png"
              height={80}
              width={80}
              ObjectFit="contain"
            />
            <div className="text-md font-semibold mt-5 ">React js</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
