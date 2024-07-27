// STUFF
import "./VitalVibeApp.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


//PROVIDERS
import { AuthProvider } from "./components/login/Authentication";
import { LoginProvider } from "./components/login/Login";
import { ActivityProvider } from "./pages/trainingPage/TrainingContext";


// PAGES
import Loginpage from "./pages/loginpage/Loginpage";
import TrainingPage from "./pages/trainingPage/TrainingPage";


function VitalVibeApp() {
  return (
    <div className="vitalvibe">

      <AuthProvider>
        <LoginProvider>
              <ActivityProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Loginpage />}></Route>
              {/* <Route path="/register" element={<RegisterPage />}></Route> */}
              {/* <Route path="forgot-password" element={<ForgotPasswordPage />}></Route> */}
              <Route path="/training" element={<TrainingPage />}></Route>
            </Routes>
          </BrowserRouter>
</ActivityProvider>
        </LoginProvider>
      </AuthProvider>

    </div>
  );
}

export default VitalVibeApp;
