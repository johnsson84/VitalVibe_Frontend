import "./LogoutModal.css";
import { Link } from "react-router-dom";
import { ThemeColorContext } from "../../context/themeColor/ThemeColorContext";
import { useContext } from "react";

const LogoutModal = ({ isOpen, onClose, children }) => {

    const { style } = useContext(ThemeColorContext);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="logoutModal">
      <div className="modal-content">
        <div>
          <h1>Är du säker?</h1>
        </div>
        <div className="modal-options">
          <Link style={style} className="modal-link modal-link-hover modal-yes" to="/logout">Ja</Link>
          <Link style={style} className="modal-link modal-link-hover modal-no" onClick={onClose}>Nej</Link>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
