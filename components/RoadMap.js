import React, { useRef } from "react";

const projects = [
  {
    title: "Project Title",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit fuga
    in consequatur? Officia, esse, dicta aliquam voluptatum placeat quis
    iste totam commodi porro`,
  },
  {
    title: "Project Title",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit fuga
    in consequatur? Officia, esse, dicta aliquam voluptatum placeat quis
    iste totam commodi porro`,
  },
  {
    title: "Project Title",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit fuga
    in consequatur? Officia, esse, dicta aliquam voluptatum placeat quis
    iste totam commodi porro`,
  },
  {
    title: "Project Title",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit fuga
    in consequatur? Officia, esse, dicta aliquam voluptatum placeat quis
    iste totam commodi porro`,
  },
  {
    title: "Project Title",
    description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit fuga
    in consequatur? Officia, esse, dicta aliquam voluptatum placeat quis
    iste totam commodi porro`,
  },
];

const RoadMap = ({ roadmapRef }) => {
  const moreRef = useRef(null);
  const buttonRef = useRef(null);
  const arrowRef = useRef(null);

  const toggle = () => {
    const more = moreRef.current;
    const button = buttonRef.current;
    const arrow = arrowRef.current;

    if (more.classList.contains("hidden")) {
      more.classList.remove("hidden");
      button.innerHTML = "View less";
      arrow.innerHTML = "^";
    } else {
      more.classList.add("hidden");
      button.innerHTML = "View more";
      arrow.innerHTML = "˅";
    }
  };

  return (
      <div
          ref={roadmapRef}
          className="mx-auto md:hidden mb-[200px] flex flex-col justify-center items-center md:my-[100px] md:w-[87%] md:h-[100vh]"
      >
        <h2 className="text-3xl text-center font-bold relative flex gap-2 mb-8 md:mb-0 ml-20">
          <p className="text-blue-400">Road</p> <span className="">Map</span>
        </h2>
        <ol className="border-l-2 border-blue-400 ml-24">
          {projects.map((project, i) => (
              // eslint-disable-next-line react/jsx-key
              <li
                  ref={moreRef}
                  className={`mb-8 ml-4 relative ${i >= 4 ? "hidden" : ""}`}
              >
                <div className="absolute w-7 h-7 bg-white rounded-full -left-14 -top-2 border flex justify-center items-center border-blue-400 text-xs font-bold">
                  0{i + 1}
                </div>
                <div className="absolute w-2.5 h-2.5 bg-white rounded-full -left-[1.4rem] border border-blue-400"></div>

                <h3 className="text-lg  font-semibold ">{project.title}</h3>
                <p className="text-xs font-normal text-gray-500">
                  {project.description}
                </p>
              </li>
          ))}
          <div
              onClick={toggle}
              className="ml-5 flex items-center gap-2 text-lg font-semibold text-blue-500"
          >
            <p ref={buttonRef}>View more</p>{" "}
            <p
                ref={arrowRef}
                className="border border-blue-500 rounded-full h-4 w-4 flex justify-center items-center mt-1"
            >
              ˅
            </p>
          </div>
        </ol>
      </div>
  );
};

export default RoadMap;