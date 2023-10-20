import logo from "./logo.svg";
import "./App.css";
import { ImageUrl } from "./StylingData";
import { useEffect, useState } from "react";
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import Slider from "react-slick"
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-grid-carousel";


function App() {
  const [hoverStates, setHoverStates] = useState(ImageUrl.map(() => true));

  function handleEnter(index) {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
  }

  function handleLeave(index) {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
  }
  
  return (
    <>
      <Carousel cols={4} rows={1} gap={10} loop>
     
        {ImageUrl.map((hoverState, index) => (
          <Carousel.Item>
            <div
              key={index}
              className={`parentDiv group`}
              style={
                hoverStates[index]
                  ? {
                      backgroundImage: `url(${hoverState.path})`,
                      color: `${hoverState.color}`,
                      width: '340px'
                    }
                  : {
                      backgroundImage: `${hoverState.gredient}`,
                      width: "800px"
                  
                    }
              }
              onMouseOver={() => handleEnter(index)}
              onMouseOut={() => handleLeave(index)}
            >
              <div className="childDiv">
                <div className="innerContentParent">
                  <div className="innerContentChild">
                    <div className="heading">
                      <p className="">Research Report</p>
                      <p>
                        {" "}
                        Leading with edge computing: How to reinvent with data &
                        AI{" "}
                      </p>
                    </div>
                    <div className="paragraph">
                      Edge enables the rapid processing of data close to its
                      source and plays a key role in evolving AI for the
                      enterprise. Our research reveals how companies across the
                      globe are using edge, and how they can scale its value.
                    </div>
                  </div>
                </div>

                <div className="twentyPercent transform translate-x-1 translate-y-[215px] group-hover:transform group-hover:translate-x-0 group-hover:-translate-y-1">
                  <div className="percentageAndContent">
                    <div className="twentyText">20%</div>
                    <div className="twentyContent">
                      of CxOs say they plan to increase their technology
                      spending in the year ahead
                    </div>
                  </div>

                  <div className="expand">Expand {" >"}</div>
                </div>
              </div>
            </div>
         </Carousel.Item>
        ))}
      </Carousel>
      
    </>
  );
}

export default App;
