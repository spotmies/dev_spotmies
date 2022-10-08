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
  const [info, setInfo] = useState(null);
  const infoRef = useRef(null);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = people.length - 1;
    } else if (newIndex >= people.length - 7) {
      newIndex = 0;
    }
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

  useEffect(() => {
    setInfo(infoRef.current);
  }, []);

  function showInfo(info) {
    if (info.classList.contains("hidden")) {
      info.classList.remove("hidden");
      info.classList.add("flex");
      setTimeout(function () {
        info.classList.remove("opacity-0");
      }, 20);
    } else {
      info.classList.add("opacity-0");
      info.classList.remove("flex");
      info.addEventListener(
        "transitionend",
        function (e) {
          info.classList.add("hidden");
        },
        {
          capture: false,
          once: true,
          passive: false,
        }
      );
    }
  }

  return (
      <div>
        <div className="mx-auto  md:w-[87%] my-8 mb-16">
      <h1 className="text-lg text-center mb-3 uppercase text-gray-400">
        Testimonials
      </h1>
      <h2 className="text-4xl text-center font-bold mb-8">What our clients say about us</h2>
      <div className="flex flex-row h-96 mt-16">
        <div className="w-1/3 mt-16">
          <img src="/assets/quotes.png" className="w-8 h-8 mb-4"/>
          <p className="text-2xl pb-8 text-gray-600">They are the best people. And this is the best platform to learn from distance.</p>
          <h3 className="font-bold pb-8">- Ben Foakes, <span className="text-gray-300">Student</span></h3>
          <a href="" className="px-4 py-2 mr-4 rounded-full outline outline-gray-700">&#60;</a>
          <a href="" className="px-4 py-2 rounded-full bg-blue-500 outline outline-blue-500 text-white">&#62;</a>
        </div>
        <div className="grow justify-center items-center flex relative ml-16">
          <div className="mx-auto">
            <img className="w-28 h-28 mx-auto translate-x-36 -translate-y-8" src={people[4]["image"]}/>
            <img className="w-24 h-24 mx-auto translate-y-16" src={people[4]["image"]}/>
            <img className="w-20 h-20 mx-auto translate-x-48 translate-y-16" src={people[4]["image"]}/>
          </div>
          <img className="w-48 h-48 mx-auto" src={people[4]["image"]}/>
          <div className="mx-auto">
            <img className="w-32 h-32 mx-auto -translate-x-36 -translate-y-20" src={people[4]["image"]}/>
            <img className="w-24 h-24 mx-auto -translate-x-28 translate-y-20" src={people[4]["image"]}/>
          </div>
        </div>
      </div>

    </div>
      <div className="bg-gray-100 h-96 mx-auto"></div>

        <div className="mx-auto  md:w-[87%] my-8 mb-16 pb-12">
          <h1 className="text-lg text-center mb-3 uppercase text-gray-400">
            Testimonials
          </h1>
          <h2 className="text-4xl text-center font-bold mb-8">What our clients say about us</h2>
          <div className="flex h-56 mt-12">

            <div className="justify-center items-center flex mx-auto">
              <img className="w-32 h-32 mx-8" src={people[4]["image"]}/>
              <img className="w-4- h-40 mx-8" src={people[4]["image"]}/>
              <img className="w-48 h-48 mx-8" src={people[4]["image"]}/>
              <img className="w-40 h-40 mx-8" src={people[4]["image"]}/>
              <img className="w-32 h-32 mx-8" src={people[4]["image"]}/>
            </div>
          </div>
          <div className="mt-16 mx-auto">
            <img src="/assets/quotes.png" className="w-8 h-8 mb-4"/>
            <p className="text-2xl pb-8 text-gray-600">They are the best people. And this is the best platform to learn from distance.</p>

            <h3 className="font-bold pb-8">- Ben Foakes, <span className="text-gray-300">Student</span></h3>
            <a href="" className="px-4 py-2 mr-4 rounded-full outline outline-gray-700">&#60;</a>
            <a href="" className="px-4 py-2 rounded-full bg-blue-500 outline outline-blue-500 text-white">&#62;</a>
          </div>
        </div>
 </div>
  );
};

export default Testimonials;
