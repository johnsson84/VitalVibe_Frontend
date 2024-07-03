// STUFF
import './VitalVibeApp.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// PAGES
import Loginpage from './pages/loginpage/Loginpage'

function VitalVibeApp() {
  

  return (
    <div className='vitalvibe'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default VitalVibeApp
