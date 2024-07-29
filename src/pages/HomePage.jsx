// PAGES
import { Routes, Route, Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import AddTraining from "../components/training/AddTraining";

// CSS
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="homeMain">
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
        </div>
      </div>
    </>
  );
};

export default HomePage;
