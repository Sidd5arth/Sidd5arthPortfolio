import React, { useEffect, useState } from 'react'
import './mainpage.css'
import AniText from '../Components/TextAnimations/AniText'
import Background from '../Content/Background'

const MainPage = () => {
  const [text, setText] = useState({content:[], type:""});
  useEffect(()=>{
    setText(
      {
        ...text,
        content: ["Crafting", "Frontend", "Alchemy" ],
        type:"heading"
      }
    );
  }, [])

  return (
    <div className='Col-2'>
       <div className="content">
        <button className='resume-btn'>RESUME</button>
        <AniText
        text = {text}
        />
      </div>
      <Background/>
    </div>
  )
}

export default MainPage