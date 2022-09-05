import React, { useRef } from "react";
import Image from "next/image";

import * as Constants from "./Constants";

const Technologies = () => {
  const card1Ref = useRef(null);

  // useEffect(() => {

  // }, []);
  const reduceSize = () => {
    const card1 = card1Ref.current;
    card1.classList.remove("scale-125");
  };

  return (
    <div className="mx-auto justify-between flex my-[100px] mb-[220px] w-[84%] md:h-[100vh]">
      <div className="md:flex flex-col space-y-24">
        <h2 className="text-5xl flex flex-col font-bold space-y-2 relative">
          <div className="rounded-full h-24 w-24 bg-gradient-to-br from-[#dce4ec] to-slate-100 absolute -top-10 -left-10 z-0"></div>
          <span className="z-10 text-blue-400">Technologies</span>
          <span>we used</span>
        </h2>

        <div className="z-10 md:hidden flex justify-between ml-2 space-x-8">
          <div className="cursor-pointer transition hover:text-blue-500 hover:border border-blue-500 hover:scale-125 duration-500 ease-in-out max-w-sm pt-3 pb-5 px-3 w-28 h-32 bg-gradient-to-t from-blue-50 to-white rounded-2xl overflow-hidden shadow-lg flex flex-col justify-center items-center group">
            <div className="group-hover:border border-blue-300 rounded-full bg-gradient-to-l p-2 from-slate-200">
              <Image
                className=""
                src="/assets/flutter.png"
                height={40}
                width={45}
                objectFit="contain"
              />
            </div>

            <div className="text-sm hover:text-blue-500 font-semibold mt-5">
              Flutter
            </div>
          </div>
          <div className="cursor-pointer transition hover:text-blue-500 hover:border border-blue-500 hover:scale-150 duration-500 ease-in-out max-w-sm pt-3 pb-5 px-3 w-28 h-32  bg-gradient-to-t from-blue-50 to-white rounded-2xl overflow-hidden shadow-lg flex flex-col justify-center items-center group">
            <div className="group-hover:border border-blue-300 rounded-full bg-gradient-to-bl p-2 from-slate-200">
              <Image
                src="/assets/react.png"
                height={40}
                width={45}
                objectFit="cover"
              />
            </div>

            <div className="text-sm font-semibold mt-5">React js</div>
          </div>
          <div className="cursor-pointer transition hover:text-blue-500 hover:border border-blue-500 hover:scale-125 duration-500 ease-in-out max-w-sm pt-6 pb-6 px-3 w-28 h-32  rounded-2xl overflow-hidden shadow-lg flex flex-col justify-center items-center bg-white group">
            <div className="group-hover:border border-blue-300 rounded-full bg-gradient-to-b from-slate-200 p-2">
              <Image
                src="/assets/adobe.png"
                height={30}
                width={35}
                objectFit="contain"
              />
            </div>

            <div className="text-xs font-semibold mt-1 flex flex-col items-center">
              Adobe XD <span>&</span> <span>Figma</span>
            </div>
          </div>
        </div>

        <p className="md:w-[60%] text-center md:text-left mt-10 text-gray-500 text-lg leading-tight">
          {Constants.DESCRIPTION}
        </p>
      </div>
      <div className="hidden md:flex flex-col space-y-6 mr-20 relative">
        <div className="rounded-full h-[580px] w-[580px] bg-gradient-to-br from-[#dce4ec] to-slate-100 absolute -top-16 -right-36 z-0"></div>
        <div className="z-10 flex space-x-8">
          <div
            ref={card1Ref}
            className="cursor-pointer transition duration-500 ease-in-out hover:scale-125 scale-125 max-w-sm py-5 px-3 w-40  rounded-2xl overflow-hidden shadow-lg flex flex-col justify-center items-center bg-gradient-to-t from-blue-50 to-white"
          >
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
          <div
            onMouseEnter={reduceSize}
            className={`cursor-pointer transition hover:text-blue-500 hover:scale-125 duration-500 ease-in-out max-w-sm pt-3 pb-5 px-3 w-36 h-40 bg-gradient-to-t from-blue-50 to-white rounded-2xl overflow-hidden shadow-lg flex flex-col justify-center items-center `}
          >
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

        <div className="z-10 flex space-x-6 ml-8">
          <div
            onMouseEnter={reduceSize}
            className="cursor-pointer mt-6 transition hover:text-blue-500 hover:scale-125 duration-500 ease-in-out max-w-sm pt-3 pb-5 px-3 w-36 h-40 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-center items-center bg-white"
          >
            <Image
              className=" rounded-full bg-gradient-to-b from-slate-200 p-2"
              src="/assets/react.png"
              height={80}
              width={80}
              objectFit="contain"
            />
            <div className="text-xs font-semibold mt-5">React js</div>
          </div>
          <div
            onMouseEnter={reduceSize}
            className="cursor-pointer transition hover:text-blue-500 hover:scale-125 duration-500 ease-in-out max-w-sm pt-6 pb-6 px-3 w-36 h-40 rounded-2xl overflow-hidden shadow-lg flex flex-col justify-center items-center bg-white"
          >
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
