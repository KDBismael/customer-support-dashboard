import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { SideBar } from './components/side-bar';

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggle = (val: boolean) => {
    setToggleMenu(val);
  }
  return (
    <>
      <div className='container'>
        <SideBar isActive={toggleMenu} />
        <div className={`main ${toggleMenu ? 'active' : ''}`}>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
