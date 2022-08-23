import Image from "next/image";
import React from "react";

const Collaboration = () => {
  return (
    <div className="mx-auto my-[200px] w-[84%] relative">
      <h2 className="z-10 text-5xl font-bold mb-16">Collaborations</h2>
      <div className="rounded-full h-[500px] w-[500px] bg-gradient-to-br from-[#dce4ec] to-slate-100 absolute top-12 -left-24 z-0"></div>
      <div className="z-10 flex justify-center items-center">
        <div className="flex flex-col mr-14">
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
        <div className="w-[45%]">
          <h2 className="text-5xl font-semibold mb-10">MADANGLES</h2>
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
