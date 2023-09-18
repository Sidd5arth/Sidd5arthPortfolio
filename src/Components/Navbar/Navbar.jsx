import React from 'react'
import './navbar.css'

const Navbar = () => {
  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="nav-bar">
        <div className='logo nav-icon'></div>
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
