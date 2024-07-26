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
        userId: `${acitvity.userId}`,
        activityName: `${acitvity.activityName}`,
        distance: `${acitvity.distance}`,
        time: `${acitvity.time}`,
        calories: `${acitvity.calories}`,
        mood: `${acitvity.mood}`,
      }),
    };

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/activity/create`,
        activityOptions
      );
      console.log(JSON.stringify(acitvity) + " activity");
      console.log(activityOptions.body + " body");
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
