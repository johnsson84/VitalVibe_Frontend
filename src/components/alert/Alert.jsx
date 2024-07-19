import "../alert/Alert.css";

const Alert = ({ alert, onClose }) => {
  return (
    <div className="background-layer">
      <div className="alert-container">
        <div className="alert">
          <p className="alert-p">{alert}</p>
          <button className="alert-button" onClick={onClose}>
            Försök igen
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
