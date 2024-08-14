// PAGES
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";

// FUNCTIONS
import { useNavigate } from "react-router-dom";

// CSS
import "./HomePage.css";
import { useEffect } from "react";

const HomePage = () => {
  const navigate = useNavigate();
  let logoutTimer;
  const checkLoginTime = () => {
    if (!localStorage.getItem("loginDate")) {
      navigate("/logout");
    }
    // Get encoded date from localstorage and decode
    const encodedDate = localStorage.getItem("loginDate");
    let loginDate;
    // Catch invalid characters after manipulation
    try {
      loginDate = new Date(window.atob(encodedDate));
    } catch {
      navigate("/logout");
    }

    // Check current date
    const currentDate = new Date();
    // Check time difference between login time and current time.
    const diffTime = currentDate.getTime() - loginDate.getTime();
    // Catch "Not A Number" error after manipulation.
    if (isNaN(diffTime)) {
      navigate("/logout");
    }
    // Change last number for shorter logout interval for testing purpose ex 3 for three minutes.
    const timeBeforeLogout = 1000 * 60 * 60; // Default 60.

    // Comment out for testing in console.
    // console.log(`Logout in: ${diffTime / 1000 / 60} min / ${timeBeforeLogout / 1000 / 60} min`);

    // Check if difference time is equal or bigger than set logut time, default 60 min.
    if (diffTime >= timeBeforeLogout) {
      clearInterval(logoutTimer);
      navigate("/logout");
    }
  };

  useEffect(() => {
    // Timer to check login time every minute.
    logoutTimer = setInterval(() => {
      checkLoginTime();
    }, 1000 * 60);

    return () => {
      clearInterval(logoutTimer);
    };
  }, []);

  return (
    <>
      <div className="homeMain">
        {/* <div className="homeContainer"> */}
        <div className="homeLeft">
          <Sidebar></Sidebar>
        </div>
        <div className="homeRight">
          <div className="homeHeader">
            <Header></Header>
          </div>
          <div className="homeContent">
            <Outlet></Outlet>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default HomePage;
