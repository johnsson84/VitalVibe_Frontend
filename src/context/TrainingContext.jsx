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

      const data = await res.json();

      

      
    } catch (error) {
      if (error) {
        //setMessage(data[1].status);
        //console.log(data);
      }
    }
  };

  return (
    <ActivityContext.Provider value={{ addActivity}}>
      {children}
    </ActivityContext.Provider>
  );
};

export { ActivityContext, ActivityProvider };
