// CSS
import "./Settings.css";

// Context
import { ThemeColorContext } from "../../context/themeColor/ThemeColorContext";
import { useContext, useEffect, useState } from "react";

const Settings = () => {
  const { themeColor, setThemeColor, style } = useContext(ThemeColorContext);

  const handleThemeColorChange = (event) => {
    const selectedThemeColor = parseInt(event.target.value);
    setThemeColor(selectedThemeColor);
  }

  return (
    <div className="settingsPage">
      <h2 id="settings-headline">Settings</h2>

      <div className="themeColorSection">
        <div>
          <label>Theme color</label>
          <select name="color" id="color" value={themeColor} onChange={handleThemeColorChange}>
            <option>1</option>
            <option>2</option>
          </select>
        </div>
        <div style={style} className="picked-color"></div>
      </div>
    </div>
  );
};

export default Settings;
