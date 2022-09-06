import Image from "next/image";
import React from "react";

const Dashboard = () => {
  return (
    <div className="relative my-[280px] md:my-0 md:block flex flex-col gap-16 items-center justify-center">
      <div className="rounded-full h-24 w-24 bg-gradient-to-br from-[#dce4ec] to-slate-100 absolute -top-28 left-10"></div>
      <div className="mx-auto hidden md:flex flex-col justify-center items-center bg-gradient-to-r from-white to-blue-50 overflow-hidden shadow-lg  w-[84%] h-[85vh] rounded-[30px]">
        <h1 className="text-5xl mt-[130px] font-bold">What we have</h1>
        <div className="flex items-center space-x-12">
          <Image
            className="!-mt-16"
            src="/assets/engineer.png"
            height={350}
            width={350}
            objectFit="contain"
          />

          <div className="bg-gradient-to-r from-slate-100  mb-[150px] rounded-2xl shadow-lg flex flex-col  border border-blue-500 h-24 w-[150px] justify-center items-center">
            <span className="text-4xl font-semibold">3+</span>
            <p className="text-xs text-slate-400 font-semibold mt-2">
              years of experience
            </p>
          </div>
          <div className=" bg-gradient-to-r from-slate-100 mb-[150px]  rounded-2xl shadow-lg flex flex-col py-10  border border-blue-500 h-24 w-[150px] justify-center items-center">
            <span className=" text-4xl font-semibold">18+</span>
            <p className=" text-xs text-slate-400 font-semibold mt-2">
              world wide clients
            </p>
          </div>
          <div className=" bg-gradient-to-r from-slate-100 mb-[150px]  rounded-2xl shadow-lg flex flex-col py-10  border border-blue-500 h-24 w-[150px] justify-center items-center">
            <span className=" text-4xl font-semibold">25+</span>
            <p className=" text-xs text-slate-400 font-semibold mt-2">
              projects completed
            </p>
          </div>
        </div>
        <h1 className=" text-3xl -mt-24 font-semibold">Our Clients</h1>
        <div className=" flex -mt-6 pb-20 space-x-20">
          <div>
            <Image
              src="/assets/go-kart.png"
              height={150}
              width={150}
              objectFit="contain"
            />
          </div>
          <div>
            <Image
              src="/assets/spotmies-logo.png"
              height={150}
              width={150}
              objectFit="contain"
            />
          </div>
          <div>
            <Image
              src="/assets/go-kart.png"
              height={150}
              width={150}
              objectFit="contain"
            />
          </div>
          <div>
            <Image
              src="/assets/spotmies-logo.png"
              height={150}
              width={150}
              objectFit="contain"
            />
          </div>
        </div>
      </div>

      {/* mobile-view */}
      <h1 className="md:hidden text-4xl ml-20 Iphone:ml-14 font-bold">
        Our Clients
      </h1>
      <div className="iPhone:ml-10 ml-14 mx-auto md:hidden flex justify-evenly bg-white overflow-hidden shadow-lg w-full h-[320px] rounded-[30px]">
        <div className="">
          <h1 className="text-3xl mt-10 font-bold">What we have</h1>
          <div className="flex items-center space-x-12">
            <Image
              className=""
              src="/assets/engineer.png"
              height={200}
              width={200}
              objectFit="contain"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-5">
          <div className="bg-gradient-to-r from-slate-100   rounded-lg shadow-lg flex flex-col border border-blue-500 py-2 h-15 w-[100px] justify-center items-center">
            <span className="text-xl font-semibold">3+</span>
            <p className="text-[8px] text-slate-400 font-semibold mt-1">
              years of experience
            </p>
          </div>
          <div className=" bg-gradient-to-r from-slate-100   rounded-lg shadow-lg flex flex-col  border border-blue-500 py-2 h-15 w-[100px] justify-center items-center">
            <span className=" text-xl font-semibold">18+</span>
            <p className=" text-[8px] text-slate-400 font-semibold mt-1">
              world wide clients
            </p>
          </div>
          <div className=" bg-gradient-to-r from-slate-100   rounded-lg shadow-lg flex flex-col  border border-blue-500 py-2 h-15 w-[100px] justify-center items-center">
            <span className=" text-xl font-semibold">25+</span>
            <p className=" text-[8px] text-slate-400 font-semibold mt-1">
              projects completed
            </p>
          </div>
        </div>
      </div>

      <div className="md:hidden -mt-5 flex space-x-12 ml-24 iPhone:ml-20">
        <div>
          <Image
            src="/assets/go-kart.png"
            height={100}
            width={100}
            objectFit="contain"
          />
        </div>
        <div>
          <Image
            src="/assets/spotmies-logo.png"
            height={100}
            width={100}
            objectFit="contain"
          />
        </div>
        <div>
          <Image
            src="/assets/go-kart.png"
            height={100}
            width={100}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
