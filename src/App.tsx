import './App.css'
import { Card } from './components/card'
import { RecentTicket } from './components/recentTicket'
import { SideBar } from './components/side-bar'
import { TolBar } from './components/tol-bar'

function App() {

  return (
    <>
      <div className='container'>
        <SideBar />
        <div className="main">
          <TolBar />
          <div className="cardBox">
            <Card iconName='eye-outline' name='Daily Views' number={1504} />
            <Card iconName='eye-outline' name='Daily Views' number={1504} />
            <Card iconName='eye-outline' name='Daily Views' number={1504} />
            <Card iconName='cash-outline' name='Earning' number={7842} />
          </div>
          <div className="details">
            <RecentTicket />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
