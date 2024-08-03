// IMPORT STUFF
import "../../pages/registerpage/Registerpage.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";

const Registerpage = () => {
  // const [imageLink, setImageLink] = useState("");

  const [registerData, setRegisterData] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
    firstName: '',
    lastName: '',
    age: '',
    vo2max: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  // should be registerData after (e,) like this (e, registerData)
  const handleSubmit = async (e, registerData) => {
    e.preventDefault();

    // CHECK PASSWORD MATCH
    if (registerData.password !== registerData.confirmpassword) {
      alert("the given password did not match");
      return;
    }
    // VALIDATE THE AGE
    if (
      !Number.isInteger(Number(registerData.age)) ||
      Number(registerData.age) <= 0
    ) {
      alert("you must enter a valid age");
      return;
    }





    // SETTING UP THE REQUEST OPTIONS
    var options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(registerData),
    };
    // SENDING A REQUEST TO THE BACKEND API
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/signup`,
        options
      );

      if (res.status === 200) {
        alert("regristrering ok");
        // Here i want to redirect the created user
        window.location.href = "/login";
      }
    } catch (err) {
      console.log("Misslyckad regristrering:", err);
      alert("gick ej att skapa användare");
    }
  };

  return (
    <>
      <main className="registerpage">
        <div className="registerpage-logo">
          <Link to="/login">
            <img src={logo} className="logo" alt="VitalVibe" />
          </Link>
        </div>
        <div className="form-container">
          <form className="form" onSubmit={(e) => handleSubmit(e, registerData)}>
            <br />
            <div className="input-demand"><p>Fält som har symbolen (*) är krav och måste vara ifyllda</p></div>
            <p>*</p>
            <input
              type="text"
              className="register-username"
              name="username"
              value={registerData.username}
              onChange={handleInputChange}
              placeholder="*  Användarnamn"
            />
            <br />
            <p>*</p>
            <input
              type="email"
              id="personalinfo"
              className="email"
              name="email"
              value={registerData.email}
              onChange={handleInputChange}
              placeholder="*  E-post"
            />
            <br />
            <p>*</p>
            <input
              type="password"
              className="register-password"
              name="password"
              value={registerData.password}
              onChange={handleInputChange}
              placeholder="*  Lösenord"
            />
            <br />
            <p>*</p>
            <input
              type="password"
              className="confirmpassword"
              name="confirmpassword"
              value={registerData.confirmpassword}
              onChange={handleInputChange}
              placeholder="*  Bekräfta lösenord"
            />
            <br />
            <p>*</p>
            <input
              type="text"
              id="personalinfo"
              className="firstName"
              name="firstName"
              value={registerData.firstname}
              onChange={handleInputChange}
              placeholder="*  Förnamn"
            />
            <br />
            <p>*</p>
            <input
              type="text"
              id="personalinfo"
              className="lastName"
              name="lastName"
              value={registerData.lastname}
              onChange={handleInputChange}
              placeholder="*  Efternamn"
            />
            <br />
            <p>*</p>
            <input
              type="number"
              id="personalinfo"
              className="age"
              name="age"
              value={registerData.age}
              onChange={handleInputChange}
              placeholder="*  Ålder"
            />
            <br />
            <input
              type="number"
              id="personalinfo"
              className="vo2max"
              name="vo2max"
              value={registerData.vo2max}
              onChange={handleInputChange}
              placeholder="Vo2max"
            />

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
