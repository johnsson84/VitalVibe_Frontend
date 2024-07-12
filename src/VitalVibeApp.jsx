// STUFF
import './VitalVibeApp.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/login/Authentication';

// PAGES
import Loginpage from './pages/loginpage/Loginpage'
import TrainingPage from './pages/trainingPage/TrainingPage';

function VitalVibeApp() {
  

  return (
    <div className='vitalvibe'>
      <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpage />}></Route>
          <Route path="/training" element={<TrainingPage />}></Route>
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default VitalVibeApp
