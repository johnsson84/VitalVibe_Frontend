import React from "react";

import { useEffect, useState, createContext, useContext } from "react";

const ThemeColorContext = createContext();

const ThemeColorProvider = ({children}) => {

    // Sparar 'user' från localStorage om den finns
    const [savedUser, setSavedUser] = useState(JSON.parse(localStorage.getItem('user')));
    
    // Sätt themeColor till siffra från 'user' om den finns, annars 1.
    const [themeColor, setThemeColor] = useState(
        (savedUser !== null ? savedUser.themeColor : 1)    
    );
    const [backgroundThemeColor, setBackgroundThemeColor] = useState('#198891')

    const style = {"--custom-color": backgroundThemeColor}
    
    useEffect(() => {
        switch(themeColor) {
            case 1 : 
                setBackgroundThemeColor('#198891')
                break;
            case 2 :
                setBackgroundThemeColor('#FF3C3C')
                break;
            case 3 : 
                setBackgroundThemeColor('#F4682E')
                break;
            case 4 : 
                setBackgroundThemeColor('#465146')
                break;
        }
    }, [themeColor]);

    

    return (
        <ThemeColorContext.Provider value={{ themeColor, setThemeColor, backgroundThemeColor, setBackgroundThemeColor, style, savedUser }}>
                {children}
        </ThemeColorContext.Provider>
    )
}

export { ThemeColorContext, ThemeColorProvider };