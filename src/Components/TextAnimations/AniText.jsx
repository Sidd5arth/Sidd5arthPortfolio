import React, { useEffect, useRef } from 'react'
import './anitext.css';
import gsap from 'gsap';
import { SlowMo, Bounce, Power2 } from 'gsap/all';

const AniText = ({text}) => {
  console.log(text)
let c = useRef(null);
console.log(c);
useEffect(() =>{
  let ctx = gsap.context(() => {
    let textAnimation = gsap.timeline();
    textAnimation.set('.a', {y:150})
    textAnimation.to('.a', {
      y: 0,
      stagger: {
        each: 0.15
      },
      duration: 1,
      ease: Power2.easeInOut,
    })
  });
  return () => ctx.revert(); 
}, [text])

  return (
    <div className='ani-text'>
        {text.content.map((word) => {
          return word === ' '? <div className='a'>&nbsp;</div> : 
          <div className='text-mask'>
            <div className='a'>{word}</div>
          </div>
        })}
    </div>
  )
}

export default AniText
