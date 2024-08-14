import { useEffect, useReducer, createContext } from "react";

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

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  useEffect(() => {
    dispatch({
      type: "LOGIN",
      payload: JSON.stringify(window.localStorage.getItem("user")),
    });
  }, []);

  return (
    <Authentication.Provider value={{ state, dispatch }}>
      {children}
    </Authentication.Provider>
  );
};

export { Authentication, AuthProvider }