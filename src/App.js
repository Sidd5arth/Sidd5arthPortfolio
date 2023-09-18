import Navbar from './Components/Navbar/Navbar.jsx';
import './App.css';
import Header from './Pages/Header.jsx';
function App() {
  return (
    <div>
      <div className='h-sec'>
        <div className='padding-nav'></div>
        <Navbar />
        <Header/>
      </div>
    </div>
  );
}

export default App;
