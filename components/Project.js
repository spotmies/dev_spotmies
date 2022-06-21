import React from "react";
import Container from "./Container";
const boxes = {
  display: "flex",
};
const box1 = {
  flexDirection: "row",

  margin: "60px 60px ",
};
const box2 = {
  flexDirection: "row",
  marginRight: "-190px",
};

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
        <div className="mt-7">
          <a
            href="#"
            className="my-5 border-blue-300 border-solid border-2 rounded-full p-2 pr-10 pl-10 text-sky-600  "
          >
            View All
          </a>
        </div>
      </div>
      <div style={boxes}>
        <div style={box1}>
          <Container></Container>
          <Container></Container>
        </div>
        <div style={box2}>
          <Container></Container>
          <Container></Container>
        </div>
      </div>
    </div>
  );
};

export default Project;
