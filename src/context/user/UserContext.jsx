import { createContext, useContext } from "react";

const UserContext = createContext();

const UserProvider = ({children}) => {

    const currentUser = localStorage.getItem("loggedInUserId");

    const updateUserTheme = async (themeColor) => {
        
        var activityOptions = {
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
              activityOptions
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
    

    return (
        <UserContext.Provider value={{ updateUserTheme }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider };