// STUFF
import "./VitalVibeApp.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//PROVIDERS
import { AuthProvider } from "./components/login/Authentication";
import { LoginProvider } from "./components/login/Login";

// PAGES
import Loginpage from "./pages/loginpage/Loginpage";
import TrainingPage from "./pages/trainingPage/TrainingPage";
import Registerpage from "./pages/registerpage/Registerpage";

function VitalVibeApp() {
  return (
    <div className="vitalvibe">
      <AuthProvider>
        <LoginProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Loginpage />}></Route>
              <Route path="/register" element={<Registerpage />}></Route>
              {/* <Route path="forgot-password" element={<ForgotPasswordPage />}></Route> */}
              <Route path="/training" element={<TrainingPage />}></Route>
            </Routes>
          </BrowserRouter>
        </LoginProvider>
      </AuthProvider>
    </div>
  );
}

export default VitalVibeApp;
