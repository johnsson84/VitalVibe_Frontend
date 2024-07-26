// STUFF
import "./VitalVibeApp.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES
import Loginpage from "./pages/loginpage/Loginpage";
import TrainingPage from "./pages/trainingPage/TrainingPage";
import { ActivityProvider } from "./pages/trainingPage/TrainingContext";

function VitalVibeApp() {
  return (
    <div className="vitalvibe">
      <ActivityProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Loginpage />}></Route>
            <Route path="/training" element={<TrainingPage />}></Route>
          </Routes>
        </BrowserRouter>
      </ActivityProvider>
    </div>
  );
}

export default VitalVibeApp;
