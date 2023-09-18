import React from "react";
import Background from "../Content/Background";
import "./about.css";
import { useState, useEffect } from "react";
import AniText from "../Components/TextAnimations/AniText";
import { ReactComponent as NextIcon } from "../assets/icons/Next.svg";
import { ReactComponent as ReactIcon } from "../assets/icons/React.svg";
import { ReactComponent as NodeIcon } from "../assets/icons/Node.svg";
import { ReactComponent as VercelIcon } from "../assets/icons/Vercel.svg";
import { ReactComponent as JavascriptIcon } from "../assets/icons/Javascript.svg";
import { ReactComponent as TypescriptIcon } from "../assets/icons/Typescript.svg";
import { ReactComponent as Gsap } from "../assets/icons/Gsap.svg";
import { ReactComponent as Cplusplus } from "../assets/icons/C++.svg";
import { ReactComponent as Css } from "../assets/icons/css.svg";
import { ReactComponent as Html } from "../assets/icons/html.svg";
import Timeline from "../Content/Timeline";

const About = () => {
  const [text, setText] = useState({ content: [], type: "" });
  useEffect(() => {
    setText({
      ...text,
      content: ["Skills"],
      type: "heading",
    });
  }, []);
  const skills = [
    {
      img: <Css width="38" height="38" />,
      text: "Css",
    },
    {
      img: <Html width="38" height="38" />,
      text: "HTML",
    },
    {
      img: <JavascriptIcon width="38" height="38" />,
      text: "JavaScript",
    },
    {
      img: <ReactIcon width="38" height="38" />,
      text: "react js",
    },
    {
      img: <NextIcon width="38" height="38" />,
      text: "Next js",
    },
    {
      img: <TypescriptIcon width="38" height="38" />,
      text: "typeScript",
    },
    {
      img: <Gsap width="38" height="38" />,
      text: "gsap",
    },
    {
      img: <Cplusplus width="38" height="38" />,
      text: "C++",
    },
  ];
  return (
    <div className="about-container">
      <div className="about-content">
        <AniText text={text} />
        <div className="skills-item">
          {skills.map((skill) => (
            <div className="skill-container">
              <div className="skill-img">{skill.img}</div>
              <div className="skill-text">{skill.text}</div>
            </div>
          ))}
        </div>
      </div>
      <Background />
      <Timeline/>
    </div>
  );
};

export default About;
