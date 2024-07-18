import "./Loginpage.css";
import logo from "../../assets/logo.png";
import Alert from "../../components/alert/Alert.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { Authentication } from "../../components/login/Authentication.jsx";
import axios from "axios";

const Loginpage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const {
    state: { user },
    dispatch,
  } = useContext(Authentication);

  const handleSubmit = async (e) => {
    e.preventDefault();

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

      window.localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("loggedInUserId", data.id);
      console.log("User login: " + username);
      console.log("userId: " + data.id);

      //this will redirect the user to home page

      await navigate("/home");
      window.location.reload();
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        setErrorMessage(err.response.data.message);
      } else {
        // setErrorMessage(error.response.data.message);
        setErrorMessage(
          "Lösenordet eller användarnamnet du har angivit är felaktigt"
        );
      }
    }
  };
  console.log(errorMessage);

  const closeAlert = () => {
    setErrorMessage(null);
  };

  return (
    <>
      <main className="loginpage">
        <div className="loginpage-logo">
          <Link to="/login">
            <img src={logo} className="logo" alt="VitalVibe" />
          </Link>
        </div>

        <form className="login-form">
          <input
            className="username"
            type="text"
            placeholder="Användarnamn"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <br></br>
          <input
            className="password"
            type="text"
            placeholder="Lösenord"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <br></br>
          <div className="new-user">
            <div>
              <Link className="register" to="register">
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
            <button type="submit" onClick={handleSubmit}>
              Logga in
            </button>
          </div>
        </form>
        {errorMessage && <Alert alert={errorMessage} onClose={closeAlert} />}
      </main>
    </>
  );
};

export default Loginpage;
