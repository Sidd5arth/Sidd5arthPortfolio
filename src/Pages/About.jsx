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
  const developmenrtSkills = [
    {
      img: <Css className="svgIcon" />,
      text: "Css",
    },
    {
      img: <Html className="svgIcon" />,
      text: "HTML",
    },
    {
      img: <JavascriptIcon className="svgIcon" />,
      text: "JavaScript",
    },
    {
      img: <ReactIcon className="svgIcon" />,
      text: "react js",
    },
    {
      img: <NextIcon className="svgIcon" />,
      text: "Next js",
    },
    {
      img: <TypescriptIcon className="svgIcon" />,
      text: "typeScript",
    },
    {
      img: <Gsap className="svgIcon" />,
      text: "Git",
    },
    {
      img: <Cplusplus className="svgIcon" />,
      text: "C++",
    },
  ];
  const designSkills = [
    {
      img: <Css className="svgIcon" />,
      text: "Figma",
    },
    {
      img: <Html className="svgIcon" />,
      text: "After Effects",
    },
    {
      img: <JavascriptIcon className="svgIcon" />,
      text: "Blender 3d",
    },
    {
      img: <ReactIcon className="svgIcon" />,
      text: "Adobe Illustrator",
    },
  ];
  return (
    <div className="about-container">
      <div className="about-content">
        <AniText text={text} />
        <div className="skill-all">
          <div className="skill-set">
            <h3>Development</h3>
            <div className="skills-item">
              {developmenrtSkills.map((skill) => (
                <div className="skill-container">
                  <div className="skill-img">{skill.img}</div>
                  <div className="skill-text">{skill.text}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="skill-set">
            <h3>Design</h3>
            <div className="skills-item">
              {designSkills.map((skill) => (
                <div className="skill-container">
                  <div className="skill-img">{skill.img}</div>
                  <div className="skill-text">{skill.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Background />
      <Timeline />
    </div>
  );
};

export default About;
