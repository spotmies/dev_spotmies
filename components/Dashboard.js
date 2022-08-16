import Image from "next/image";
import React from "react";

const Dashboard = () => {
  return (
    <div className="mx-auto flex flex-col justify-center items-center bg-white overflow-hidden shadow-lg  w-[84%] h-[500px] rounded-[30px]">
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
        <div className="bg-gradient-to-r from-slate-100 mb-[150px]  rounded-2xl shadow-lg flex flex-col py-10  border border-blue-500 h-24 w-[150px] justify-center items-center">
          <span className="text-4xl font-semibold">18+</span>
          <p className="text-xs text-slate-400 font-semibold mt-2">
            world wide clients
          </p>
        </div>
        <div className="bg-gradient-to-r from-slate-100 mb-[150px]  rounded-2xl shadow-lg flex flex-col py-10  border border-blue-500 h-24 w-[150px] justify-center items-center">
          <span className="text-4xl font-semibold">25+</span>
          <p className="text-xs text-slate-400 font-semibold mt-2">
            projects completed
          </p>
        </div>
      </div>
      <h1 className="text-3xl -mt-24 font-semibold">Our Clients</h1>
      <div className="flex -mt-6 pb-20 space-x-20">
        <div>
          <Image
            src="/assets/go-kart.png"
            height={120}
            width={120}
            objectFit="contain"
          />
        </div>
        <div>
          <Image
            src="/assets/spotmies-logo.png"
            height={120}
            width={120}
            objectFit="contain"
          />
        </div>
        <div>
          <Image
            src="/assets/go-kart.png"
            height={120}
            width={120}
            objectFit="contain"
          />
        </div>
        <div>
          <Image
            src="/assets/spotmies-logo.png"
            height={120}
            width={120}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
