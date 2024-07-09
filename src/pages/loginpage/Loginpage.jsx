import "./Loginpage.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Loginpage = () => {
  return (
    <main className="loginpage">
      <div className="loginpage-logo">
        <Link to="">
          <img src={logo} className="logo" alt="VitalVibe" />
        </Link>
        <h1 className="logo-h1">VitalVibe</h1>
      </div>
      

      <form className="login-form">
        <input
          className="username"
          type="text"
          placeholder="Användarnamn"
        ></input>
        <br></br>
        <input className="password" type="text" placeholder="Lösenord"></input>
        <br></br>
        <div className="new-user">
          <div>
            <a href="">Registrera konto</a>
          </div>
          <div>
            <a href="">
              Glömt<br></br> lösenord?
            </a>
          </div>
        </div>
        <div className="login-button">
          <button type="submit">Logga in</button>
        </div>
      </form>
    </main>
  );
};

export default Loginpage;
