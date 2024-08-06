// IMPORT STUFF
import "../../pages/registerpage/Registerpage.css";
import logo from "../../assets/logo.png";
import { checkingErrors } from "../../helper/functions";
import Alert from "../../components/alert/Alert";

// IMPORT react
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaArrowRight, FaArrowUp } from "react-icons/fa";

const Registerpage = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  // I'm putting the state to false here.
  // Later i set it to true inside the handleSubmit once the form is submitted
  const [submitted, setSubmitted] = useState(false);
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    firstName: "",
    lastName: "",
    age: "",
    vo2max: "",
  });

  const closeAlert = () => {
    setErrorMessage(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  };

  // Shecks if any of the required fields are empty.
  // If true it shows the information text that describes the required input.
  const isAnyFieldEmpty = () => {
    const fieldsRequired = [
      "username",
      "email",
      "password",
      "confirmpassword",
      "firstName",
      "lastName",
      "age",
    ];
    return fieldsRequired.some((fieldName) => isFieldEmpty(fieldName));
  };

  // Shecks if any field in registerData is empty or undefined and therefore true
  // (Only shows the specific fields that are left empty), otherwise false.
  const isFieldEmpty = (fieldName) => {
    return !registerData[fieldName];
  };

  const handleSubmit = async (e, registerData) => {
    e.preventDefault();

    // HERE I SET THE STATE TO TRUE
    setSubmitted(true);

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
        setErrorMessage("regristrering ok");
        // Here i want to redirect the created user
        window.location.href = "/login";
      } else {
        const errorMessageCode = checkingErrors(res.status);
        setErrorMessage(errorMessageCode);
      }
    } catch (err) {
      console.log("Internt serverfel:", err);
      setErrorMessage("Ett oväntat fel inträffade");
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

        <div className="reverse-icon">
          <p className="reverse-icon-arrow-p">
            <FaArrowUp className="icon-arrow-up" />
          </p>
          <p className="reverse-icon-p">
            Loggan tar
            <br />
            dig tillbaks <FaArrowRight className="icon-arrow-right" />
          </p>
        </div>

        <div className="form-container">
          <form
            className="form"
            onSubmit={(e) => handleSubmit(e, registerData)}>
            {submitted && isAnyFieldEmpty() && (
              <div className="input-demand">
                <p>Fält som har symbolen (*) är krav och måste vara ifyllda</p>
              </div>
            )}
            {submitted && isFieldEmpty("username") && (
              <p className="p-demand">Användarnamn *</p>
            )}
            <input
              type="text"
              className="register-username"
              name="username"
              value={registerData.username}
              onChange={handleInputChange}
              placeholder="Användarnamn"
            />
            {submitted && isFieldEmpty("email") && (
              <p className="p-demand">E-post *</p>
            )}
            <input
              type="email"
              id="personalinfo"
              className="email"
              name="email"
              value={registerData.email}
              onChange={handleInputChange}
              placeholder="E-post"
            />
            {submitted && isFieldEmpty("password") && (
              <p className="p-demand">Lösenord *</p>
            )}
            <input
              type="password"
              className="register-password"
              name="password"
              value={registerData.password}
              onChange={handleInputChange}
              placeholder="Lösenord"
            />
            {submitted && isFieldEmpty("confirmpassword") && (
              <p className="p-demand">Bekräfta lösenord *</p>
            )}
            <input
              type="password"
              className="confirmpassword"
              name="confirmpassword"
              value={registerData.confirmpassword}
              onChange={handleInputChange}
              placeholder="Bekräfta lösenord"
            />
            {submitted && isFieldEmpty("firstName") && (
              <p className="p-demand">Förnamn *</p>
            )}
            <input
              type="text"
              id="personalinfo"
              className="firstName"
              name="firstName"
              value={registerData.firstname}
              onChange={handleInputChange}
              placeholder="Förnamn"
            />
            {submitted && isFieldEmpty("lastName") && (
              <p className="p-demand">Efternamn *</p>
            )}
            <input
              type="text"
              id="personalinfo"
              className="lastName"
              name="lastName"
              value={registerData.lastname}
              onChange={handleInputChange}
              placeholder="Efternamn"
            />
            {submitted && isFieldEmpty("age") && (
              <p className="p-demand">Ålder *</p>
            )}
            <input
              type="number"
              id="personalinfo"
              className="age"
              name="age"
              value={registerData.age}
              onChange={handleInputChange}
              placeholder="   Ålder"
            />
            <input
              type="number"
              id="personalinfo"
              className="vo2max"
              name="vo2max"
              value={registerData.vo2max}
              onChange={handleInputChange}
              placeholder="   Vo2max"
            />
            <div className="register-btn-container">
              <button className="register-btn" type="submit">
                Skapa Konto
              </button>
            </div>
          </form>
          {errorMessage && <Alert alert={errorMessage} onClose={closeAlert} />}
        </div>
      </main>
    </>
  );
};
export default Registerpage;
