// IMPORT STUFF
import "../../pages/registerpage/Registerpage.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Registerpage = () => {

  return (
    <>
      <main className="registerpage">
        <div className="registerpage-logo">
          <Link to="/login">
            <img src={logo} className="logo" alt="VitalVibe" />
          </Link>
        </div>
        <div className="form-container">
          <form className="form">
            <div className="form-subcontainer-1">
              <br />
              <input type="text" className="register-username" placeholder="Användarnamn"
              />
              <br />
              <input type="password" className="register-password" placeholder="Lösenord"
              />
              <br />
              <input type="email" id="personalinfo" className="email" placeholder="E-mail"/>
              <br />
              <input type="text" id="personalinfo" className="firstname" placeholder="Förnamn"
              />
              <br />
              <input type="text" id="personalinfo" className="lastname" placeholder="Efternamn"
              />
              <br />
              <input type="number" id="personalinfo" className="age" placeholder="Ålder"/>
            </div>

            <div className="register-btn-container">
              <button className="register-btn" type="submit">
                Skapa Konto
              </button>
            </div>

            <div className="form-subcontainer-2">
              <br />
              <input
                type="number" id="personalinfo" className="vo2max" placeholder="Vo2max"
              />
              {/* <br />
            <input type="image" className="profilepicture" src="" alt="profil bild"/> */}
              <br />
              <input type="number" id="distance" className="5km" placeholder="Bästa 5km"
              />
              <br />
              <input type="number" id="distance" className="10km" placeholder="Bästa 10km"
              />
              <br />
              <input type="number" id="distance" className="15km" placeholder="Bästa 15km"
              />
              <br />
              <input type="number" id="distance" className="21" placeholder="Bästa 21km"
              />
              <br />
              <input type="number" id="distance" className="42" placeholder="Bästa 42km"
              />
            </div>
          </form>
        </div>
      </main>
    </>
  );
};
export default Registerpage;
