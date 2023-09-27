import Navbar from './Components/Navbar/Navbar.jsx';
import './App.css';
import Header from './Pages/Header.jsx';
import { useState } from 'react';
function App() {
  const [navis, setNavis] = useState(false);
  return (
    <div>
      <div className='h-sec'>
        <div className='padding-nav'></div>
        <Navbar navis={navis} setNavis={setNavis}/>
        <Header navis={navis} setNavis={setNavis}/>
      </div>
    </div>
  );
}

export default App;
