import { useEffect, useState } from "react";

// CSS
import "./Logout.css";
import { Link, useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const [countDown, setCountDown] = useState(4);
  const line = `Återgår strax till login sidan... ${countDown}`;

  const logout = async () => {
    try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/logout`, {
            method: "POST",
            credentials: "include",
        })
        localStorage.removeItem("loggedInUserId");
        localStorage.removeItem("user");
        localStorage.removeItem("savedColor");
        localStorage.removeItem("loginDate");
        
        // console.log(fetchData);
        
    } catch (error) {
        console.log("Logout error: " + error)
    }
  }

  useEffect(() => {
    logout();
    setTimeout(() => {
        setCountDown(3)
    }, 1000);
    setTimeout(() => {
        setCountDown(2)
    }, 2000);
    setTimeout(() => {
        setCountDown(1)
    }, 3000);
    setTimeout(() => {
      navigate("/login");
    }, 4000);
  }, []);

  return (
    <div className="logoutPage">
      <div className="logoutFrame">
        <div>
          <h2>Utloggad</h2>
        </div>
        <div>
          <p>{line}</p>
        </div>
      </div>
      <div className="logoutDirect">
        <p className="directP">Klicka <Link to="/login" className="directLink">här</Link> för att återgå direkt.</p>
      </div>
    </div>
  );
};

export default Logout;
