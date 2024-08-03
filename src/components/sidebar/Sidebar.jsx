// STUFF
import { Link } from "react-router-dom";
import { ThemeColorContext } from "../../context/themeColor/ThemeColorContext";
import LogoutModal from "../logout/LogoutModal";

// CSS
import "./Sidebar.css";
import { useContext, useEffect, useState } from "react";

const Sidebar = () => {

  const { style } = useContext(ThemeColorContext);

    const [panelStatus, setPanelStatus] = useState(1);

    const [ showModal, setShowModal ] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleArrowClick = () => {
        if (panelStatus === 1) {
            setPanelStatus(0)
        } else {
            setPanelStatus(1)
        }
    }

    const showPanel = () => {
        if (panelStatus === 1 ) {
            return (
                <div className="sidebar-arrow">
                    <button onClick={handleArrowClick}>&#8676;</button>
                </div>
                
            )
        } else {
            return (
                <div className="sidebar-arrow sidebar-arrow-smaller">
                    <button onClick={handleArrowClick}>&#8677;</button>
                </div>
            )
        }
    }

  return (
    
      <div className="side-main">
        <nav>
          {/** Maybe we change text to icons later? */}

          <Link style={style} className={panelStatus === 1 ? "sideLink" : "sideLinkHide"} to="/profile">
            Profil
          </Link>
          <Link style={style} className={panelStatus === 1 ? "sideLink" : "sideLinkHide"} to="/profile/training">
            Logga träning
          </Link>
          <Link style={style} className={panelStatus === 1 ? "sideLink" : "sideLinkHide"} to="/profile/food">
            Logga mat
          </Link>
          <Link style={style} className={panelStatus === 1 ? "sideLink" : "sideLinkHide"} to="/profile/challenges">
            Utmaningar
          </Link>   
          <Link style={style} className={panelStatus === 1 ? "sideLink" : "sideLinkHide"} to="/profile/about">
            Om oss
          </Link>
          <Link style={style} className={panelStatus === 1 ? "sideLink" : "sideLinkHide"} to="/profile/settings">
            Inställningar
          </Link>
          {/* <Link style={style} className={panelStatus === 1 ? "sideLink" : "sideLinkHide"} to="/logout">
            Logga ut
          </Link> */}
          <Link style={style} className={panelStatus === 1 ? "sideLink" : "sideLinkHide"} onClick={handleShow}>
            Logga ut
          </Link>
          <LogoutModal isOpen={showModal} onClose={handleClose}>
            
          </LogoutModal>
        </nav>
        {showPanel()}
      </div>
    
  );
};

export default Sidebar;
