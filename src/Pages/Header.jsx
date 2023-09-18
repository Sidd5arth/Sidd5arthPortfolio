import React from 'react';
import './header.css';
import MainPage from './MainPage';
import WorkPage from './WorkPage';
import About from './About';

const Header = () => {
  return (
    <div className='p-site'>
      <MainPage/>
      <WorkPage/>
      <About/>
    </div>
  )
}

export default Header
