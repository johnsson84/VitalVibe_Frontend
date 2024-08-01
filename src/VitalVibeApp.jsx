// STUFF
import "./VitalVibeApp.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//PROVIDERS
import { AuthProvider } from "./components/login/Authentication";
import { LoginProvider } from "./components/login/Login";
import { ActivityProvider } from "./context/TrainingContext";
import { FoodProvider } from "./context/FoodContext";

// PAGES
import Loginpage from "./pages/loginpage/Loginpage";
import HomePage from "./pages/HomePage";
import AddTraining from "./components/training/AddTraining";
import AddMeal from "./components/meal/AddMeal";

function VitalVibeApp() {
  return (
    <div className="vitalvibe">
      <AuthProvider>
        <LoginProvider>
          <ActivityProvider>
            <FoodProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/login" element={<Loginpage />}></Route>
                  {/* <Route path="/register" element={<RegisterPage />}></Route> */}
                  {/* <Route path="forgot-password" element={<ForgotPasswordPage />}></Route> */}
                  <Route path="/home" element={<HomePage />}>
                    <Route index element={<AddTraining></AddTraining>}></Route>{" "}
                    {/** Ändra AddTraining till Profile komponenten */}
                    <Route
                      path="/home/training"
                      element={<AddTraining></AddTraining>}
                    ></Route>
                    <Route
                      path="/home/food"
                      element={<AddMeal></AddMeal>}
                    ></Route>
                  </Route>
                </Routes>
              </BrowserRouter>
            </FoodProvider>
          </ActivityProvider>
        </LoginProvider>
      </AuthProvider>
    </div>
  );
}

export default VitalVibeApp;
