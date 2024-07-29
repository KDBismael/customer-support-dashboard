import { Outlet } from 'react-router-dom';
import './App.css';
import { SideBar } from './components/side-bar';
import { TolBar } from './components/tol-bar';
import { useMainStore } from './stores/mainStore';

function App() {
  const { isVisible } = useMainStore();

  return (
    <>
      <div className='container'>
        <SideBar />
        <div className={`main ${isVisible ? 'active' : ''}`}>
          <TolBar />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
