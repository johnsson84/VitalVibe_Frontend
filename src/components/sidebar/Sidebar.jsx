// STUFF
import { Link } from "react-router-dom";

// CSS
import "./Sidebar.css";
import { useEffect, useState } from "react";

const Sidebar = () => {

    const [panelStatus, setPanelStatus] = useState(1);

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

          <Link className={panelStatus === 1 ? "sideLink" : "sideLinkHide"} to="/training">
            Logga träning
          </Link>
          <Link className={panelStatus === 1 ? "sideLink" : "sideLinkHide"} to="/food">
            Logga mat
          </Link>
          <Link className={panelStatus === 1 ? "sideLink" : "sideLinkHide"} to="/challenges">
            Utmaningar
          </Link>
          <Link className={panelStatus === 1 ? "sideLink" : "sideLinkHide"} to="/profile">
            Profil
          </Link>
          <Link className={panelStatus === 1 ? "sideLink" : "sideLinkHide"} to="/about">
            Om oss
          </Link>
        </nav>
        {showPanel()}
      </div>
    
  );
};

export default Sidebar;
