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
    <div className="mx-auto my-[100px] w-[86%] h-[100vh] relative">
      <h2 className="text-5xl flex flex-col font-bold space-y-2 ml-10 ">
        <span className="z-10">How we</span>
        <span className="z-10">
          Accept the <b className="text-blue-400 font-bold z-10">project</b>
        </span>
      </h2>
      <div className="rounded-full h-[500px] w-[500px] bg-gradient-to-r from-[#dce4ec] to-slate-100 absolute -top-10 -left-24 z-0"></div>
      <div className="rounded-full h-[200px] w-[200px] bg-gradient-to-l from-[#dce4ec] to-slate-100 absolute bottom-10 -right-10 z-0"></div>
      <div className="flex justify-between overflow-y-scroll scrollbar-hide">
        <div className="bg-white sticky left-0 top-[40px] overflow-hidden flex justify-center items-center shadow-lg h-[400px] w-[70%] rounded-[40px] mt-10">
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
