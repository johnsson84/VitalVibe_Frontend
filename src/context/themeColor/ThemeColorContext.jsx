import { useEffect, useState } from "react";

const { createContext } = require("react");

const ThemeColorContext = createContext;

const ThemeColorProvider = ({children}) => {

    const [themeColor, setThemeColor] = useState('#198891');

    useEffect(() => {
        const savedColor = localStorage.getItem('user.themeColor');
        switch(savedColor) {
            case 1 : 
                setThemeColor('#198891')
                break;
            case 2 :
                setThemeColor('#198891')
                break;
        }
    }, []);

    return (
        <ThemeColorContext.Provider value={{ themeColor, setThemeColor }}>
                {children}
        </ThemeColorContext.Provider>
    )
}

export {ThemeColorContext, ThemeColorProvider};