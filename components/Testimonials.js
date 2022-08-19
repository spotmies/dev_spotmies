import Image from "next/image";
import React, { useEffect, useState } from "react";

const people = [
  {
    image: "/assets/gamer.png",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    name: "Souvik",
    designation: "Developer",
  },
  {
    image: "/assets/gamer.png",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    name: "Souvik",
    designation: "Developer",
  },
  {
    image: "/assets/gamer.png",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    name: "Souvik",
    designation: "Developer",
  },
  {
    image: "/assets/gamer.png",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    name: "Souvik",
    designation: "Developer",
  },
  {
    image: "/assets/gamer.png",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    name: "Souvik",
    designation: "Developer",
  },
  {
    image: "/assets/gamer.png",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    name: "Souvik",
    designation: "Developer",
  },
  {
    image: "/assets/gamer.png",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    name: "Souvik",
    designation: "Developer",
  },
  {
    image: "/assets/gamer.png",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    name: "Souvik",
    designation: "Developer",
  },
  {
    image: "/assets/gamer.png",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    name: "Souvik",
    designation: "Developer",
  },
  {
    image: "/assets/gamer.png",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    name: "Souvik",
    designation: "Developer",
  },
  {
    image: "/assets/gamer.png",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    name: "Souvik",
    designation: "Developer",
  },
  {
    image: "/assets/gamer.png",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    name: "Souvik",
    designation: "Developer",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = people.length - 1;
    } else if (newIndex >= people.length - 8) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (people.length > 6 && !paused) updateIndex(activeIndex + 1);
    }, 2000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div className="mx-auto my-[100px] w-[87%] h-[100vh]">
      <h1 className="text-4xl text-center font-bold mb-10">Testimonials</h1>
      <div className="mx-auto flex flex-col justify-center items-center bg-white overflow-hidden shadow-lg  w-[84%] h-[400px] rounded-[30px]">
        <div
          className="flex items-center justify-center space-x-20 overflow-hidden transition transform duration-1000 h-[100%] ease-linear"
          style={{ transform: `translateX(-${activeIndex * 10}%)` }}
        >
          {people.map((p) => (
            <div
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              className="cursor-pointer transition hover:scale-150 duration-500 ease-in-out group"
            >
              <div className="group-hover:border-[1.5px] border-blue-400 rounded-full  min-h-[80px] min-w-[85px]">
                <Image
                  className=""
                  src={p.image}
                  height={80}
                  width={85}
                  objectFit="contain"
                />
              </div>
              <div className=" hidden flex-col group-hover:flex mt-5">
                <p className="text-xs text-slate-400">{p.description}</p>
                <p className="mt-3 font-semibold ml-10 text-[10px]">
                  - {p.name}
                </p>
                <p className="text-[9px] ml-10 text-slate-400">
                  {p.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
