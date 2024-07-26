import React from "react";

import { useContext, useState, createContext } from "react";

const ActivityContext = createContext();

const ActivityProvider = ({ children }) => {
  const [message, setMessage] = useState([]);
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
      //console.log(data.errors);
      //setMessage(data.errors);

      data.errors.map((item, index) => {
        console.log(
          `Item ${index + 1}: ${JSON.stringify(
            item.field + " " + item.defaultMessage
          )}`
        );
        setMessage(
          
            item.field + " " + item.defaultMessage
        
        );
        return null;
      });
    } catch (error) {
      if (error) {
        //setMessage(data[1].status);
        //console.log(data);
      }
    }
  };

  return (
    <ActivityContext.Provider value={{ addActivity, message }}>
      {children}
    </ActivityContext.Provider>
  );
};

export { ActivityContext, ActivityProvider };
