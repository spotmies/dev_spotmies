import Image from "next/image";
import React from "react";

const Dashboard = () => {
  return (
    <div className="mx-auto flex flex-col justify-center items-center bg-slate-100 overflow-hidden shadow-lg  my-[150px] w-[87%] pt-10 rounded-2xl">
      <h1 className="text-4xl font-bold">What we have</h1>
      <div className="flex items-center space-x-20">
        <Image
          src="/assets/engineer.png"
          height={350}
          width={350}
          objectFit="contain"
        />

        <div className="bg-slate-200  rounded-xl flex flex-col py-10 px-5 border border-blue-500 h-16 justify-center items-center">
          <span className="text-2xl">3+</span>
          <p className="text-xs">years of experience</p>
        </div>
        <div className="bg-slate-200  rounded-xl flex flex-col py-10 px-5 border border-blue-500 h-16 justify-center items-center">
          <span className="text-2xl">18+</span>
          <p className="text-xs">world wide clients</p>
        </div>
        <div className="bg-slate-200  rounded-xl flex flex-col py-10 px-5 border border-blue-500 h-16 justify-center items-center">
          <span className="text-2xl">25+</span>
          <p className="text-xs">projects completed</p>
        </div>
      </div>
      <h1 className="text-3xl font-semibold">Our Clients</h1>
      <div className="flex space-x-28">
        <div>
          <Image
            src="/assets/go-kart.png"
            height={130}
            width={130}
            objectFit="contain"
          />
        </div>
        <div>
          <Image
            src="/assets/spotmies-logo.png"
            height={130}
            width={130}
            objectFit="contain"
          />
        </div>
        <div>
          <Image
            src="/assets/go-kart.png"
            height={130}
            width={130}
            objectFit="contain"
          />
        </div>
        <div>
          <Image
            src="/assets/spotmies-logo.png"
            height={130}
            width={130}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
