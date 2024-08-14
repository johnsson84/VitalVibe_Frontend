// STUFF
import { Link } from "react-router-dom";
import { ThemeColorContext } from "../../context/themeColor/ThemeColorContext";
import LogoutModal from "../logout/LogoutModal";

// CSS
import "./Sidebar.css";
import { useContext, useEffect, useState } from "react";

const Sidebar = () => {
  const { style } = useContext(ThemeColorContext);
  const [panelStatus, setPanelStatus] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const handleArrowClick = () => {
    if (panelStatus === 1) {
      setPanelStatus(0);
    } else {
      setPanelStatus(1);
    }
  };

  const showPanel = () => {
    if (panelStatus === 1) {
      return (
        <div className="sidebar-arrow">
          <button onClick={handleArrowClick}>&#8676;</button>
        </div>
      );
    } else {
      return (
        <div className="sidebar-arrow sidebar-arrow-smaller">
          <button onClick={handleArrowClick}>&#8677;</button>
        </div>
      );
    }
  };

  return (
    <div className="side-main">
      <nav style={style}>
        <Link className="sideLink" to="/profile">
          <img src="nav_profile.svg" />
          <p className={panelStatus === 1 ? null : "sideLinkHide"}>Profile</p>
        </Link>
        <Link className="sideLink" to="/profile/training">
          <img src="nav_training.svg" />
          <p className={panelStatus === 1 ? null : "sideLinkHide"}>
            Logga träning
          </p>
        </Link>
        <Link className="sideLink" to="/profile/food">
          <img src="nav_food.svg" />
          <p className={panelStatus === 1 ? null : "sideLinkHide"}>Logga mat</p>
        </Link>
        <Link className="sideLink" to="/profile/challenges">
          <img src="nav_challenges.svg" />
          <p className={panelStatus === 1 ? null : "sideLinkHide"}>
            Utmaningar
          </p>
        </Link>
        <Link className="sideLink" to="/profile/about">
          <img src="nav_about.svg" />
          <p className={panelStatus === 1 ? null : "sideLinkHide"}>Om oss</p>
        </Link>
        <Link className="sideLink" to="/profile/settings">
          <img src="nav_settings.svg" />
          <p className={panelStatus === 1 ? null : "sideLinkHide"}>
            Inställningar
          </p>
        </Link>
        <Link className="sideLink" onClick={handleShow}>
          <img
            src="nav_signout.svg"
            className={panelStatus === 1 ? "linkImg" : null}
          />
          <p className={panelStatus === 1 ? null : "sideLinkHide"}>Logga ut</p>
        </Link>
        <LogoutModal isOpen={showModal} onClose={handleClose}></LogoutModal>
      </nav>
      {showPanel()}
    </div>
  );
};

export default Sidebar;
