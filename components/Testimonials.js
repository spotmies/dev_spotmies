import React from "react";
const box = {
  borderRadius: "40px",
  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
};
const hidden = {
  display: "none",
};
function handleMouseEnter1(e) {
  var x = document.getElementById("text1");

  x.style.display = "block";
}
function handleMouseLeave1(e) {
  var x = document.getElementById("text1");

  x.style.display = "none";
}
function handleMouseEnter2(e) {
  var y = document.getElementById("text2");

  y.style.display = "block";
}
function handleMouseLeave2(e) {
  var y = document.getElementById("text2");

  y.style.display = "none";
}
function handleMouseEnter3(e) {
  var z = document.getElementById("text3");

  z.style.display = "block";
}
function handleMouseLeave3(e) {
  var z = document.getElementById("text3");

  z.style.display = "none";
}
function handleMouseEnter4(e) {
  var w = document.getElementById("text4");

  w.style.display = "block";
}
function handleMouseLeave4(e) {
  var w = document.getElementById("text4");

  w.style.display = "none";
}
function handleMouseEnter5(e) {
  var v = document.getElementById("text5");

  v.style.display = "block";
}
function handleMouseLeave5(e) {
  var v = document.getElementById("text5");

  v.style.display = "none";
}
const Testimonials = () => {
  return (
    <div className=" my-[100px] w-[87%] h-[900px]">
      <div className="font-semibold text-6xl pl-[50%] "> Testmonials</div>
      <div
        className="bg-white h-[450px] w-[80%] ml-[17%]  rounded-lg mb-[60px] mt-[100px] pb-[60px]"
        style={box}
      >
        <div className="flex justify-evenly mt-[140px]">
          <div>
            <img
              src="/profile.png"
              className="h-[130px]  rounded-full border-4  hover:h-[200px] hover:mt-[40px] ease-out duration-1000 mt-[90%] hover:border-blue-500 "
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
            ></img>

            <div className=" hidden w-[270px] text-gray-400" id="text1">
              <div className="bg-blue-500 ml-[85px] mt-[30px] mb-[20px] rounded-full w-[16px] h-[16px]">
                .
              </div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Mollitia, omnis consequuntur Mollitia,
            </div>
          </div>
          <div>
            <img
              src="/profile.png"
              className="h-[130px]  rounded-full border-4  hover:h-[200px] hover:mt-[40px] ease-out duration-1000 mt-[90%] hover:border-blue-500 "
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            ></img>
            <div className=" hidden  w-[270px] text-gray-400 " id="text2">
              <div className="bg-blue-500 ml-[85px] mt-[30px] mb-[20px] rounded-full w-[16px] h-[16px]">
                .
              </div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Mollitia, omnis consequuntur Mollitia,{" "}
            </div>
          </div>
          <div>
            <img
              src="/profile.png"
              className="h-[130px]  rounded-full border-4  hover:h-[200px] hover:mt-[40px] ease-out duration-1000 mt-[90%] hover:border-blue-500 "
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
            ></img>
            <div className=" hidden  w-[270px] text-gray-400" id="text3">
              <div className="bg-blue-500 ml-[85px] mt-[30px] mb-[20px] rounded-full w-[16px] h-[16px]">
                .
              </div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Mollitia, omnis consequuntur Mollitia,{" "}
            </div>
          </div>
          <div>
            <img
              src="/profile.png"
              className="h-[130px]  rounded-full border-4  hover:h-[200px] hover:mt-[40px] ease-out duration-1000 mt-[90%] hover:border-blue-500 "
              onMouseEnter={handleMouseEnter4}
              onMouseLeave={handleMouseLeave4}
            ></img>
            <div className=" hidden  w-[270px] text-gray-400" id="text4">
              <div className="bg-blue-500 ml-[85px] mt-[30px] mb-[20px] rounded-full w-[16px] h-[16px]">
                .
              </div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Mollitia, omnis consequuntur Mollitia,{" "}
            </div>
          </div>
          <div className=" ">
            <img
              src="/profile.png"
              className="h-[130px]  rounded-full border-4  hover:h-[200px] hover:mt-[40px] ease-out  duration-1000 mt-[90%] hover:border-blue-500 "
              onMouseEnter={handleMouseEnter5}
              onMouseLeave={handleMouseLeave5}
            />
            <div className=" hidden  w-[270px] text-gray-400 " id="text5">
              <div className="bg-blue-500 ml-[85px] mt-[30px] mb-[20px] rounded-full w-[16px] h-[16px]">
                .
              </div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Mollitia, omnis consequuntur Mollitia,{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
