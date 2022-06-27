import React from "react";
const box = {
  borderRadius: "40px",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
};

const Testimonials = () => {
  return (
    <div className=" my-[100px] w-[87%] h-[900px]">
      <div className="font-semibold text-6xl pl-[50%] "> Testmonials</div>
      <div
        className="bg-white h-[450px] w-[80%] ml-[17%] rounded-lg mb-[60px] mt-[100px] pb-[60px]"
        style={box}
      >
        <div className="flex justify-evenly mt-[140px]">
          <div>
            <img
              src="/profile.png"
              className="h-[130px]  hover:h-[200px] hover:mt-[40px] ease-out duration-500 mt-[90%] "
            ></img>
          </div>
          <div>
            <img
              src="/profile.png"
              className="h-[130px]  hover:h-[200px] hover:mt-[40px] ease-out duration-500 mt-[90%]"
            ></img>
          </div>
          <div>
            <img
              src="/profile.png"
              className="h-[130px]  hover:h-[200px] hover:mt-[40px] ease-out  duration-500 mt-[90%]"
            ></img>
          </div>
          <div>
            <img
              src="/profile.png"
              className="h-[130px]  hover:h-[200px] hover:mt-[40px] ease-out duration-500 mt-[90%]"
            ></img>
          </div>
          <div className=" ">
            <img
              src="/profile.png"
              className="h-[130px] hover:h-[200px]  hover:mt-[20px] ease-out hover: duration-500 mt-[90%] "
            />
            <h>hy</h>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
