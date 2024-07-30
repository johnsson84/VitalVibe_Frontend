import React from "react";
import { UserContext } from "../../context/user/UserContext";

import { useEffect, useState, createContext, useContext } from "react";

const ThemeColorContext = createContext();

const ThemeColorProvider = ({children}) => {

    const { updateUserTheme } = useContext(UserContext);

    const savedUser = JSON.parse(localStorage.getItem('user'));
    const [themeColor, setThemeColor] = useState(savedUser.themeColor);
    const [backgroundThemeColor, setBackgroundThemeColor] = useState('#198891')
    
    // const style = {
    //     backgroundColor: backgroundThemeColor,
    //   };

    const style = {"--custom-color": backgroundThemeColor}
    
    
    

    useEffect(() => {
        updateUserTheme(themeColor)
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
        location.reload
    }, [themeColor]);

    

    return (
        <ThemeColorContext.Provider value={{ themeColor, setThemeColor, backgroundThemeColor, setBackgroundThemeColor, style }}>
                {children}
        </ThemeColorContext.Provider>
    )
}

export { ThemeColorContext, ThemeColorProvider };