import React from "react";

import { useContext, useState, createContext, useEffect } from "react";

const ChallengeContext = createContext();

const ChallengeProvider = ({ children }) => {
  const [foundChallenges, setFoundChallenges] = useState([]);

  const getAllChallenges = async () => {
    var ChallengeOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    };

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/challenge/all`,
        ChallengeOptions
      );

      const data = await res.json();
      setFoundChallenges(data);
    } catch (error) {
      console.log(error);
    }
  };

  

  return (
    <ChallengeContext.Provider value={{ getAllChallenges, foundChallenges }}>
      {children}
    </ChallengeContext.Provider>
  );
};

export { ChallengeContext, ChallengeProvider };
