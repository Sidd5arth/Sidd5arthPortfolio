import React from 'react'
import './navbar.css'
import { useEffect, useState } from 'react';

const Navbar = ({navis}) => {
  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const  updateScreenWidth = () =>{
    setScreenWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', updateScreenWidth);
    return () => {
      window.addEventListener('resize', updateScreenWidth)
    }
  }, [window.innerWidth])
  return (
    <div className={`nav-bar ${navis && screenWidth < 700 ? "nav-hide" : "nav-show"}`}>
        <div className="logo nav-icon"></div>
        <ul className="socials">
          <div className="Leetcode-img nav-icon" onClick={()=>handleLinkClick("https://leetcode.com/NTMR/")}></div>
          <div className="Github-img nav-icon" onClick={()=>handleLinkClick("https://github.com/Sidd5arth")}></div>
          <div className="Linkedin-img nav-icon" onClick={()=>handleLinkClick("https://www.linkedin.com/in/sidd5arth/")}></div>
          <div className="Behance-img nav-icon" onClick={()=>handleLinkClick("https://www.behance.net/siddharsinghk")}></div>
        </ul>
    </div>
  )
}

export default Navbar
