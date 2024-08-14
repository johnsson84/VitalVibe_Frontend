//IMPORT COMPONENTS
import "./Loginpage.css";
import logo from "../../assets/logo.png";
import Alert from "../../components/alert/Alert.jsx";
import axios from "axios";

// IMPORT STUFF
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { Authentication } from "../../components/login/Authentication.jsx";

//IMPORT CONTEXT
import { ThemeColorContext } from "../../context/themeColor/ThemeColorContext.jsx";

const Loginpage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [buttonChange, setButtonChange] = useState("Försök igen");
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate();
  const { setThemeColor } = useContext(ThemeColorContext);

  const {
    state: { user },
    dispatch,
  } = useContext(Authentication);

  

  const isFieldEmpty = (fieldName) => {
    if (fieldName === "username") {
      return !username;
    } else if (fieldName === "password") {
      return !password;
    }
  };

  const handleSubmit = async (e, username, password) => {
    e.preventDefault();
    // Setting to true to confirm form has tried being submitted
    setSubmitted(true);

    if (!username || (!password && password != data)) {
      setErrorMessage("Fyll i ditt användarnamn och lösenord");
      return;
    }

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/signin`,
        {
          username,
          password,
        },
        {
          withCredentials: true, //this will show our cookie
        }
      );

      dispatch({
        type: "LOGIN",
        payload: data,
      });

      ////////////////////////////////////////////////////////////
      // SECTION ENCODE LOGIN TIME
      const loginDate = new Date().toJSON(); // Current time.
      const encodedDate = window.btoa(loginDate); // Encode time.
      localStorage.setItem('loginTime', encodedDate); // Save encoded time to local.
      ////////////////////////////////////////////////////////////

      window.localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("loggedInUserId", data.id);
      setThemeColor(data.themeColor); // Sätt themeColor från usern i databasen.
      console.log("User login: " + username);
      console.log("userId: " + data.id);
      console.log("theme: " + data.themeColor);

      //this will redirect the user to home page

      await navigate("/profile");
      window.location.reload();
    } catch (err) {
      if (err.response?.data?.message) {
        setErrorMessage("Felaktigt Användarnamn eller lösenord ");
      } else {
        // setErrorMessage(error.response.data.message);
        setErrorMessage(
          "Lösenordet eller användarnamnet du har angett är felaktigt"
        );
      }
    }
  };

  const closeAlert = () => {
    setErrorMessage(null);
    setButtonChange("Försök igen");
  };

  //För att hämta lagrat popup meddelande ifån post-begäran i registerpage.
  useEffect(() => {
    const okPopupMessage = localStorage.getItem("popupmessage");
    if (okPopupMessage) {
      setErrorMessage(okPopupMessage);
      // sätta button  i alert komponenten till OK istället för (försök igen).
      setButtonChange("OK");
      localStorage.removeItem("popupmessage");
    }
  }, []);

  return (
    <>
      <main className="loginpage">
        <div className="loginpage-logo">
          <Link to="/login">
            <img src={logo} className="logo" alt="VitalVibe" />
          </Link>
        </div>

        <form
          className="login-form"
          onSubmit={(e) => handleSubmit(e, username, password)}
        >
          {submitted && isFieldEmpty("username") && (<p className="p-demand">Användarnamn *</p>)}
          <input
            className="username"
            name="username"
            type="text"
            placeholder="Användarnamn"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          {submitted && isFieldEmpty("password") && (<p className="p-demand">Lösenord *</p>)}
          <input
            className="password"
            name="password"
            type="password"
            placeholder="Lösenord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <div className="new-user">
            <div>
              <Link className="register" to="/register">
                Regristrera konto
              </Link>
            </div>
            <div>
              <Link className="forgot-password" to="forgot-password">
                Glömt lösenord?
              </Link>
            </div>
          </div>
          <div className="login-button">
            <button type="submit">Logga in</button>
          </div>
        </form>
        {errorMessage && (
          <Alert
            alert={errorMessage}
            buttonChange={buttonChange}
            onClose={closeAlert}
          />
        )}
      </main>
    </>
  );
};

export default Loginpage;
