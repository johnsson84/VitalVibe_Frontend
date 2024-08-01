// STUFF
import "./VitalVibeApp.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//PROVIDERS
import { AuthProvider } from "./components/login/Authentication";
import { LoginProvider } from "./components/login/Login";
import { ActivityProvider } from "./context/TrainingContext";
import { ThemeColorProvider } from "./context/themeColor/ThemeColorContext";
import { UserProvider } from "./context/user/UserContext";

// PAGES
import Loginpage from "./pages/loginpage/Loginpage";
import HomePage from "./pages/HomePage";
import AddTraining from "./components/training/AddTraining";
import Profile from "./components/profile/Profile";
import Settings from "./components/settings/Settings";
import Logout from "./pages/logout/Logout";

function VitalVibeApp() {
  return (
    <div className="vitalvibe">
      <AuthProvider>
        <LoginProvider>
          <UserProvider>
            <ActivityProvider>
              <ThemeColorProvider>
                <BrowserRouter>
                  <Routes>
                    <Route path="/login" element={<Loginpage />}></Route>
                    {/* <Route path="/register" element={<RegisterPage />}></Route> */}
                    {/* <Route path="forgot-password" element={<ForgotPasswordPage />}></Route> */}
                    <Route path="/profile" element={<HomePage />}>
                      <Route index element={<Profile></Profile>}></Route>{" "}
                      <Route
                        path="/profile/training"
                        element={<AddTraining></AddTraining>}
                      ></Route>
                      <Route path="/profile/food" element={""}></Route>
                      <Route path="/profile/challenges" element={""}></Route>
                      <Route path="/profile/about" element={""}></Route>
                      <Route
                        path="/profile/settings"
                        element={<Settings></Settings>}
                      ></Route>
                    </Route>
                    <Route path="/logout" element={<Logout></Logout>}></Route>
                  </Routes>
                </BrowserRouter>
              </ThemeColorProvider>
            </ActivityProvider>
          </UserProvider>
        </LoginProvider>
      </AuthProvider>
    </div>
  );
}

export default VitalVibeApp;
