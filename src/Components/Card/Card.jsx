import React from "react";
import "./card.css";
import { gsap, Power2 } from "gsap";

const Card = ({ p, v }) => {
  const handleMouseEnter = (event) => {
    const overlay = event.currentTarget.querySelector(".overlay");
    const itemStyle = event.currentTarget.querySelectorAll(".item-style");

    gsap.to(overlay, {
      opacity: 0.5,
      duration: 0.5,
      ease: Power2,
    });

    gsap.to(itemStyle, {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: Power2,
    });
  };

  const handleMouseLeave = (event) => {
    const overlay = event.currentTarget.querySelector(".overlay");
    const itemStyle = event.currentTarget.querySelectorAll(".item-style");

    gsap.to(overlay, {
      opacity: 1,
      duration: 0.5,
      ease: Power2,
    });

    gsap.to(itemStyle, {
      y: 100,
      opacity: 0,
      duration: 0.5,
      ease: Power2,
    });
  };
  
  const handleLinkClick = (link) => {
    window.open(link, "_blank");
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="card-content"
    >
      <div className="card-text">
        <div className="card-h">{p.title}</div>
        <button onClick={() => handleLinkClick(p.link)} className="card-btn">{p.date}</button>
        <div className="tech-use">
          {p.tech.map((item, index) => (
            <div className="tech-img-mask" key={index}>
              <div className="item-style">
                <div className="tech-img">{item.img}</div>
                <div className="tech-text">{item.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="video-content">
        <div className="overlay"></div>
        <video className="card-img" src={v} autoPlay loop muted></video>
      </div>
    </div>
  );
};

export default Card;
