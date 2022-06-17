import React from "react";

const Project = ({ projectRef }) => {
  return (
    <div
      ref={projectRef}
      className="mx-auto justify-between flex my-[100px] w-[87%]"
    >
      <div>
        <h2 className="text-5xl font-bold mt-[120px]">
          Our <span className="text-blue-400">Projects</span>
        </h2>
        <p className="w-[45%] mt-[60px] text-gray-500 text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti rem
          odio, cum quam maxime, veniam dolor tempore ut rerum magni sint,
          incidunt alias error autem voluptatibus natus excepturi eos! Cum.
        </p>
        <p className="my-5">Button</p>
      </div>
      <div>Cards</div>
    </div>
  );
};

export default Project;
