import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const people = [
  {
    image:
      "https://www.clipartmax.com/png/middle/257-2572603_user-man-social-avatar-profile-icon-man-avatar-in-circle.png",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    name: "Souvik1",
    designation: "Developer",
  },
  {
    image:
      "https://www.clipartmax.com/png/middle/257-2572603_user-man-social-avatar-profile-icon-man-avatar-in-circle.png",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    name: "Souvik1",
    designation: "Developer",
  },
  {
    image:
      "https://www.clipartmax.com/png/middle/257-2572603_user-man-social-avatar-profile-icon-man-avatar-in-circle.png",
    description: "lorem ipsum dolor sit amet, consectetur adip",
    name: "Souvik1",
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
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. A praesentium eligendi aperiam excepturi reiciendis possimus harum consequatur placeat alias quos, iusto aliquam fugit modi quisquam labore accusamus, tempora, ratione ad.",
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
  const [expandIndex, setexpandIndex] = useState(5);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = people.length - 1;
    } else if (newIndex >= people.length - 7) {
      newIndex = 0;
    }
    console.log(newIndex);
    setTimeout(() => {
      setexpandIndex(newIndex + 5);
    }, 300);

    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (people.length > 5 && !paused) updateIndex(activeIndex + 1);
    }, 2000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div className="mx-auto mt-[100px] w-[87%] h-[100vh] relative">
      <h1 className="text-4xl text-center font-bold mb-10">Testimonials</h1>
      <div className="rounded-full h-48 w-48 bg-gradient-to-r from-[#dce4ec] to-slate-100 absolute -top-20 -left-20 z-0"></div>
      <div className="rounded-full h-48 w-48 bg-gradient-to-l from-[#dce4ec] to-slate-100 absolute -bottom-10 -right-20 z-0"></div>
      <div className="mx-auto flex flex-col justify-center items-center bg-white overflow-hidden shadow-lg w-[84%] h-[400px] rounded-[30px]">
        <div
          className="flex items-center justify-center space-x-24 ml-[15rem] overflow-hidden transition transform duration-1000 h-[100%] ease-linear"
          style={{ transform: `translateX(-${activeIndex * 10}%)` }}
        >
          {people.map((p, index) => (
            <div
              onMouseEnter={() => {
                setPaused(true);
                setexpandIndex(index);
              }}
              onMouseLeave={() => setPaused(false)}
              className={`cursor-pointer transition hover:scale-125 hover:flex flex-col items-center duration-1000 ease-in-out group ${
                index === expandIndex ? "scale-125 flex" : ""
              } `}
            >
              <div
                className={`group-hover:border-[1.5px]  border-blue-400 rounded-full min-h-[80px] min-w-[85px] max-w-[85px] ${
                  index === expandIndex ? "border-[1.5px]" : ""
                } `}
              >
                <img
                  className=""
                  src={p.image}
                  height={80}
                  width={85}
                  objectFit="contain"
                />
              </div>
              <div
                className={`flex-col transition duration-800 ease-in-out group-hover:flex mt-5 w-[150px] 
                ${index === expandIndex ? "flex" : "hidden"} 
                `}
              >
                <p className="text-xs text-slate-400">{p.description}</p>
                <p className="mt-3 font-semibold ml-24 text-xs">- {p.name}</p>
                <p className="text-[10px] ml-24 text-slate-400">
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
