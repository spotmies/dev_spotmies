import React from "react";
import Image from "next/image";

const cardInfo1 = [
  {
    name: "Spotmies",
    image: "/assets/spotmies_logo1.png",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. `,
  },
  {
    name: "Asquare GoKarting",
    image: "/assets/gokart_logo.png",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. `,
  },
];

const cardInfo2 = [
  {
    name: "Asquare GoKarting",
    image: "/assets/gokart_logo.png",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. `,
  },
  {
    name: "Spotmies",
    image: "/assets/spotmies_logo1.png",
    description: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. `,
  },
];

const Project = ({ projectRef }) => {
  return (
    <div
      ref={projectRef}
      className="mx-auto justify-between flex mb-32 w-[84%] h-[100vh]"
    >
      <div>
        <h2 className="text-5xl font-bold mt-[120px] relative flex gap-3">
          <div className="rounded-full h-16 w-16 bg-gradient-to-br from-[#dce4ec] to-slate-100 absolute -top-10 -left-10 z-0"></div>
          <p className="z-10">Our</p>{" "}
          <span className="text-blue-400">Projects</span>
        </h2>
        <p className="w-[75%] mt-[60px] text-gray-500 text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti rem
          odio, cum quam maxime, veniam dolor tempore ut rerum magni sint,
          incidunt alias error autem voluptatibus natus excepturi eos! Cum.
        </p>
        <button className="mt-10 mb-5 hover:bg-blue-400 hover:text-white text-blue-400 border-[1.5px] border-blue-400 py-[6px] px-[32px] rounded-3xl">
          View all
        </button>
      </div>
      <div className="flex flex-col space-y-10 mt-9 mr-5 relative">
        <div className="rounded-full h-[500px] w-[500px] bg-gradient-to-br from-[#dce4ec] to-slate-100 absolute -top-10 -right-16 z-0"></div>
        <div className="flex space-x-10 z-10">
          {cardInfo1.map((card) => (
            <div
              className={`cursor-pointer max-w-sm py-5 px-5 w-52 h-60  rounded-2xl overflow-hidden shadow-lg flex flex-col  items-center bg-gradient-to-t from-blue-50 to-white ${
                card === cardInfo1[1] ? "-mt-10" : ""
              }`}
            >
              <div
                className={`rounded-full  p-2 from-slate-200 ${
                  card === cardInfo1[1]
                    ? "border  border-blue-300 bg-gradient-to-b"
                    : "bg-gradient-to-l"
                }`}
              >
                <Image
                  className=""
                  src={card.image}
                  height={50}
                  width={55}
                  objectFit="cover"
                />
              </div>

              <div
                className={`font-semibold mt-2 ${
                  card === cardInfo1[1] ? "text-lg" : "text-2xl"
                }`}
              >
                {card.name}
              </div>
              <p className="text-gray-500 text-center text-xs mt-5 flex-1">
                {card.description}
              </p>
              {card === cardInfo1[1] ? (
                <button className="mt-3 mb-2 bg-blue-400 text-xs font-semibold text-white  py-[5px] px-[22px] rounded-lg">
                  View More
                </button>
              ) : (
                <button className="mt-3 mb-2 hover:bg-blue-400 hover:text-white bg-white text-xs font-semibold text-blue-400  py-[5px] px-[22px] rounded-lg">
                  View More
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="flex space-x-10 z-10">
          {cardInfo2.map((card) => (
            <div
              className={`cursor-pointer max-w-sm py-5 px-5 w-52 h-60  rounded-xl overflow-hidden shadow-lg flex flex-col items-center bg-gradient-to-l from-blue-50 to-white ${
                card === cardInfo2[1] ? "-mt-6" : ""
              }`}
            >
              <div
                className={`rounded-full  p-2 from-slate-200 ${
                  card === cardInfo2[0]
                    ? "bg-gradient-to-b"
                    : "bg-gradient-to-l"
                }`}
              >
                <Image
                  className=""
                  src={card.image}
                  height={50}
                  width={55}
                  objectFit="cover"
                />
              </div>

              <div
                className={`font-semibold mt-2 ${
                  card === cardInfo2[0] ? "text-lg" : "text-2xl"
                }`}
              >
                {card.name}
              </div>
              <p className="text-gray-500 text-center text-xs mt-5 flex-1">
                {card.description}
              </p>
              <button className="mt-3 mb-2 bg-blue-400 text-xs font-semibold text-white  py-[5px] px-[22px] rounded-lg">
                View More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
