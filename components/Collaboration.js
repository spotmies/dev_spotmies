import Image from "next/image";
import React from "react";

const Collaboration = () => {
  return (
    <div className="mx-auto md:block flex flex-col items-center my-[200px] md:w-[84%] relative">
      <h2 className="z-10 md:hidden text-4xl md:text-5xl font-bold mb-16 ml-24 iPhone:ml-16">
        Collaborations
      </h2>
      <div className="hidden md:block rounded-full h-[500px] w-[500px] bg-gradient-to-br from-[#dce4ec] to-slate-100 absolute top-12 -left-24 z-0"></div>
      <div className="z-10 flex flex-col md:flex-row space-y-10 justify-center md:space-x-28 items-center text-center md:text-left mx-auto w-[84%] md:w-[100%] md:mx-0 ml-16">
        <div className="flex flex-col md:mr-14 ml-16">
          <h2 className="z-10 hidden md:block text-4xl md:text-5xl font-bold mb-16">
            Collaborations
          </h2>
          <div className="flex">
            <Image
              className="rotate-180 !mb-7 !border-0"
              src="/assets/collaboration2.png"
              height={250}
              width={250}
              objectFit="contain"
            />
            <Image
              className="!mr-14"
              src="/assets/collaboration1.png"
              height={280}
              width={280}
              objectFit="contain"
            />
          </div>
          <div className="flex">
            <Image
              className="rotate-90 !mr-5 !mb-10"
              src="/assets/collaboration2.png"
              height={250}
              width={250}
              objectFit="contain"
            />
            <Image
              className="!mr-16 !mb-3"
              src="/assets/collaboration2.png"
              height={250}
              width={250}
              objectFit="contain"
            />
          </div>
        </div>
        <div className="md:w-[45%] w-[120%] iPhone:ml-5 ml-8 md:ml-0">
          <h2 className="text-4xl md:text-5xl font-semibold mb-5 md:mb-10 text-center md:text-left">
            MADANGLES
          </h2>
          <p className="text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
            doloremque suscipit quia consectetur deserunt necessitatibus esse
            sit animi expedita accusantium culpa assumenda, dolorum blanditiis
            ad soluta cupiditate, earum magni fugit. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Doloribus doloremque suscipit quia
            consectetur deserunt necessitatibus esse sit animi expedita
            accusantium culpa assumenda, dolorum blanditiis ad soluta
            cupiditate, earum magni fugit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
