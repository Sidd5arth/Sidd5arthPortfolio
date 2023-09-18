import React from 'react';
import './work.css';
import Card from '../Components/Card/Card';
import gsap from 'gsap';
import verceli from "../assets/logo/ssk_logo.png"
import v1 from "../assets/videos/v1.mp4"
import v2 from "../assets/videos/v2.mp4"
import v3 from "../assets/videos/v3.mp4"
import { ReactComponent as NextIcon } from "../assets/icons/Next.svg";
import { ReactComponent as ReactIcon } from "../assets/icons/React.svg";
import { ReactComponent as NodeIcon } from "../assets/icons/Node.svg";
import { ReactComponent as VercelIcon } from "../assets/icons/Vercel.svg";
import { ReactComponent as JavascriptIcon } from "../assets/icons/Javascript.svg";
import { ReactComponent as TypescriptIcon } from "../assets/icons/Typescript.svg";
import { ReactComponent as ThreeJsIcon } from "../assets/icons/Three.svg";
import { ReactComponent as ViteIcon } from "../assets/icons/Vite.svg";
// import {verceli, reacti, tsi, jsi } from "../assets/logo/ssk_logo.png"

const Work = () => {

  let p1 = {
    id:0,
    title: "AIR HOMES",
     date: "Live application -> ",
     link:"https://rent-housing-app.vercel.app/",
     tech: [
      {name:"next.js", img: <NextIcon width ="32" height="32"/>},
      {name:"react.js", img:<ReactIcon width ="32" height="32"/>},
      {name:"node.js", img: <NodeIcon width ="32" height="32"/>},
      {name:"vercel", img: <VercelIcon width ="32" height="32"/>},
      {name:"typescript", img: <TypescriptIcon width ="32" height="32"/>},
    ],
     video: {v1}
  }
  let p2 = {
    id:1,
    title: "Get SEO Data",
    date: "Live application -> ",
    link:"https://get-se-ostats.vercel.app/",
     tech: [
      {name:"react.js", img:<ReactIcon width ="32" height="32"/>},
      {name:"node.js", img: <NodeIcon width ="32" height="32"/>},
      {name:"vercel", img: <VercelIcon width ="32" height="32"/>},
    ],
  }
  let p3 = {
    id:2,
    date: "Live application -> ",
    title: "Product customizer",
    link:"https://ai-product-customizer.vercel.app/",
     tech: [
      {name:"react.js", img:<ReactIcon width ="32" height="32"/>},
      {name:"node.js", img: <NodeIcon width ="32" height="32"/>},
      {name:"vercel", img: <VercelIcon width ="32" height="32"/>},
      {name:"Three.js", img: <ThreeJsIcon width ="32" height="32"/>},
      {name:"Vite.js", img: <ViteIcon width ="32" height="32"/>},
    ],
  }
  let p4 = {
    id:3,
    title: "Air Canvas",
     date: "12/12/12",
     tech: ["react", "varcel", "nextjs", "mongodb"]
  }
  
  return (
    <div className='bck'>
          <div className='card-grid'>
      <p style={{color:"white", fontSize:"2em", textAlign:"center", fontFamily:"Argentum"}}>Scroll in here to see projects</p>
            <Card
            p={p1}
            v={v1}
            />
            <Card
            p={p2}
            v={v3}
            />
            <Card
            p={p3}
            v={v2}

            />
            {/* <Card
            p={p4}
            /> */}
          </div>
    </div>
  );
};

export default Work;
