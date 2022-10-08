import Image from "next/image";
import React from "react";

const cardInfo = [
  {
    h: "lorem ipsum",
    p: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
    praesentium eligendi aperiam excepturi reiciendis possimus harum
    consequatur placeat alias quos, iusto aliquam fugit modi quisquam
    labore accusamus, tempora, ratione ad.`,
  },
  {
    h: "lorem ipsum",
    p: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
    praesentium eligendi aperiam excepturi reiciendis possimus harum
    consequatur placeat alias quos, iusto aliquam fugit modi quisquam
    labore accusamus, tempora, ratione ad.`,
  },
  {
    h: "lorem ipsum",
    p: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
    praesentium eligendi aperiam excepturi reiciendis possimus harum
    consequatur placeat alias quos, iusto aliquam fugit modi quisquam
    labore accusamus, tempora, ratione ad.`,
  },
];

const ProjectAcceptance = () => {
  return (
    <div className="mx-auto md:block flex flex-col md:space-y-0 space-y-16 mb-[150px] md:mb-0  md:w-[86%] md:h-[100vh] relative">
      <h2 className="text-4xl text-center md:text-left md:text-5xl flex flex-col font-bold space-y-2 iPhone:ml-6 ml-16 -mr-8 md:mr-0 md:ml-10 ">
        <span className="z-10">How we</span>
        <span className="z-10">
          Accept the <b className="text-blue-400 font-bold z-10">project</b>
        </span>
      </h2>

      <div className="md:hidden text-center ml-20">
        <Image
          src="/assets/group.png"
          height={250}
          width={300}
          objectFit="cover"
        />
      </div>

      <div className="ml-5 md:hidden overflow-x-scroll scrollbar-hide w-[450px]">
        <div className="overflow-visible min-w-min flex  flex-nowrap justify-start place-content-center items-center gap-[20px] p-0 flex-grow-0 flex-shrink-0 basis-auto relative">
          {cardInfo.map((info, i) => (
            <div
              key={i}
              className="overflow-hidden h-[180px] w-[350px] py-6 px-8 flex flex-col place-content-center gap-[10px] flex-grow-0 flex-shrink-0 rounded-2xl bg-white cursor-pointer"
            >
              <h3 className="text-xl font-bold">{info.h}</h3>
              <p className="text-xs text-slate-500">{info.p}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:flex justify-between overflow-y-scroll scrollbar-hide">
        <div className="bg-white sticky left-0 top-[40px] overflow-hidden flex justify-center items-center h-[400px] w-[70%]">
          <Image
            src="/assets/group.png"
            height={600}
            width={600}
            objectFit="contain"
          />
        </div>
        <div className="overflow-visible h-[400px] mt-11 min-w-min flex flex-col flex-nowrap justify-start place-content-center items-center gap-[40px] p-0 flex-grow-0 flex-shrink-0 basis-auto relative">
          {cardInfo.map((info, i) => (
            <div
              key={i}
              className="overflow-hidden h-[250px] w-[250px] py-8 px-6 will-change-transform flex flex-col flex-nowrap justify-start place-content-center gap-[20px] flex-grow-0 flex-shrink-0 basis-auto rounded-2xl bg-white cursor-pointer"
            >
              <h3 className="text-2xl font-bold">{info.h}</h3>
              <p className="text-xs text-slate-500">{info.p}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectAcceptance;
