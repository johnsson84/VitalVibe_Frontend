 import "./Loginpage.css";
 import { Link, useNavigate } from "react-router-dom";
 import logo from "../../assets/logo.png";
 import {useState, useContext} from "react"
 import { Authentication } from "../../components/login/Authentication.jsx";
 import axios from "axios";

 const Loginpage = () => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const navigate = useNavigate();

   const {
     state: { user },
     dispatch,
   } = useContext(Authentication);

   const handleSubmit = async (e) => {
     e.preventDefault();

     if (!username || (!password && password != data)) {
       alert("Fyll i ditt användarnamn och lösenord");
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

       await navigate("/");
       window.location.reload();
     } catch (err) {
       console.log(
         "Lösenordet eller användarnamnet du har angivit är felaktigt"
       );
     }
   };

   return (
     <>
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
            //  value={username}
            //  onChange={(e) => setUsername(e.target.value)}
           ></input>
           <br></br>
           <input
             className="password"
             type="text"
             placeholder="Lösenord"
            //  value={password}
            //  onChange={(e) => setPassword(e.target.value)}
           ></input>

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
     </>
   );
 };

 export default Loginpage;



















// import "./Loginpage.css";
// import logo from "../../assets/logo.png";
// import { Link, useNavigate } from "react-router-dom";
// import { useState, useContext } from "react";
// import { Authentication } from "../../components/login/Authentication.jsx";
// import axios from "axios";

// const Loginpage = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();

//   const {
//     state: { user },
//     dispatch,
//   } = useContext(Authentication);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!username || !password) {
//       alert("Fyll i ditt användarnamn och lösenord");
//       return;
//     }

//     try {
//       const { data } = await axios.post(
//         `${import.meta.env.VITE_API_URL}/auth/signin`,
//         { username, password },
//         { withCredentials: true }
//       );

//       dispatch({
//         type: "LOGIN",
//         payload: data,
//       });

//       window.localStorage.setItem("user", JSON.stringify(data));
//       localStorage.setItem("loggedInUserId", data.id);
//       console.log("User login: " + username);
//       console.log("userId: " + data.id);

//       // Redirect the user to home page
//       navigate("/");
//       window.location.reload();
//     } catch (err) {
//       console.log("Lösenordet eller användarnamnet du har angivit är felaktigt");
//     }
//   };

//   return (
//     <>
//     <main className="loginpage">
//       <div className="loginpage-logo">
//         <Link to="/">
//           <img src={logo} className="logo" alt="VitalVibe" />
//         </Link>
//         <h1 className="logo-h1">VitalVibe</h1>
//       </div>

//       <form className="login-form" onSubmit={handleSubmit}>
//         <input
//           className="username"
//           type="text"
//           placeholder="Användarnamn"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <br />
//         <input
//           className="password"
//           type="password"
//           placeholder="Lösenord"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br />
//         <div className="new-user">
//           <div>
//             <Link to="/register">Registrera konto</Link>
//           </div>
//           <div>
//             <Link to="/forgot-password">
//               Glömt
//               <br />
//               lösenord?
//             </Link>
//           </div>
//         </div>
//         <div className="login-button">
//           <button type="submit">Logga in</button>
//         </div>
//       </form>
//     </main>
//     </>
//   );
// };

// export default Loginpage;