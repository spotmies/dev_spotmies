import React from "react";

const Intro = () => {
  return (
    <div className="mx-auto justify-between flex my-[100px] w-[87%]">
      <div>
        <h2 className="text-5xl flex flex-col font-bold space-y-2">
          <span>Lorem ipsum</span>
          <span className="text-blue-400">dolor sit amet</span>
          <span>consectetur</span>
        </h2>
        <p className="w-[45%] mt-10 text-gray-500 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
          omnis consequuntur Mollitia, omnis consequuntur
        </p>
        <p className="my-5">Button</p>
      </div>
      <div>Photo</div>
    </div>
  );
};

export default Intro;
