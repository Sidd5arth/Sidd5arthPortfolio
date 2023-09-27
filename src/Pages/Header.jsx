import React from 'react';
import './header.css';
import MainPage from './MainPage';
import WorkPage from './WorkPage';
import About from './About';
// import TimeLinePage from './TimeLinePage';

const Header = ({setNavis, navis}) => {
  return (
    <div className='p-site'>
      <MainPage navis={navis}/>
      <WorkPage setNavis={setNavis}/>
      <About/>
      {/* <TimeLinePage/> */}
    </div>
  )
}

export default Header
