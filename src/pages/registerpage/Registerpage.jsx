// IMPORT STUFF
import "../../pages/registerpage/Registerpage.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";

const Registerpage = () => {
  const [registerData, setRegisterData] = useState({
    username: "",
    password: "",
    confirmpassword: "",
    email: "",
    firstname: "",
    lastname: "",
    age: "",
    vo2max: "",
    fivekm: "",
    tenkm: "",
    fifteenkm: "",
    halfmarathon: "",
    marathon: "",
  });

  const handleInputChange = (e) => {
    const [name, value] = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (registerData.password !== registerData.confirmpassword) {
      alert("the given password did not match")
      return;
    }
    if (!Number,isInteger(Number(registerData.age)) || Number(registerData.age) <= 0) {
      alert("Enter a valid age")
      return;
    }
  }

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
              <input
                type="text"
                className="register-username"
                placeholder="Användarnamn"
              />
              <br />
              <input
                type="password"
                className="register-password"
                placeholder="Lösenord"
              />
              <br />
              <input
                type="password"
                className="confirmpassword"
                placeholder="Bekräfta lösenord"
              />
              <br />
              <input
                type="email"
                id="personalinfo"
                className="email"
                placeholder="E-mail"
              />
              <br />
              <input
                type="text"
                id="personalinfo"
                className="firstname"
                placeholder="Förnamn"
              />
              <br />
              <input
                type="text"
                id="personalinfo"
                className="lastname"
                placeholder="Efternamn"
              />
              <br />
              <input
                type="number"
                id="personalinfo"
                className="age"
                placeholder="Ålder"
              />
            </div>

            <div className="form-subcontainer-2">
              <input type="file" className="profilepic" placeholder="Profil bild" />
              <br />
              <input
                type="number"
                id="personalinfo"
                className="vo2max"
                placeholder="Vo2max"
              />
              <br />
              <input
                type="number"
                id="distance"
                className="fivekm"
                placeholder="Bästa 5km"
              />
              <br />
              <input
                type="number"
                id="distance"
                className="tenkm"
                placeholder="Bästa 10km"
              />
              <br />
              <input
                type="number"
                id="distance"
                className="fifteenkm"
                placeholder="Bästa 15km"
              />
              <br />
              <input
                type="number"
                id="distance"
                className="halfmarathon"
                placeholder="Bästa 21km"
              />
              <br />
              <input
                type="number"
                id="distance"
                className="marathon"
                placeholder="Bästa 42km"
              />
            </div>
            <div className="register-btn-container">
              <button className="register-btn" type="submit">
                Skapa Konto
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};
export default Registerpage;
