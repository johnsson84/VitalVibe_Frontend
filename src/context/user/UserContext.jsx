import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserProvider = ({children}) => {

    const currentUser = localStorage.getItem("loggedInUserId");
    const [currentUserInfo, setCurrentUserInfo] = useState({});

    {/** ============================================================== */}
    {/** UPDATE USER */}
    const updateUserTheme = async (themeColor) => {
        
        var Options = {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
      
            body: JSON.stringify({
              themeColor: `${themeColor}`,
            }),
          };
      
          try {
            const res = await fetch(
              `${import.meta.env.VITE_API_URL}/user/update/${currentUser}`,
              Options
            );
      
            const data = await res.json();
            // Skapar en ny variabel i localStorage som sparar tema siffran, enklare än att försöka uppdatera user.
            // Man kan uppdatera user i localStorage med infon som kommer från data i denna fetchen men den innehåller
            // allt från en user jämnfört med det lilla som kommer med i login fetchen.
            localStorage.setItem('savedColor', data.themeColor);
            // console.log(data)      
            
          } catch (error) {
            if (error) {
              console.log(error);
            }
          }
        };

    {/** ============================================================== */}
    {/** GET LOGGED IN USER INFO */}
    const getLoggedInUserInfo = async () => {

      var Options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      };

      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/user/findUser/${currentUser}`, Options)
        if (response.ok) {
          // console.log(await response.json());
          setCurrentUserInfo(await response.json());
        }
      } catch (connectionError) {
        console.log("Backend running? Error message: " + connectionError);
      }
    }
    

    return (
        <UserContext.Provider value={{ updateUserTheme, getLoggedInUserInfo, currentUserInfo }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider };