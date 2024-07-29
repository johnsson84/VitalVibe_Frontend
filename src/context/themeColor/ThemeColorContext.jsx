import { useState } from "react";

const { createContext } = require("react");

const ThemeColorContext = createContext;

const ThemeColorProvider = ({children}) => {

    const [themeColor, setThemeColor] = useState();

    return (
        <ThemeColorContext.Provider value={{}}>
                {children}
        </ThemeColorContext.Provider>
    )
}

export {ThemeColorContext, ThemeColorProvider};