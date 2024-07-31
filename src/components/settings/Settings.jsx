// CSS
import "./Settings.css";

// Context
import { ThemeColorContext } from "../../context/themeColor/ThemeColorContext";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user/UserContext";

const Settings = () => {
  const { themeColor, setThemeColor, style } = useContext(ThemeColorContext);
  const { updateUserTheme } = useContext(UserContext);

  const handleThemeColorChange = (event) => {
    const selectedThemeColor = parseInt(event.target.value);
    setThemeColor(selectedThemeColor); // Sätt themeColor efter val i dropdown.
    updateUserTheme(selectedThemeColor); // Sätt themeColor för usern i databasen.
  }

  return (
    <div className="settingsPage">
      <h2 id="settings-headline">Settings</h2>

      <div className="themeColorSection">
        <div>
          <label>Theme color</label>
          <select name="color" id="color" value={(themeColor === null ? undefined : themeColor)} onChange={handleThemeColorChange}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <div style={style} className="picked-color"></div>
      </div>
    </div>
  );
};

export default Settings;
