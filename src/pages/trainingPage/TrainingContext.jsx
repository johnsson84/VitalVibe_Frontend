import React from "react";

import { useContext, useState, createContext } from "react";

const ActivityContext = createContext();

const ActivityProvider = ({ children }) => {
  const addActivity = async (acitvity) => {
    var activityOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",

      body: JSON.stringify({
        acitvity,
      }),
    };

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/activity/create`,
        activityOptions
      );
      const data = await res.json();
      console.log(JSON.stringify(data + " data"));
    } catch (error) {
      console.log(error + " <- error");
    }
  };

  return (
    <ActivityContext.Provider value={{ addActivity }}>
      {children}
    </ActivityContext.Provider>
  );
};

export { ActivityContext, ActivityProvider };
