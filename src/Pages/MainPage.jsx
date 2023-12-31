import React, { useEffect, useState } from 'react'
import './mainpage.css'
import AniText from '../Components/TextAnimations/AniText'
import Background from '../Content/Background'

const MainPage = ({navis}) => {
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

  const getResume = () => {
    const url = "https://drive.google.com/file/d/1aUdhCBM7L4w3KNX6ATi0odXKyQrfKE9P/view?usp=sharing"
    window.open(url, "_blank");
  }

  return (
    <div className='Col-2'>
       <div className="content">
        <button onClick={getResume} className={`resume-btn ${navis ? "resume-btn-hide" : "resume-btn-show"}`}>RESUME</button>
        <AniText
        text = {text}
        />
      </div>
      <Background/>
    </div>
  )
}

export default MainPage
