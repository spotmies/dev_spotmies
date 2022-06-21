import React from "react";

const Container = (props) => {
  // const renderImg = () => props.mySrc ? <img src={images(props.mySrc)} alt={props.myAlt} title={props.myTitle} /> : null
  //
  const mystyle = {
    width: "290px",
    margin: "12px -120% 50px",
    borderRadius: "10px",
  };
  const icons = {
    width: "60px",
    height: "50px",
    padding: "10px",
  };
  const inner_box = {
    backgroundColor: "#f2f2f2",
    padding: "20px  20px  20px  20px",
    borderRadius: "10px",
  };
  const button = {
    backgroundColor: "white",
    color: "blue",
    width: "90px",
    height: "40px",
    padding: "2px 5px 2px 5px",
    margin: "18px 2px 15px 30%",
    borderRadius: "4px",
  };
  const heading = {
    color: "black",
    fontWeight: "700",
    fontSize: "25px",
    margin: "0% 60px ",
  };

  return (
    <>
      <div style={mystyle}>
        <div style={inner_box}>
          <div className="icon" style={icons}>
            <img src="/spotmies_logo2.png"></img>
          </div>
          <div className="heading" style={heading}>
            Spotmies
          </div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            rem odio, cum quam maxime, veniam dolor tempore ut rerum magni sint,
            incidunt alias error autem voluptatibus natus excepturi eos! Cum.
          </div>
          <div className="bg-black-600" style={button}>
            <a href="VIEW MORE"> view more</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
