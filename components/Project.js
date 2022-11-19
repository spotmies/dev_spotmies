import React, { useState } from "react";
import Image from "next/image";
import MoreProjectsWindow from "./more_projects";

const cardInfo1 = [
  {
    name: "Acchedya",
    image: "/assets/acchedya_bar_logo.png",
    description: `Blockchain based background verification platform`,
    link: "https://acchedya.spotmies.com",
  },
  {
    name: "ASquare GoKarting",
    image: "/assets/gokart_logo.png",
    description: `Adventurous theme park for youngsters.`,
    link: "https://play.google.com/store/apps/details?id=com.asquaregokarting",
  },
];

const cardInfo2 = [
  {
    name: "Indie Skull",
    image: "/assets/indies_bar_logo.png",
    description: `NFT project for Zooples`,
    link: "https://indieskullsyndicate.xyz",
  },
  {
    name: "Screech",
    image: "/assets/screech_bar_logo.png",
    description: `Screech NFT project for creators`,
    link: "https://screechnft.xyz",
  },
];

const Project = ({ projectRef }) => {
  const [showMoreProjects, setShowMoreProjects] = useState(false);

  return (
    <div className="relative md:px-16 ml-6">
      {showMoreProjects && (
        <MoreProjectsWindow onClose={() => setShowMoreProjects(false)} />
      )}
      <div
        ref={projectRef}
        className="justify-between flex md:mb-32 w-[76%] md:w-[90%] md:h-[80vh]"
      >
        <div className="flex md:block flex-col items-center space-y-10">
          <h2 className="text-5xl font-bold mt-[120px] relative flex gap-3 mb-6 md:mb-0 mr-12 md:mr-44">
            <div className="rounded-full h-16 w-16 bg-gradient-to-br from-[#cfe1fd] to-slate-100 absolute -top-10 -left-10 z-0"></div>
            <p className="z-10">Our</p>{" "}
            <span className="text-blue-400">Projects</span>
          </h2>
          <div className="md:hidden flex flex-col space-y-10 mt-9 mr-5 relative">
            <div className="hidden md:block rounded-full h-[500px] w-[500px] bg-gradient-to-br from-[#cfe1fd] to-slate-100 absolute -top-10 -right-16 z-0"></div>
            <div className="flex space-x-10 z-10">
              {cardInfo1.map((card) => (
                <div
                  className={`max-w-sm px-5 rounded-2xl overflow-hidden shadow-lg flex flex-col items-center bg-gradient-to-t from-blue-50 to-white group ${
                    card === cardInfo1[1] ? "-mt-10" : ""
                  }`}
                >
                  <div
                    className={`rounded-full group-hover:border  border-blue-300  p-2 from-blue-100 ${
                      card === cardInfo1[1]
                        ? " bg-gradient-to-b"
                        : "bg-gradient-to-l"
                    }`}
                  >
                    <Image
                      className=""
                      src={card.image}
                      height={45}
                      width={50}
                      objectFit="cover"
                    />
                  </div>

                  <div
                    className={`font-semibold mt-2 text-center ${
                      card === cardInfo1[1] ? "text-md" : "text-xl"
                    }`}
                  >
                    {card.name}
                  </div>
                  <p className="text-gray-500 text-center text-xs mt-5 flex-1">
                    {card.description}
                  </p>

                  <button
                    onClick={() => window.open(card.link, "_blank")}
                    // onClick={() => alert("Coming Soon")}
                    className="mt-3 mb-4 group-hover:bg-blue-400 group-hover:text-white bg-white text-xs font-semibold text-blue-400  py-[5px] px-[22px] rounded-lg"
                  >
                    View More
                  </button>
                </div>
              ))}
            </div>

            <div className="flex space-x-10 z-10">
              {cardInfo2.map((card) => (
                <div
                  className={`cursor-pointer max-w-sm py-5 px-5 rounded-xl overflow-hidden shadow-lg flex flex-col items-center bg-gradient-to-l from-blue-50 to-white group ${
                    card === cardInfo2[1] ? "-mt-6" : ""
                  }`}
                >
                  <div
                    className={`rounded-full group-hover:border border-blue-300 p-2 from-blue-100 ${
                      card === cardInfo2[0]
                        ? "bg-gradient-to-b"
                        : "bg-gradient-to-l"
                    }`}
                  >
                    <Image
                      className=""
                      src={card.image}
                      height={45}
                      width={50}
                      objectFit="cover"
                    />
                  </div>

                  <div
                    className={`font-semibold mt-2 ${
                      card === cardInfo2[0] ? "text-md" : "text-xl"
                    }`}
                  >
                    {card.name}
                  </div>
                  <p className="text-gray-500 text-center text-xs mt-5 flex-1">
                    {card.description}
                  </p>
                  <button className="mt-3 mb-2 group-hover:bg-blue-400 group-hover:text-white bg-white text-xs font-semibold text-blue-400  py-[5px] px-[22px] rounded-lg">
                    View More
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowMoreProjects(true)}
            className="md:hidden mt-10 mb-5 hover:bg-blue-400 hover:text-white text-blue-400 border-[1.5px] border-blue-400 py-[6px] px-[32px] rounded-3xl mr-72"
          >
            View all
          </button>

          <p className="md:w-[75%] mt-[60px] text-gray-500 text-lg mr-3 md:mr-0">
            The Projects that stays special to us for teaching every new thing
            during each of it's phases. Our immense gratitude for the clients
            who trusted us and handing us the responsibility of their
            prestigious projects. We hope your projects joins the list.
          </p>
          <button
            onClick={() => setShowMoreProjects(true)}
            className="hidden md:block mt-10 mb-5 hover:bg-blue-400 hover:text-white text-blue-400 border-[1.5px] border-blue-400 py-[6px] px-[32px] rounded-3xl"
          >
            View all
          </button>
        </div>

        <div className="hidden md:flex flex-col space-y-10 mt-9 mr-5 relative">
          <div className="rounded-full h-[500px] w-[500px] bg-gradient-to-br from-[#cfe1fd] to-slate-100 absolute -top-10 -right-16 z-0"></div>
          <div className="flex space-x-10 z-10">
            {cardInfo1.map((card) => (
              <div
                className={` transition-all hover:-translate-y-2 cursor-pointer max-w-sm py-5 px-5 w-52   rounded-2xl overflow-hidden shadow-lg flex flex-col  items-center bg-gradient-to-t from-blue-50 to-white group ${
                  card === cardInfo1[1] ? "-mt-10" : ""
                } `}
              >
                <div
                  className={`transition-all rounded-full  p-2 from-blue-100 group-hover:border  border-blue-300 ${
                    card === cardInfo1[1]
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
                  className={`font-semibold mt-2 text-center ${
                    card === cardInfo1[1] ? "text-lg" : "text-2xl"
                  }`}
                >
                  {card.name}
                </div>
                <p className="text-gray-500 text-center text-xs mt-5 flex-1">
                  {card.description}
                </p>

                <button
                  onClick={() => window.open(card.link, "_blank")}
                  className="mt-3 mb-2 group-hover:bg-blue-400 group-hover:text-white bg-white text-xs font-semibold text-blue-400  py-[5px] px-[22px] rounded-lg"
                >
                  View More
                </button>
              </div>
            ))}
          </div>

          <div className="flex space-x-10 z-10">
            {cardInfo2.map((card) => (
              <div
                className={` transition-all hover:-translate-y-2 cursor-pointer max-w-sm py-5 px-5 w-52  rounded-xl overflow-hidden shadow-lg flex flex-col items-center bg-gradient-to-l from-blue-50 to-white group ${
                  card === cardInfo2[1] ? "-mt-6" : ""
                }`}
              >
                <div
                  className={`transition-all rounded-full  p-2 from-blue-100 group-hover:border border-blue-300 ${
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
                <button
                  onClick={() => window.open(card.link, "_blank")}
                  className="mt-3 mb-2 group-hover:bg-blue-400 group-hover:text-white bg-white text-xs font-semibold text-blue-400  py-[5px] px-[22px] rounded-lg"
                >
                  View More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
