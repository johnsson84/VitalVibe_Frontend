import React from "react";

import { useEffect, useState, createContext, useContext } from "react";

const ThemeColorContext = createContext();

const ThemeColorProvider = ({ children }) => {
  // Sparar 'user' från localStorage om den finns
  const [savedUser, setSavedUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const [themeColor, setThemeColor] = useState(null);
  const [backgroundThemeColor, setBackgroundThemeColor] = useState("#198891");

  const style = { "--custom-color": backgroundThemeColor };

  // Metod för att byta färg, här kan vi lägga till fler färger. Glöm dock inte att lägga till i Settings.jsx under select.
  const changeColor = (color) => {
    switch (color) {
      case 1:
        setBackgroundThemeColor("#198891");
        break;
      case 2:
        setBackgroundThemeColor("#FF3C3C");
        break;
      case 3:
        setBackgroundThemeColor("#F4682E");
        break;
      case 4:
        setBackgroundThemeColor("#465146");
        break;
    }
  };

  // Bestämmer vilken siffra för themeColor som laddas in. 
  useEffect(() => {
    let colorFromLocalStorage = localStorage.getItem("savedColor");

    if (colorFromLocalStorage !== null) {
      setThemeColor(Number(colorFromLocalStorage));
    //   console.log("colorFromLocalStorage: " + colorFromLocalStorage);
    } else if (savedUser !== null) {
      setThemeColor(savedUser.themeColor);
    //   console.log("savedUser: " + savedUser.themeColor);
    } else {
      setThemeColor(1);
    //   console.log("no previous colors: 1");
    }
  }, []);

  useEffect(() => {
    changeColor(themeColor);
  }, [themeColor]);

  return (
    <ThemeColorContext.Provider
      value={{
        themeColor,
        setThemeColor,
        backgroundThemeColor,
        setBackgroundThemeColor,
        style,
        savedUser,
      }}
    >
      {children}
    </ThemeColorContext.Provider>
  );
};

export { ThemeColorContext, ThemeColorProvider };
