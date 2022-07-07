import React from "react";

const Container = (props) => {
  const mystyle = {
    width: "290px",
    margin: "12px -120% 50px",
    borderRadius: "10px",
  };
  const icons = {
    boxShadow:
      "rgba(216, 236, 251, 0.8) 59px 50px 120px -38px inset, rgba(216, 236, 251, 0.8) -1px 109px 30px -8px  ",
  };
  const inner_box = {
    backgroundColor: "#f2f2f2",
    padding: "20px  20px  20px  20px",
    borderRadius: "10px",
  };
  const button = {
    backgroundColor: "white",
    // boxShadow: " 0 -3em 3em rgba(0,0,0,0.1)",

    // boxShadow: "  0.3em 0.3em 1em rgba(1,1,1,0.1)",
    color: "#0099ff",
    // width: "120px",
    // height: "38px",
    padding: "4px 5px 0px 19px",

    margin: "18px 2px 0px 76px",
    borderRadius: "9px",
  };
  function handleOver4(e) {
    document.getElementById("border4").style.borderColor = "#1e90ff";
    document.getElementById("button4").style.background = "#1e90ff";
    document.getElementById("button4").style.color = "white";
  }
  function handleLeave4(e) {
    document.getElementById("border4").style.borderColor = "#ebebeb";
    document.getElementById("button4").style.background = "white";
    document.getElementById("button4").style.color = "#1e90ff";
  }

  return (
    <>
      <div
        style={mystyle}
        onMouseEnter={handleOver4}
        onMouseLeave={handleLeave4}
      >
        <div className=" bg-white rounded-l-3xl rounded-tr-3xl rounded-br-3xl pb-6 shadow-lg mt-[20px] ">
          <div
            className="icon px-10  rounded-full  mr-[70px]  ml-[70px] mb-[20px] pt-[30px] pb-[04px]  border hover:border-sky-500"
            id="border4"
            style={icons}
          >
            <img className="h-[120px] w-[160px] " src="/gokart_logo.png"></img>
          </div>
          <div className=" text-2xl font-semibold px-10 pb-7 ">
            Asquare Gokarting
          </div>
          <div className="text px-7 text-gray-400 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            rem odio, cum quam
          </div>
          <div
            className="  w-[120px] h-[43px] shadow-xl pl-[19px] pt-2   mt-[18px] mr-[20px] ml-[76px] rounded-lg  bg-white hover:bg-blue-500 text-blue-400 hover:text-white "
            id="button4"
          >
            <a className="font-semibold  " href="VIEW MORE">
              {" "}
              view more
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
