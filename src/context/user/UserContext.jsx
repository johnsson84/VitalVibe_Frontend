import { createContext } from "react";

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
      
            // const data = await res.json();
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