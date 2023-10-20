import logo from "./logo.svg";
import "./App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { useState } from "react";

function AppCopy() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const parentDivNormal = {
    width: "340px",
    height: "510px",
    color: "white",
    transformOrigin: "left",
    overflow: "hidden",
    transition: "all 200ms ease-in",
    backgroundColor: "red",
    backgroundImage:
      "url(https://dynamicmedia.accenture.com/is/image/accenture/Accenure-Computing-Edge-Hero-3840x2160:rad-card-full?ts=1689657861878&fit=constrain&dpr=off)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    margin: "25px",
    twentyPercent: {
      display: "flex",
      justifyContent: "space-between",
      paddingRight: "30px",
      paddingLeft: "10px",
      transition: "transform 350ms ease-in-out",
      transform: "translate(10px, 200px)",
    }
  }

  const parentDivHovered = {
    width: "800px",
    height: "510px",
    backgroundColor: "blue",
    color: "white",
    transformOrigin: "left",
    overflow: "hidden",
    transition: "all 200ms ease-in",
    backgroundImage: "linear-gradient(137deg, rgb(52 50 50) 62%, rgb(70 70 11 / 73%), #504c4c )",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    margin: "25px",
    twentyPercent: {
      display: "flex",
      justifyContent: "space-between",
      paddingRight: "30px",
      paddingLeft: "10px",
      transition: "transform 350ms ease-in-out",
      transform: "translate(10px, -30px)",
    }
  }

  const [isHovered, setHovered] = useState([false, false, false, false]);

  function handleMouseEnter(index) {
    const newHovered = [...isHovered];
    newHovered[index] = true;
    setHovered(newHovered);
  }

  function handleMouseLeave(index) {
    const newHovered = [...isHovered];
    newHovered[index] = false;
    setHovered(newHovered);
  }


  return (
    <>
    <Carousel responsive={responsive}>
    
    {isHovered?.map((hovered, index) => (
        <div
           key={index}
          className="parentDiv"
          style={hovered ? parentDivHovered : parentDivNormal}
          onMouseOver={() => handleMouseEnter(index)}
          onMouseOut={() => handleMouseLeave(index)}
        >
          <div className="childDiv">
            <div className="innerContentParent">
              <div className="innerContentChild">
                <div className="heading">
                  <p className="">Research Report</p>
                  <p>
                    {" "}
                    Leading with edge computing: How to reinvent with data & AI{" "}
                  </p>
                </div>
                <div className="paragraph">
                  Edge enables the rapid processing of data close to its source
                  and plays a key role in evolving AI for the enterprise. Our
                  research reveals how companies across the globe are using
                  edge, and how they can scale its value.
                </div>
              </div>
            </div>
            <div 
            className="twentyPercent"
            style={hovered ? parentDivHovered.twentyPercent : parentDivNormal.twentyPercent}
            >
              <div className="percentageAndContent">
                <div className="twentyText">20%</div>
                <div className="twentyContent">
                  of CxOs say they plan to increase their technology spending in
                  the year ahead
                </div>
              </div>

              <div className="expand">Expand {" >"}</div>
            </div>
          </div>
        </div>
        ))};  
        </Carousel>  
    </>
  );
}

export default AppCopy;
