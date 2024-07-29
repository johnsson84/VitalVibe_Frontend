// IMPORT STUFF
import "../../pages/registerpage/Registerpage.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";

const Registerpage = () => {
  // const [imageLink, setImageLink] = useState("");

  const [registerData, setRegisterData] = useState({
    username: "",
    password: "",
    confirmpassword: "",
    email: "",
    firstName: "",
    lastName: "",
    age: "",
    // profilephoto: "",
    vo2max: "",
    // fivekm: "",
    // tenkm: "",
    // fifteenkm: "",
    // halfmarathon: "",
    // marathon: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  // const saveImageLink = () => {
  //   setRegisterData((prevData) => ({
  //     ...prevData,
  //     profilephoto: imageLink,
  //   }));
  // };


  // should be registerData after (e,) like this (e, registerData)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (registerData.password !== registerData.confirmpassword) {
    //   alert("the given password did not match");
    //   return;
    // }
    // if (
    //   (!Number,
    //   isInteger(Number(registerData.age)) || Number(registerData.age) <= 0)
    // ) {
    //   alert("Enter a valid age");
    //   return;
    // }

    var options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(registerData),
    };

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/signup`,
        options
      );

      if (res.status === 200) {
        alert("regristrering ok");
        // Here i want to redirect the user
      }
    } catch (err) {
      console.log("Misslyckad regristrering:", err);
      alert("gick ej att skapa anv'ndare");
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
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-subcontainer-1">
              <br />
              <input
                type="text"
                className="register-username"
                name="username"
                value={registerData.username}
                onChange={handleInputChange}
                placeholder="Användarnamn"
              />
              <br />
              <input
                type="password"
                className="register-password"
                name="password"
                value={registerData.password}
                onChange={handleInputChange}
                placeholder="Lösenord"
              />
              <br />
              <input
                type="password"
                className="confirmpassword"
                name="confirmpassword"
                value={registerData.confirmpassword}
                onChange={handleInputChange}
                placeholder="Bekräfta lösenord"
              />
              <br />
              <input
                type="email"
                id="personalinfo"
                className="email"
                name="email"
                value={registerData.email}
                onChange={handleInputChange}
                placeholder="E-mail"
              />
              <br />
              <input
                type="text"
                id="personalinfo"
                className="firstName"
                name="firstName"
                value={registerData.firstname}
                onChange={handleInputChange}
                placeholder="Förnamn"
              />
              <br />
              <input
                type="text"
                id="personalinfo"
                className="lastName"
                name="lastName"
                value={registerData.lastname}
                onChange={handleInputChange}
                placeholder="Efternamn"
              />
              <br />
              <input
                type="number"
                id="personalinfo"
                className="age"
                name="age"
                value={registerData.age}
                onChange={handleInputChange}
                placeholder="Ålder"
              />
            </div>

            <div className="form-subcontainer-2">
              {/* <input
                type="text"
                id="personalinfo"
                className="profilephoto"
                name="profilephoto"
                value={registerData.profilephoto}
                onChange={handleInputChange}
                placeholder="Klistra in Profil bild"
              /> */}
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
              <br />
              {/* <input
                type="text"
                id="distance"
                className="fivekm"
                name="fivekm"
                value={registerData.fivekm}
                onChange={handleInputChange}
                placeholder="Bästa 5km"
              />
              <br />
              <input
                type="text"
                id="distance"
                className="tenkm"
                name="tenkm"
                value={registerData.tenkm}
                onChange={handleInputChange}
                placeholder="Bästa 10km"
              />
              <br />
              <input
                type="text"
                id="distance"
                className="fifteenkm"
                name="fifteenkm"
                value={registerData.fifteenkm}
                onChange={handleInputChange}
                placeholder="Bästa 15km"
              />
              <br />
              <input
                type="text"
                id="distance"
                className="halfmarathon"
                name="halfmarathon"
                value={registerData.halfmarathon}
                onChange={handleInputChange}
                placeholder="Bästa 21km"
              />
              <br />
              <input
                type="text"
                id="distance"
                className="marathon"
                name="marathon"
                value={registerData.marathon}
                onChange={handleInputChange}
                placeholder="Bästa 42km"
              /> */}
            </div>
            <div className="register-btn-container">
              <button
                className="register-btn"
                type="submit"
              >
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
