import React, { useLayoutEffect, useState, useRef} from "react";
import "./mainpage.css";
import Work from "../Content/Work";
import Background from "../Content/Background";
import "./workPage.css";
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const WorkPage = ({setNavis}) => {
  const stopper = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      var Ani = gsap.timeline(
        {
          scrollTrigger: {
            trigger: ".contents",
            start: "50%, 50%",
            end: "100%, 50%",
            scrub: 1,
            pin: ".Column",
            anticipatePin:1,
            onUpdate: (self) => {
              // Getting the animation's progress
              const progress = self.progress;
              if(progress > 0.05 && progress <= 0.98){
                setNavis(true);
              }else{
                setNavis(false);
              }
              if (progress >= 0.6 && stopper.current) {
                gsap.set(stopper.current, { display: "none" });
              }else{
                gsap.set(stopper.current , {display: "block"})
              }
            },
          },
        },
        "open"
      );
      Ani.to(
        ".slider1",
        {
          top: "-50%",
        },
        "open"
      ).to(
        ".slider2",
        {
          bottom: "-50%",
        },
        "open"
      );
    });
    return () => ctx.revert();
    }, []);
  return (
    <div className="Column">
      <div className="contents">
        <div className="slider1">
          <h1 className="top-h">WORK</h1>
          <Background/>
        </div>
        <div className="slider2">
          <h1 className="bottom-h">WORK</h1>
          <Background/>
        </div>
         <div ref = {stopper} className="ani-delay"></div>
         <Work/>
      </div>
    </div>
  );
};

export default WorkPage;
