import { useEffect, useReducer, createContext, Children } from "react";

// this is the global initial state
const initialState = {
  user: null,
};

// Defining  the reducer
const rootReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };

    default:
      return state;
  }
};

// creating a context
const Authentication = createContext();
//creating a provider for the context

const AuthProvider = ({ Children }) => {
  const [state, dispacth] = useReducer(rootReducer, initialState);

  useEffect(() => {
    dispacth({
      type: "LOGIN",
      payload: JSON.stringify(window.localStorage.getItem("user")),
    });
  }, []);

  //LOG OUT
  const logout = async () => {
    try {
      await fetch(`${import.meta.env.VITE_API_URL}/auth/logout`, {
        method: "POST",
        credentials: "include",
      });

      localStorage.removeItem("loggedInUserId");
      localStorage.removeItem("user");
    } catch (logoutError) {
      console.log(logoutError);
    }
  };

  return (
    <Authentication.Provider value={{ state, dispacth, logout }}>
      {Children}
    </Authentication.Provider>
  );
};

export { Authentication, AuthProvider };
