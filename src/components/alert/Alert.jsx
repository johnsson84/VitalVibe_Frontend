import "../alert/Alert.css"

const Alert = ({alert, onClose }) => {
  return (
  <div className="alert-container">
    <div className="alert">
        <p>{alert}</p>
        <button onClick={onClose}>Close</button>
    </div>
  </div>
 )
}

export default Alert;