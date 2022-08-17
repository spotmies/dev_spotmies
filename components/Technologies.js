import React from "react";
import Image from "next/image";

import * as Constants from "./Constants";

const Technologies = () => {
  return (
    <div className="mx-auto justify-between flex my-[100px] w-[84%] h-[100vh]">
      <div>
        <h2 className="text-5xl flex flex-col font-bold space-y-2">
          <span className="text-blue-400">Technologies</span>
          <span>we used</span>
        </h2>
        <p className="w-[60%] mt-10 text-gray-500 text-lg leading-tight">
          {Constants.DESCRIPTION}
        </p>
      </div>
      <div className="flex flex-col space-y-6 mr-20">
        <div className="flex space-x-8">
          <div className="cursor-pointer scale-125 max-w-sm py-5 px-3 w-40  rounded-2xl overflow-hidden shadow-lg flex flex-col justify-center items-center bg-gradient-to-t from-blue-50 to-white">
            <div className="border border-blue-300 rounded-full bg-gradient-to-l p-2 from-slate-200">
              <Image
                className=""
                src="/assets/flutter.png"
                height={80}
                width={85}
                objectFit="contain"
              />
            </div>

            <div className="text-md text-blue-500 font-semibold mt-5">
              Flutter
            </div>
          </div>
          <div className="cursor-pointer transition hover:text-blue-500 hover:scale-125 duration-500 ease-in-out max-w-sm pt-3 pb-5 px-3 w-36 h-40 bg-gradient-to-t from-blue-50 to-white rounded-2xl overflow-hidden shadow-lg flex flex-col justify-center items-center ">
            <Image
              className=" rounded-full bg-gradient-to-bl from-slate-200 p-2"
              src="/assets/react.png"
              height={80}
              width={80}
              objectFit="contain"
            />
            <div className="text-xs font-semibold mt-5">React js</div>
          </div>
        </div>

        <div className="flex space-x-6 ml-8">
          <div className="cursor-pointer mt-6 transition hover:text-blue-500 hover:scale-125 duration-500 ease-in-out max-w-sm pt-3 pb-5 px-3 w-36 h-40 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-center items-center bg-white">
            <Image
              className=" rounded-full bg-gradient-to-b from-slate-200 p-2"
              src="/assets/react.png"
              height={80}
              width={80}
              objectFit="contain"
            />
            <div className="text-xs font-semibold mt-5">React js</div>
          </div>
          <div className="cursor-pointer transition hover:text-blue-500 hover:scale-125 duration-500 ease-in-out max-w-sm pt-6 pb-6 px-3 w-36 h-40 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-center items-center bg-white">
            <div className="rounded-full bg-gradient-to-b from-slate-200 p-2">
              <Image
                src="/assets/adobe.png"
                height={70}
                width={75}
                objectFit="contain"
              />
            </div>

            <div className="text-xs font-semibold mt-1 flex flex-col items-center">
              Adobe XD <span>&</span> <span>Figma</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
