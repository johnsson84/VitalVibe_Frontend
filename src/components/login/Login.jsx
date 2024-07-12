import { createContext } from "react";

const Login = createContext();

const LoginProvider = ({ children, username, password }) => {
  // this is the login method, and i will call it with login("username, "password)
  const login = async (username, password) => {
    const loginData = {
      username: `${username}`,
      password: `${password}`,
    };

    const options = {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(loginData),
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/auth/signin`,
        options
      );
      if (response.ok) {
        console.log(`Logged in as ${username}`);
      }
      const fetchData = await response.json();
      localStorage.setItem("LoggedInUserId", fetchData.id);

      // this is some console output for the debugging

      console.log(response.status);
      console.log(fetchData.id);
    } catch (err) {
      console.log("Error: " + err);
    }
  };

  return (
    <Login.Provider value={{ login, username, password }}>
      {children}
    </Login.Provider>
  );
};

export default Login;
