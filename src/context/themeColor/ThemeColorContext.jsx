import { useEffect, useState } from "react";

const { createContext } = require("react");

const ThemeColorContext = createContext;

const ThemeColorProvider = ({children}) => {

    const [themeColor, setThemeColor] = useState('#ffffff');

    useEffect(() => {
        const savedColor = localStorage.getItem('user.themeColor');
        if (savedColor) {
            setThemeColor(savedColor)
        }
    }, []);

    return (
        <ThemeColorContext.Provider value={{}}>
                {children}
        </ThemeColorContext.Provider>
    )
}

export {ThemeColorContext, ThemeColorProvider};