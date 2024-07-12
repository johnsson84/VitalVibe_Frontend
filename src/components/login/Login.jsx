import { createContext } from "react"


const Login = createContext();


const LoginProvider = ({ children, username, password }) => {
    

    // this is the login method, and i will call it with login("username, "password)
    const login = async (username, password) => {
        const loginData = {
            username: `${username}`,
            password: `${password}`,
        };

        const options = {
            method: "POST",
            header: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(loginData),
        };

        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/auth/signin`,
                options
            );
            
        }
    }








  return (
    
  )
}
