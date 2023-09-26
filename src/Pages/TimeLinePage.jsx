import React, { useLayoutEffect, useState, useRef} from "react";
import Background from "../Content/Background";
import { gsap, Power2 } from "gsap";
import { ScrollTrigger } from "gsap/all";
import './timeline.css';
// import Timeline from "../Content/Timeline";
gsap.registerPlugin(ScrollTrigger);

function TimeLinePage() {
  const stopper2 = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      var Ani2 = gsap.timeline(
        {
          scrollTrigger: {
            trigger: ".contents2",
            start: "50%, 50%",
            end: "100%, 50%",
            scrub: 1,
            pin: ".Column2",
            markers:"visible",
            anticipatePin:1,
            onUpdate: (self) => {
              // Getting the animation's progress
              const progress = self.progress;
              if (progress >= 0.6 && stopper2.current) {
                gsap.set(stopper2.current, { display: "none" });
              }else{
                gsap.set(stopper2.current , {display: "block"})
              }
            },
          },
        },
        "open"
      );
      Ani2.to(
        ".slider12",
        {
          top: "-50%",
        },
        "open"
      ).to(
        ".slider22",
        {
          bottom: "-50%",
        },
        "open"
      );
    });
    return () => ctx.revert();
    }, []);
  return (
    <div className="Column2">
      <div className="contents2">
        <div className="slider12">
          <h1 className="top-h2">TIMELINE</h1>
          <Background/>
        </div>
        <div className="slider22">
          <h1 className="bottom-h2">TIMELINE</h1>
          <Background/>
        </div>
         <div ref = {stopper2} className="ani-delay2"></div>
         {/* <Timeline/> */}
      </div>
    </div>
  );
}

export default TimeLinePage;
